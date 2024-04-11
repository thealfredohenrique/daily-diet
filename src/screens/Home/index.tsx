import { SectionList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Plus } from "phosphor-react-native";
import { randomUUID } from "expo-crypto";
import logo from "@assets/logo.png";
import { Button } from "@components/Button";
import { MealListItem } from "@components/MealListItem";
import { Stat } from "@components/Stat";
import { formatDate } from "@utils/date";
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

const data = [
  {
    date: new Date(),
    data: [
      {
        id: randomUUID(),
        hour: "20:00",
        name: "X-tudo",
        isWithinDiet: false,
      },
      {
        id: randomUUID(),
        hour: "16:00",
        name: "Whey protein com leite",
        isWithinDiet: true,
      },
      {
        id: randomUUID(),
        hour: "12:30",
        name: "Salada cesar com frango grelhado",
        isWithinDiet: true,
      },
      {
        id: randomUUID(),
        hour: "09:30",
        name: "Vitamina de banana com abacate",
        isWithinDiet: true,
      },
    ],
  },
  {
    date: new Date(),
    data: [
      {
        id: randomUUID(),
        hour: "20:00",
        name: "X-tudo",
        isWithinDiet: false,
      },
      {
        id: randomUUID(),
        hour: "16:00",
        name: "Whey protein com leite",
        isWithinDiet: true,
      },
      {
        id: randomUUID(),
        hour: "12:30",
        name: "Salada cesar com frango grelhado",
        isWithinDiet: true,
      },
      {
        id: randomUUID(),
        hour: "09:30",
        name: "Vitamina de banana com abacate",
        isWithinDiet: true,
      },
    ],
  },
  {
    date: new Date(),
    data: [
      {
        id: randomUUID(),
        hour: "20:00",
        name: "X-tudo",
        isWithinDiet: false,
      },
      {
        id: randomUUID(),
        hour: "16:00",
        name: "Whey protein com leite",
        isWithinDiet: true,
      },
      {
        id: randomUUID(),
        hour: "12:30",
        name: "Salada cesar com frango grelhado",
        isWithinDiet: true,
      },
      {
        id: randomUUID(),
        hour: "09:30",
        name: "Vitamina de banana com abacate",
        isWithinDiet: true,
      },
    ],
  },
];

export function Home() {
  const navigation = useNavigation();

  function handleNavigateToStats() {
    navigation.navigate("stats");
  }

  function handleNavigateToEdit() {
    navigation.navigate("edit");
  }

  return (
    <Wrapper>
      <Header>
        <Logo source={logo} />
        <Avatar source={{ uri: "https://github.com/thealfredohenrique.png" }} />
      </Header>

      <Card hue="red" onPress={handleNavigateToStats}>
        <Stat
          value="90,86%"
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
        sections={data}
        keyExtractor={({ id }) => id}
        renderItem={({ item: { hour, name, isWithinDiet } }) => (
          <MealListItem hour={hour} name={name} isWithinDiet={isWithinDiet} />
        )}
        renderSectionHeader={({ section: { date } }) => (
          <MealListHeader>{formatDate(date, ".")}</MealListHeader>
        )}
        showsVerticalScrollIndicator={false}
      />
    </Wrapper>
  );
}
