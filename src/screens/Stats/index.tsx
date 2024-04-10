import { useNavigation } from "@react-navigation/native";
import { Stat } from "@components/Stat";
import {
  ArrowLeftIcon,
  Card,
  Content,
  Grid,
  Header,
  NavigateBack,
  Title,
  Wrapper,
} from "./styles";

export function Stats() {
  const navigation = useNavigation();

  function handleNavigateToHome() {
    navigation.navigate("home");
  }

  return (
    <Wrapper hue="red">
      <Header>
        <NavigateBack onPress={handleNavigateToHome}>
          <ArrowLeftIcon hue="red" />
        </NavigateBack>

        <Stat
          value="90,86%"
          caption="das refeições dentro da dieta"
          size="xxl"
        />
      </Header>

      <Content>
        <Title>Estatísticas gerais</Title>

        <Grid>
          <Card color="gray" expanded>
            <Stat
              value="22"
              caption="melhor sequência de pratos dentro da dieta"
            />
          </Card>

          <Card color="gray" expanded>
            <Stat value="109" caption="refeições registradas" />
          </Card>

          <Card color="green">
            <Stat value="99" caption="refeições dentro da dieta" />
          </Card>

          <Card color="red">
            <Stat value="10" caption="refeições fora da dieta" />
          </Card>
        </Grid>
      </Content>
    </Wrapper>
  );
}
