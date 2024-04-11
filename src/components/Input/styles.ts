import styled, { css } from "styled-components/native";

export const Wrapper = styled.View`
  row-gap: 4px;
`;

export const Caption = styled.Text`
  ${({ theme }) => css`
    color: ${theme.color.gray600};
    font-family: ${theme.fontFamily.bold};
    font-size: ${theme.fontSize.sm}px;
  `}
`;

export const Entry = styled.TextInput`
  padding: 14px;
  border-width: 1px;
  border-radius: 6px;

  ${({ theme, multiline }) => css`
    min-height: ${multiline ? "120px" : "48px"};
    max-height: ${multiline ? "120px" : "48px"};
    color: ${theme.color.gray700};
    font-family: ${theme.fontFamily.regular};
    font-size: ${theme.fontSize.md}px;
    border-color: ${theme.color.gray300};
  `}
`;
