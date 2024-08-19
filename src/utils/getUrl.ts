import queryString, { StringifiableRecord } from "query-string";

export const getUrl = (path: string, params?: StringifiableRecord) =>
  queryString.stringifyUrl({
    url: `https://jsonplaceholder.typicode.com/${path}`,
    query: params,
  });
