import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "@/styles/pages/product";
import { useRouter } from "next/router";

export default function ProductPage() {
  const { query } = useRouter();

  return (
    <ProductContainer>
      <ImageContainer></ImageContainer>
      <ProductDetails>
        <h1>Camisa Titulo</h1>
        <span>R$ 99,99</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          vehicula, libero ut aliquam lacinia, metus nunc fermentum enim, nec
          varius purus risus nec purus. Aenean nec nisl nec nisl ultricies
          fermentum. Nullam auctor, erat nec aliquam tempus, nunc lorem
          sollicitudin turpis, nec aliquam erat nunc a purus. Integer nec
          fermentum est. Nullam auctor, erat nec aliquam tempus, nunc lorem
          sollicitudin turpis, nec aliquam erat nunc a purus. Integer nec
          fermentum est.
        </p>
        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  );
}
