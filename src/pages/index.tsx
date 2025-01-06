import { styled } from "@/styles";

const Button = styled("button", {
  backgroundColor: "$rocketseat",
  borderRadius: 4,
  border: 0,
  padding: "4px 8px",
});

export default function Home() {
  return (
    <h1>
      <Button>Enviar</Button>
    </h1>
  );
}
