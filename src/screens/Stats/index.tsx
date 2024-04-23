import { useCallback, useState } from "react";
import { Alert, TouchableOpacity } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { Stat } from "@components/Stat";
import { MealStorageDTO } from "@storage/meal/MealStorageDTO";
import { storage } from "@storage/index";
import { formatPercentage } from "@utils/number";
import {
  ArrowLeftIcon,
  Card,
  Content,
  Grid,
  Header,
  Title,
  Wrapper,
} from "./styles";

export function Stats() {
  const [meals, setMeals] = useState<MealStorageDTO[]>([]);

  const navigation = useNavigation();

  const mealsCount = meals.length;
  const isWithinDietCount = meals.filter((meal) => meal.isWithinDiet).length;
  const offDietCount = mealsCount - isWithinDietCount;
  const isWithinDietPercentage = (isWithinDietCount * 100) / (mealsCount || 1);
  const bestIsWithinDietSequence = meals.reduce(
    ({ best, current }, { isWithinDiet }) => {
      current = isWithinDiet ? current + 1 : 0;
      best = Math.max(best, current);

      return { best, current };
    },
    { best: 0, current: 0 }
  ).best;

  function handleNavigateToHome() {
    navigation.navigate("home");
  }

  async function fetchMeals() {
    try {
      const response = await storage.meal.getAll();
      setMeals(response);
    } catch (error) {
      Alert.alert("Refeições", "Não foi possível carregar as refeições.");
      console.error(error);
    } finally {
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchMeals();
    }, [])
  );

  return (
    <Wrapper hue="red">
      <Header>
        <TouchableOpacity onPress={handleNavigateToHome}>
          <ArrowLeftIcon hue="red" />
        </TouchableOpacity>

        <Stat
          value={formatPercentage(isWithinDietPercentage)}
          caption="das refeições dentro da dieta"
          size="xxl"
        />
      </Header>

      <Content>
        <Title>Estatísticas gerais</Title>

        <Grid>
          <Card color="gray" expanded>
            <Stat
              value={bestIsWithinDietSequence}
              caption="melhor sequência de pratos dentro da dieta"
            />
          </Card>

          <Card color="gray" expanded>
            <Stat value={mealsCount} caption="refeições registradas" />
          </Card>

          <Card color="green">
            <Stat
              value={isWithinDietCount}
              caption="refeições dentro da dieta"
            />
          </Card>

          <Card color="red">
            <Stat value={offDietCount} caption="refeições fora da dieta" />
          </Card>
        </Grid>
      </Content>
    </Wrapper>
  );
}
