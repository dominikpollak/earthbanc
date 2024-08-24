import type { StringifiableRecord } from "query-string";
import { getUrl } from "./getUrl";

interface FetchError extends Error {
  status?: number;
}

interface FetchOptions extends RequestInit {
  params?: StringifiableRecord;
  timeout?: number;
  retryCount?: number;
  headers?: HeadersInit;
}

const fetchWithTimeout = (
  url: string,
  timeout: number,
  options?: RequestInit
): Promise<Response> => {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(
      () => reject(new Error("Request timed out")),
      timeout
    );
    fetch(url, options)
      .then((response) => {
        clearTimeout(timer);
        resolve(response);
      })
      .catch((error) => {
        clearTimeout(timer);
        reject(error);
      });
  });
};

export const handleFetch = async <T>(
  url: string,
  options?: FetchOptions
): Promise<T> => {
  const fullUrl = getUrl(url, options?.params);
  const timeout = options?.timeout ?? 10000;
  const retryCount = options?.retryCount ?? 2;
  const headers = options?.headers;

  for (let attempt = 0; attempt <= retryCount; attempt++) {
    try {
      const response = await fetchWithTimeout(fullUrl, timeout, {
        headers,
        method: options?.method ?? "GET",
      });

      if (!response.ok) {
        const error: FetchError = new Error("The network response failed.");
        error.status = response.status;

        throw error;
      }

      const data: T = await response.json();

      return data;
    } catch (error) {
      if (attempt !== retryCount) {
        console.warn(`Attempt ${attempt + 1} failed. Retrying...`);
        continue;
      }

      if (!(error instanceof Error)) {
        throw new Error("An unknown error occurred during fetch");
      }

      console.error("Fetch error:", error.message);
      throw error;
    }
  }

  throw new Error("Failed to fetch after retries");
};
