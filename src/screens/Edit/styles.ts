import { ArrowLeft } from "phosphor-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export const Wrapper = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.color.gray300};
`;

export const Header = styled(SafeAreaView)`
  flex-direction: row;
  padding: 24px 24px 0;
`;

export const Title = styled.Text`
  margin: 0 auto;
  right: 12px;

  ${({ theme }) => css`
    color: ${theme.color.gray700};
    font-family: ${theme.fontFamily.bold};
    font-size: ${theme.fontSize.lg}px;
  `}
`;

export const Content = styled(SafeAreaView)`
  flex: 1;

  padding: 0 24px;
  background-color: ${({ theme }) => theme.color.gray100};
  border-radius: 20px;
`;

export const Form = styled.View`
  flex-flow: row wrap;
  gap: 24px;
  margin-bottom: auto;
`;

export const ArrowLeftIcon = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 24,
  color: theme.color.gray600,
}))``;
