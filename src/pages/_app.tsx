import { AppProps } from "next/app";
import Link from "next/link";
import Image from "next/image";
import { globalStyles } from "@/styles/global";
import { Container, Header } from "@/styles/pages/app";
import logoImg from "../assets/logo.svg";

// Applying the global styles
globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Link href="/">
          <Image
            src={logoImg}
            alt="Logo"
          />
        </Link>
      </Header>
      <Component {...pageProps} />
    </Container>
  );
}
