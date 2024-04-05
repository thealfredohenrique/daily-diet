import type { TouchableOpacityProps } from "react-native";
import type { IconProps } from "phosphor-react-native";
import { useTheme } from "styled-components/native";
import { Title, Wrapper } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  icon?: (props: IconProps) => JSX.Element;
}

export function Button({ title, icon, ...rest }: ButtonProps) {
  const { color } = useTheme();
  const Icon = icon;

  return (
    <Wrapper {...rest}>
      {Icon && <Icon size={18} color={color.white} />}
      <Title>{title}</Title>
    </Wrapper>
  );
}
