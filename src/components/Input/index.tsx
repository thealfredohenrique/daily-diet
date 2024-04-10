import type { TextInputProps } from "react-native";
import { Box, Caption, Wrapper } from "./styles";

interface InputProps extends TextInputProps {
  caption: string;
}

export function Input({ caption, multiline, ...rest }: InputProps) {
  return (
    <Wrapper>
      <Caption>{caption}</Caption>
      <Box multiline={multiline} {...rest} />
    </Wrapper>
  );
}
