import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";
import { NextSeo } from "next-seo";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <NextSeo title="Challange Accepted" description="Web point" />
      <NextNProgress
        color="#303336"
        startPosition={0.3}
        stopDelayMs={200}
        height={2}
        showOnShallow={false}
        options={{ showSpinner: false }}
      />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
