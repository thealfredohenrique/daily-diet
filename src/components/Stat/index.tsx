import { Size, Subtitle, Title } from "./styles";

interface StatProps {
  value: string | number;
  caption: string;
  size?: Size;
}

export function Stat({ value, caption, size = "xl" }: StatProps) {
  return (
    <>
      <Title size={size}>{value}</Title>
      <Subtitle>{caption}</Subtitle>
    </>
  );
}
