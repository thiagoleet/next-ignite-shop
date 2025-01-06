import { globalStyles } from "@/styles/global";
import { AppProps } from "next/app";
import logoImg from "../assets/logo.svg";
import { Container, Header } from "@/styles/pages/app";

// Applying the global styles
globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <img
          src={logoImg.src}
          alt="Logo"
        />
      </Header>
      <Component {...pageProps} />
    </Container>
  );
}
