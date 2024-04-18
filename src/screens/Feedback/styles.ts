import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export const Wrapper = styled(SafeAreaView)`
  flex: 1;
  row-gap: 40px;
  background-color: ${({ theme }) => theme.color.gray100};
  justify-content: center;
  align-items: center;
`;

export const Header = styled.View`
  row-gap: 8px;
`;

export const Title = styled.Text`
  text-align: center;

  ${({ theme }) => css`
    color: ${theme.color.green700};
    font-family: ${theme.fontFamily.bold};
    font-size: ${theme.fontSize.xl}px;
  `}
`;

export const Subtitle = styled.Text`
  text-align: center;

  ${({ theme }) => css`
    color: ${theme.color.gray700};
    font-family: ${theme.fontFamily.regular};
    font-size: ${theme.fontSize.md}px;
  `}
`;

export const SubtitleHighlight = styled.Text`
  ${({ theme }) => css`
    color: ${theme.color.gray700};
    font-family: ${theme.fontFamily.bold};
    font-size: ${theme.fontSize.md}px;
  `}
`;

export const Illustration = styled.Image`
  width: 224px;
  height: 288px;
`;
