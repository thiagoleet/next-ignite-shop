import { globalStyles } from "@/styles/global";
import { AppProps } from "next/app";

// Applying the global styles
globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
