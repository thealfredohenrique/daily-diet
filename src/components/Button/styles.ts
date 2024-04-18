import styled, { css } from "styled-components/native";

export const Wrapper = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  column-gap: 12px;
  min-height: 50px;
  max-height: 50px;
  background-color: ${({ theme }) => theme.color.gray600};
  border-radius: 6px;
  padding: 16px 24px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.color.white};
    font-family: ${theme.fontFamily.bold};
    font-size: ${theme.fontSize.sm}px;
  `}
`;
