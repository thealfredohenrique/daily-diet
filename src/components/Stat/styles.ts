import styled, { css } from "styled-components/native";
import theme from "@themes/default";

interface TitleProps {
  size: keyof typeof theme.fontSize;
}

export const Title = styled.Text<TitleProps>`
  text-align: center;

  ${({ theme, size }) => css`
    color: ${theme.color.gray700};
    font-family: ${theme.fontFamily.bold};
    font-size: ${theme.fontSize[size]}px;
  `}
`;

export const Subtitle = styled.Text`
  text-align: center;

  ${({ theme }) => css`
    color: ${theme.color.gray600};
    font-family: ${theme.fontFamily.regular};
    font-size: ${theme.fontSize.sm}px;
  `}
`;
