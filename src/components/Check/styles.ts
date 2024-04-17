import styled, { css } from "styled-components/native";

type Hue = "green" | "red";

export const Wrapper = styled.View`
  row-gap: 4px;
  width: 100%;
`;

export const Caption = styled.Text`
  ${({ theme }) => css`
    color: ${theme.color.gray600};
    font-family: ${theme.fontFamily.bold};
    font-size: ${theme.fontSize.sm}px;
  `}
`;

export const Options = styled.View`
  flex-direction: row;
  column-gap: 24px;
`;

interface OptionProps {
  isSelected: boolean;
  hue: Hue;
}

export const Option = styled.TouchableOpacity<OptionProps>`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  column-gap: 8px;
  min-height: 50px;
  max-height: 50px;
  border-width: 1px;
  border-radius: 6px;

  ${({ theme, isSelected, hue }) =>
    isSelected
      ? hue === "green"
        ? css`
            background-color: ${theme.color.green300};
            border-color: ${theme.color.green700};
          `
        : css`
            background-color: ${theme.color.red300};
            border-color: ${theme.color.red700};
          `
      : css`
          background-color: ${theme.color.gray200};
          border-color: ${theme.color.gray200};
        `};
`;

interface StatusProps {
  hue: Hue;
}

export const Status = styled.View<StatusProps>`
  width: 8px;
  height: 8px;
  background-color: ${({ theme, hue }) =>
    hue === "green" ? theme.color.green700 : theme.color.red700};
  border-radius: 9px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.color.gray700};
    font-family: ${theme.fontFamily.bold};
    font-size: ${theme.fontSize.sm}px;
  `}
`;
