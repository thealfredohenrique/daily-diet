import { ArrowUpRight } from "phosphor-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

type Hue = "green" | "red";

export const Wrapper = styled(SafeAreaView)`
  flex: 1;
  row-gap: 32px;
  background-color: ${({ theme }) => theme.color.gray100};
  padding: 24px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.Image`
  width: 82px;
  height: 37px;
`;

export const Avatar = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 99px;
  border-width: 2px;
  border-color: ${({ theme }) => theme.color.gray600};
`;

interface CardProps {
  hue: Hue;
}

export const Card = styled.TouchableOpacity<CardProps>`
  padding: 20px;
  background-color: ${({ theme, hue }) =>
    hue === "green" ? theme.color.green300 : theme.color.red300};
  border-radius: 8px;
  position: relative;
`;

export const NewMeal = styled.View`
  row-gap: 8px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.color.gray700};
    font-family: ${theme.fontFamily.regular};
    font-size: ${theme.fontSize.md}px;
  `}
`;

export const MealListHeader = styled.Text`
  padding: 8px 0;
  background-color: ${({ theme }) => theme.color.gray100};

  ${({ theme }) => css`
    color: ${theme.color.gray700};
    font-family: ${theme.fontFamily.bold};
    font-size: ${theme.fontSize.lg}px;
  `}
`;

interface ArrowUpRightIconProps {
  hue: Hue;
}

export const ArrowUpRightIcon = styled(
  ArrowUpRight
).attrs<ArrowUpRightIconProps>(({ theme, hue }) => ({
  size: 24,
  color: hue === "green" ? theme.color.green700 : theme.color.red700,
}))`
  position: absolute;
  right: 8px;
  top: 8px;
`;
