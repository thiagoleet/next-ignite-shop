import { globalStyles } from "@/styles/global";
import { AppProps } from "next/app";
import Image from "next/image";
import logoImg from "../assets/logo.svg";
import { Container, Header } from "@/styles/pages/app";

// Applying the global styles
globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image
          src={logoImg}
          alt="Logo"
        />
      </Header>
      <Component {...pageProps} />
    </Container>
  );
}
