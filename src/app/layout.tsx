import type { Metadata } from "next";
import { Signika_Negative } from "next/font/google";
import Navbar from "../components/layouts/Navbar";
import Wrapper from "../components/layouts/Wrapper";
import { ReactQueryClientProvider } from "../components/ReactQueryClientProvider";
import { GlobalStyle } from "../lib/GlobalStyles";
import StyledComponentsRegistry from "../lib/Registry";
import "./globals.css";

const signika = Signika_Negative({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Earthbanc",
  description: "TODO app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactQueryClientProvider>
      <html lang="en">
        <body className={signika.className}>
          <StyledComponentsRegistry>
            <GlobalStyle />
            <Navbar />
            <Wrapper>{children}</Wrapper>
          </StyledComponentsRegistry>
        </body>
      </html>
    </ReactQueryClientProvider>
  );
}
