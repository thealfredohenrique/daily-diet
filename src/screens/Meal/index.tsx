import { PencilSimpleLine, Trash } from "phosphor-react-native";
import { useNavigation } from "@react-navigation/native";
import { Button } from "@components/Button";
import { Header } from "@components/Header";
import {
  About,
  Background,
  Section,
  Span,
  Status,
  Subtitle,
  Tag,
  Title,
  Wrapper,
} from "./styles";

export function Meal() {
  const navigation = useNavigation();

  function handleNavigationToHome() {
    navigation.navigate("home");
  }

  return (
    <Background>
      <Header title="Refeição" onNavigateBack={handleNavigationToHome} />

      <Wrapper>
        <About>
          <Section>
            <Title size="lg">Sanduíche</Title>
            <Subtitle>
              Sanduíche de pão integral com atum e salada de alface e tomate
            </Subtitle>
          </Section>

          <Section>
            <Title size="sm">Data e hora</Title>
            <Subtitle>12/08/2022 às 16:00</Subtitle>
          </Section>

          <Tag>
            <Status />
            <Span>dentro da dieta</Span>
          </Tag>
        </About>

        <Button title="Editar refeição" icon={PencilSimpleLine} />
        <Button title="Excluir refeição" icon={Trash} type="secondary" />
      </Wrapper>
    </Background>
  );
}
