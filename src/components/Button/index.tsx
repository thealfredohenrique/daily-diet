import type { TouchableOpacityProps } from "react-native";
import type { IconProps } from "phosphor-react-native";
import { useTheme } from "styled-components/native";
import { ButtonType, Title, Wrapper } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  type?: ButtonType;
  icon?: (props: IconProps) => JSX.Element;
}

export function Button({
  title,
  type = "primary",
  icon,
  ...rest
}: ButtonProps) {
  const { color } = useTheme();
  const Icon = icon;
  const iconColor = type === "primary" ? color.white : color.gray700;

  return (
    <Wrapper type={type} {...rest}>
      {Icon && <Icon size={18} color={iconColor} />}
      <Title type={type}>{title}</Title>
    </Wrapper>
  );
}
