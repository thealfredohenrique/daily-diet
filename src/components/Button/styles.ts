import styled, { css } from "styled-components/native";

export type ButtonType = "primary" | "secondary";

export const Wrapper = styled.TouchableOpacity<{ type: ButtonType }>`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  column-gap: 12px;
  min-height: 50px;
  max-height: 50px;
  padding: 16px 24px;
  border-radius: 6px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.color.gray600};

  ${({ theme, type }) =>
    type === "primary"
      ? css`
          background-color: ${theme.color.gray600};
        `
      : css`
          background-color: transparent;
        `};
`;

export const Title = styled.Text<{ type: ButtonType }>`
  ${({ theme, type }) => css`
    color: ${type === "primary" ? theme.color.white : theme.color.gray700};
    font-family: ${theme.fontFamily.bold};
    font-size: ${theme.fontSize.sm}px;
  `}
`;
