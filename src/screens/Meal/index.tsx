import { useCallback, useState } from "react";
import { Alert } from "react-native";
import { PencilSimpleLine, Trash } from "phosphor-react-native";
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { MealStorageDTO } from "@storage/meal/MealStorageDTO";
import { storage } from "@storage/index";
import { formatDateTime } from "@utils/date";
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

interface MealRouteParams {
  id: string;
}

export function Meal() {
  const [meal, setMeal] = useState<MealStorageDTO>({
    id: "",
    name: "",
    description: "",
    datetime: new Date(),
    isWithinDiet: false,
  });
  const navigation = useNavigation();
  const route = useRoute();

  const { id } = route.params as MealRouteParams;

  function handleNavigationToHome() {
    navigation.navigate("home");
  }

  async function removeMeal() {
    try {
      await storage.meal.deleteById(id);
      navigation.navigate("home");
    } catch (error) {
      console.error(error);
      Alert.alert("Remover Grupo", "Não foi possível remover o grupo.");
    }
  }

  function handleRemoveMeal() {
    Alert.alert(
      "Remover Refeição",
      "Tem certeza que deseja remover a refeição?",
      [
        { text: "Não", style: "cancel" },
        { text: "Sim", onPress: removeMeal },
      ]
    );
  }

  async function fetchMeal() {
    try {
      const response = await storage.meal.getById(id);
      setMeal(response);
    } catch (error) {
      Alert.alert("Refeição", "Não foi possível carregar a refeição.");
      console.error(error);
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchMeal();
    }, [])
  );

  new Date().toLocaleDateString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <Background>
      <Header title="Refeição" onNavigateBack={handleNavigationToHome} />

      <Wrapper>
        <About>
          <Section>
            <Title size="lg">{meal.name}</Title>
            <Subtitle>{meal.description}</Subtitle>
          </Section>

          <Section>
            <Title size="sm">Data e hora</Title>
            <Subtitle>{formatDateTime(meal.datetime)}</Subtitle>
          </Section>

          <Tag>
            <Status hue={meal.isWithinDiet ? "green" : "red"} />
            {meal.isWithinDiet ? (
              <Span>dentro da dieta</Span>
            ) : (
              <Span>fora da dieta</Span>
            )}
          </Tag>
        </About>

        <Button title="Editar refeição" icon={PencilSimpleLine} />
        <Button
          title="Excluir refeição"
          icon={Trash}
          type="secondary"
          onPress={handleRemoveMeal}
        />
      </Wrapper>
    </Background>
  );
}
