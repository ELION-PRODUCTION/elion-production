import type { AppProps } from "next/app";
import "@/src/styles/globals.css";
import "@/src/styles/home.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
