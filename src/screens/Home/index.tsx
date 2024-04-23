import { useCallback, useState } from "react";
import { Alert, SectionList } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { Plus } from "phosphor-react-native";
import logo from "@assets/logo.png";
import { Button } from "@components/Button";
import { MealListItem } from "@components/MealListItem";
import { Stat } from "@components/Stat";
import { storage } from "@storage/index";
import { formatDate, formatTime } from "@utils/date";
import { formatPercentage } from "@utils/number";
import {
  ArrowUpRightIcon,
  Avatar,
  Card,
  Header,
  Logo,
  MealListHeader,
  NewMeal,
  Title,
  Wrapper,
} from "./styles";

interface MealSectionListData {
  id: string;
  hour: string;
  name: string;
  isWithinDiet: boolean;
}

interface MealSectionList {
  date: string;
  data: MealSectionListData[];
}

export function Home() {
  const [meals, setMeals] = useState<MealSectionList[]>([]);
  const [percentageWithinDiet, setPercentageWithinDiet] = useState(0);
  const navigation = useNavigation();

  function handleNavigateToStats() {
    navigation.navigate("stats");
  }

  function handleNavigateToEdit() {
    navigation.navigate("edit");
  }

  function handleNavigateToMeal(mealId: string) {
    navigation.navigate("meal", { id: mealId });
  }

  async function fetchMeals() {
    try {
      const response = await storage.meal.getAll();
      const data = response
        .sort((a, b) => b.datetime.getTime() - a.datetime.getTime())
        .reduce<MealSectionList[]>((accumulator, meal) => {
          const date = formatDate(meal.datetime, ".");
          const data: MealSectionListData = {
            id: meal.id,
            hour: formatTime(meal.datetime),
            name: meal.name,
            isWithinDiet: meal.isWithinDiet,
          };
          const section = accumulator.find((e) => e.date === date);

          if (section) {
            section.data.push(data);
            return accumulator;
          }

          const newSection: MealSectionList = { date, data: [data] };
          return [...accumulator, newSection];
        }, []);

      const isWithinDietLength = response.filter(
        (meal) => meal.isWithinDiet
      ).length;

      setPercentageWithinDiet(
        (isWithinDietLength * 100) / (response.length || 1)
      );

      setMeals(data);
    } catch (error) {
      console.error(error);
      Alert.alert("Refeições", "Não foi possível carregar as refeições.");
    } finally {
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchMeals();
    }, [])
  );

  return (
    <Wrapper>
      <Header>
        <Logo source={logo} />
        <Avatar source={{ uri: "https://github.com/thealfredohenrique.png" }} />
      </Header>

      <Card hue="red" onPress={handleNavigateToStats}>
        <Stat
          value={formatPercentage(percentageWithinDiet)}
          caption="das refeições dentro da dieta"
          size="xxl"
        />
        <ArrowUpRightIcon hue="red" />
      </Card>

      <NewMeal>
        <Title>Refeições</Title>
        <Button
          title="Nova refeição"
          icon={Plus}
          onPress={handleNavigateToEdit}
        />
      </NewMeal>

      <SectionList
        sections={meals}
        keyExtractor={({ id }) => id}
        renderItem={({ item: { id, hour, name, isWithinDiet } }) => (
          <MealListItem
            hour={hour}
            name={name}
            isWithinDiet={isWithinDiet}
            onPress={() => handleNavigateToMeal(id)}
          />
        )}
        renderSectionHeader={({ section: { date } }) => (
          <MealListHeader>{date}</MealListHeader>
        )}
        showsVerticalScrollIndicator={false}
      />
    </Wrapper>
  );
}
