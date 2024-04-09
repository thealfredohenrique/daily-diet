import styled, { css } from "styled-components/native";

export const Wrapper = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  column-gap: 12px;
  min-height: 50px;
  max-height: 50px;
  margin-bottom: 8px;
  padding: 12px;
  border-radius: 6px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.color.gray300};
`;

export const Divider = styled.View`
  height: 14px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.color.gray400};
`;

interface StatusProps {
  isWithinDiet: boolean;
}

export const Status = styled.View<StatusProps>`
  width: 14px;
  height: 14px;
  background-color: ${({ theme, isWithinDiet }) =>
    isWithinDiet ? theme.color.green500 : theme.color.red500};
  border-radius: 99px;
`;

export const Hour = styled.Text`
  ${({ theme }) => css`
    color: ${theme.color.gray700};
    font-family: ${theme.fontFamily.bold};
    font-size: ${theme.fontSize.xs}px;
  `}
`;

export const Name = styled.Text.attrs(() => ({
  numberOfLines: 1,
  ellipsizeMode: "tail",
}))`
  flex: 1;

  ${({ theme }) => css`
    color: ${theme.color.gray600};
    font-family: ${theme.fontFamily.regular};
    font-size: ${theme.fontSize.md}px;
  `}
`;
