import { useNavigation } from "@react-navigation/native";
import illustration from "@assets/illustration.png";
import { Button } from "@components/Button";
import {
  Header,
  Illustration,
  Subtitle,
  SubtitleHighlight,
  Title,
  Wrapper,
} from "./styles";

export function Feedback() {
  const navigation = useNavigation();

  function handleNavigationToHome() {
    navigation.navigate("home");
  }

  return (
    <Wrapper>
      <Header>
        <Title>Continue assim!</Title>
        <Subtitle>
          Você continua <SubtitleHighlight>dentro da dieta</SubtitleHighlight>.
          Muito bem!
        </Subtitle>
      </Header>

      <Illustration source={illustration} />

      <Button
        title="Ir para a página inicial"
        onPress={handleNavigationToHome}
      />
    </Wrapper>
  );
}
