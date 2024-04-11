import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { DatePicker } from "@components/DatePicker";
import { Input } from "@components/Input";
import { ArrowLeftIcon, Content, Header, Title, Wrapper } from "./styles";

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

      <Content>
        <Input caption="Nome" />
        <Input caption="Descrição" multiline />
        <DatePicker caption="Data" />
      </Content>
    </Wrapper>
  );
}
