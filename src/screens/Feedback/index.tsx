import { useNavigation, useRoute } from "@react-navigation/native";
import illustrationWithinDiet from "@assets/illustration-within-diet.png";
import illustrationOffDiet from "@assets/illustration-off-diet.png";
import { Button } from "@components/Button";
import {
  Header,
  Illustration,
  Subtitle,
  SubtitleHighlight,
  Title,
  Wrapper,
} from "./styles";

interface RouteParams {
  isWithinDiet: boolean;
}

export function Feedback() {
  const navigation = useNavigation();
  const route = useRoute();

  const { isWithinDiet } = route.params as RouteParams;

  function handleNavigationToHome() {
    navigation.navigate("home");
  }

  if (isWithinDiet) {
    return (
      <Wrapper>
        <Header>
          <Title hue="green">Continue assim!</Title>
          <Subtitle>
            Você continua <SubtitleHighlight>dentro da dieta</SubtitleHighlight>
            . Muito bem!
          </Subtitle>
        </Header>

        <Illustration source={illustrationWithinDiet} />

        <Button
          title="Ir para a página inicial"
          onPress={handleNavigationToHome}
        />
      </Wrapper>
    );
  } else {
    return (
      <Wrapper>
        <Header>
          <Title hue="red">Que pena!</Title>
          <Subtitle>
            Você <SubtitleHighlight>saiu da dieta</SubtitleHighlight> dessa vez,
            mas continue se esforçando e não desista!
          </Subtitle>
        </Header>

        <Illustration source={illustrationOffDiet} />

        <Button
          title="Ir para a página inicial"
          onPress={handleNavigationToHome}
        />
      </Wrapper>
    );
  }
}
