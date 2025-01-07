import { ImageContainer, SuccessContainer } from "@/styles/pages/sucess";
import Link from "next/link";

export default function Success() {
  return (
    <SuccessContainer>
      <h1>Compra efetuada!</h1>
      <ImageContainer></ImageContainer>

      <p>
        Uhull <strong>USUARIO</strong>, sua compra <strong>PRODUTO</strong> já
        está à caminho da sua casa!
      </p>

      <Link href="/">Voltar ao catálogo</Link>
    </SuccessContainer>
  );
}
