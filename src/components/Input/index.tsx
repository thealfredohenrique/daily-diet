import type { TextInputProps } from "react-native";
import { Caption, Entry, Wrapper } from "./styles";

interface InputProps extends TextInputProps {
  caption: string;
}

export function Input({ caption, ...rest }: InputProps) {
  return (
    <Wrapper>
      <Caption>{caption}</Caption>
      <Entry {...rest} />
    </Wrapper>
  );
}
