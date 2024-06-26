import { ArrowLeft } from "phosphor-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

type Hue = "green" | "red";

interface WrapperProps {
  hue: Hue;
}

export const Wrapper = styled.View<WrapperProps>`
  flex: 1;
  background-color: ${({ theme, hue }) =>
    hue === "green" ? theme.color.green300 : theme.color.red300};
`;

export const Header = styled(SafeAreaView)`
  padding: 24px 24px 0;
`;

export const Content = styled.View`
  flex: 1;
  padding: 32px 24px;
  background-color: ${({ theme }) => theme.color.gray100};
  border-radius: 20px;
  row-gap: 38px;
`;

export const Title = styled.Text`
  text-align: center;

  ${({ theme }) => css`
    color: ${theme.color.gray700};
    font-family: ${theme.fontFamily.bold};
    font-size: ${theme.fontSize.sm}px;
  `}
`;

export const Grid = styled.View`
  flex-flow: row wrap;
  gap: 12px;
`;

interface CardProps {
  color: "gray" | "green" | "red";
  expanded?: boolean;
}

export const Card = styled.View<CardProps>`
  row-gap: 8px;
  padding: 16px;
  border-radius: 8px;
  background-color: ${({ theme, color }) =>
    color === "green"
      ? theme.color.green300
      : color === "red"
      ? theme.color.red300
      : theme.color.gray200};

  ${({ expanded }) =>
    expanded
      ? css`
          width: 100%;
        `
      : css`
          flex: 1;
        `}
`;

interface ArrowLeftIconProps {
  hue: Hue;
}

export const ArrowLeftIcon = styled(ArrowLeft).attrs<ArrowLeftIconProps>(
  ({ theme, hue }) => ({
    size: 24,
    color: hue === "green" ? theme.color.green700 : theme.color.red700,
  })
)``;
