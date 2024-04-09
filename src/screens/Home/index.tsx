import { SectionList, TouchableOpacity } from "react-native";
import { randomUUID } from "expo-crypto";
import { ArrowUpRight, Plus } from "phosphor-react-native";
import logo from "@assets/logo.png";
import { Button } from "@components/Button";
import { Card } from "@components/Card";
import { MealListItem } from "@components/MealListItem";
import { formatDate } from "@utils/date";
import {
  Avatar,
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
  return (
    <Wrapper>
      <Header>
        <Logo source={logo} />
        <Avatar source={{ uri: "https://github.com/thealfredohenrique.png" }} />
      </Header>

      <TouchableOpacity>
        <Card
          title="90,86%"
          subtitle="das refeições dentro da dieta"
          icon={ArrowUpRight}
        />
      </TouchableOpacity>

      <NewMeal>
        <Title>Refeições</Title>
        <Button title="Nova refeição" icon={Plus} />
      </NewMeal>

      <SectionList
        sections={data}
        keyExtractor={({ id }) => id}
        renderItem={({ item: { hour, name, isWithinDiet } }) => (
          <MealListItem hour={hour} name={name} isWithinDiet={isWithinDiet} />
        )}
        renderSectionHeader={({ section: { date } }) => (
          <MealListHeader>{formatDate(date)}</MealListHeader>
        )}
        showsVerticalScrollIndicator={false}
      />
    </Wrapper>
  );
}
