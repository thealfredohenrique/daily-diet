import theme from "@themes/default";
import { Subtitle, Title } from "./styles";

interface StatProps {
  value: string;
  caption: string;
  size?: keyof typeof theme.fontSize;
}

export function Stat({ value, caption, size = "xl" }: StatProps) {
  return (
    <>
      <Title size={size}>{value}</Title>
      <Subtitle>{caption}</Subtitle>
    </>
  );
}
