import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";
import theme from "@themes/default";

export type Size = keyof typeof theme.fontSize;

type Hue = "green" | "red";

interface TitleProps {
  size: Size;
}

export const Background = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.color.green300};
`;

export const Wrapper = styled(SafeAreaView)`
  flex: 1;
  padding: 0 24px;
  background-color: ${({ theme }) => theme.color.gray100};
  border-radius: 20px;
  row-gap: 8px;
`;

export const About = styled.View`
  row-gap: 24px;
  margin-bottom: auto;
`;

export const Section = styled.View`
  row-gap: 8px;
`;

export const Title = styled.Text<TitleProps>`
  ${({ theme, size }) => css`
    color: ${theme.color.gray700};
    font-family: ${theme.fontFamily.bold};
    font-size: ${theme.fontSize[size]}px;
  `}
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.color.gray600};
    font-family: ${theme.fontFamily.regular};
    font-size: ${theme.fontSize.md}px;
  `}
`;

export const Tag = styled.View`
  flex-direction: row;
  align-items: center;
  align-self: flex-start;
  column-gap: 8px;
  padding: 8px 16px;
  background-color: ${({ theme }) => theme.color.gray200};
  border-radius: 999px;
`;

export const Status = styled.View<{ hue: Hue }>`
  width: 8px;
  height: 8px;
  background-color: ${({ theme, hue }) =>
    hue === "green" ? theme.color.green700 : theme.color.red700};
  border-radius: 9px;
`;

export const Span = styled.Text`
  ${({ theme }) => css`
    color: ${theme.color.gray700};
    font-family: ${theme.fontFamily.regular};
    font-size: ${theme.fontSize.sm}px;
  `}
`;
