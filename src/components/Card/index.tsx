import type { IconProps } from "phosphor-react-native";
import { useTheme } from "styled-components/native";
import { Icon, Subtitle, Title, Wrapper } from "./styles";

interface CardProps {
  title: string;
  subtitle: string;
  icon?: (props: IconProps) => JSX.Element;
}

export function Card({ title, subtitle, icon }: CardProps) {
  const { color } = useTheme();
  const IconElement = icon;

  return (
    <Wrapper>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>

      {IconElement && (
        <Icon>
          <IconElement size={24} color={color.green700} />
        </Icon>
      )}
    </Wrapper>
  );
}
