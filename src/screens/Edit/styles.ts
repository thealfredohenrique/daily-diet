import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Background = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.color.gray300};
`;

export const Wrapper = styled(SafeAreaView)`
  flex: 1;
  padding: 0 24px;
  background-color: ${({ theme }) => theme.color.gray100};
  border-radius: 20px;
`;

export const Form = styled.View`
  row-gap: 24px;
`;
