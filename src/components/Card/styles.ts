import styled, { css } from "styled-components/native";

export const Wrapper = styled.View`
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: ${({ theme }) => theme.color.green300};
  border-radius: 8px;
  position: relative;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.color.gray700};
    font-family: ${theme.fontFamily.bold};
    font-size: ${theme.fontSize.xxl}px;
  `}
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.color.gray600};
    font-family: ${theme.fontFamily.regular};
    font-size: ${theme.fontSize.sm}px;
  `}
`;

export const Icon = styled.View`
  position: absolute;
  right: 8px;
  top: 8px;
`;
