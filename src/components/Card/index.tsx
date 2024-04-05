import { Icon, Subtitle, Title, Wrapper } from "./styles";

interface CardProps {
  title: string;
  subtitle: string;
  icon?: React.JSX.Element;
}

export function Card({ title, subtitle, icon }: CardProps) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>

      {icon && <Icon>{icon}</Icon>}
    </Wrapper>
  );
}
