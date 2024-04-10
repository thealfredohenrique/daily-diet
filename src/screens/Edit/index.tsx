import { useNavigation } from "@react-navigation/native";
import { ArrowLeftIcon, Content, Header, Title, Wrapper } from "./styles";
import { TouchableOpacity } from "react-native";

export function Edit() {
  const navigation = useNavigation();

  function handleNavigationToHome() {
    navigation.navigate("home");
  }

  return (
    <Wrapper>
      <Header>
        <TouchableOpacity onPress={handleNavigationToHome}>
          <ArrowLeftIcon />
        </TouchableOpacity>

        <Title>Nova refeição</Title>
      </Header>

      <Content></Content>
    </Wrapper>
  );
}
