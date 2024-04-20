import { TouchableOpacity } from "react-native";
import { ArrowLeftIcon, Title, Wrapper } from "./styles";

interface HeaderProps {
  title: string;
  onNavigateBack: () => void;
}

export function Header({ title, onNavigateBack }: HeaderProps) {
  return (
    <Wrapper>
      <TouchableOpacity onPress={onNavigateBack}>
        <ArrowLeftIcon />
      </TouchableOpacity>

      <Title>{title}</Title>
    </Wrapper>
  );
}
