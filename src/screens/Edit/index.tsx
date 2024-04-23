import { useCallback, useState } from "react";
import { Alert, ScrollView } from "react-native";
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { Button } from "@components/Button";
import { Check } from "@components/Check";
import { DateTimeInput } from "@components/DateTimeInput";
import { Header } from "@components/Header";
import { Input } from "@components/Input";
import { storage } from "@storage/index";
import { AppError } from "@utils/error";
import { Wrapper, Form, Background } from "./styles";

export interface EditRouteParams {
  id?: string;
}

export function Edit() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [datetime, setDatetime] = useState(new Date());
  const [isWithinDiet, setIsWithinDiet] = useState<boolean | null>(null);

  const navigation = useNavigation();
  const route = useRoute();

  const params = route.params as EditRouteParams;
  const id = params?.id;

  function handleNavigateBack() {
    if (id) {
      navigation.navigate("meal", { id });
    } else {
      navigation.navigate("home");
    }
  }

  async function handleSubmit() {
    try {
      if (name.trim().length === 0) {
        return Alert.alert("Nova refeição", "Informe o nome da refeição.");
      }

      if (isWithinDiet === null) {
        return Alert.alert(
          "Nova refeição",
          "Informe se a refeição está dentro da dieta."
        );
      }

      await storage.meal.create({ name, description, datetime, isWithinDiet });
      navigation.navigate("feedback", { isWithinDiet: !!isWithinDiet });
    } catch (error) {
      if (error instanceof AppError) {
        console.error(error.message);
      } else {
        console.error(error);
      }

      Alert.alert("Nova refeição", "Não foi possível criar a refeição.");
    }
  }

  async function fetchMeal() {
    try {
      if (!id) return;

      const response = await storage.meal.getById(id);

      setName(response.name);
      setDescription(response.description);
      setDatetime(response.datetime);
      setIsWithinDiet(response.isWithinDiet);
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

  return (
    <Background>
      <Header
        title={id ? "Editar refeição" : "Nova refeição"}
        onNavigateBack={handleNavigateBack}
      />

      <Wrapper>
        <ScrollView>
          <Form>
            <Input caption="Nome" value={name} onChangeText={setName} />
            <Input
              caption="Descrição"
              value={description}
              onChangeText={setDescription}
              multiline
            />
            <DateTimeInput datetime={datetime} onChange={setDatetime} />
            <Check
              caption="Está dentro da dieta?"
              value={isWithinDiet}
              onChange={setIsWithinDiet}
            />
          </Form>
        </ScrollView>

        <Button
          title={id ? "Salvar alterações" : "Cadastrar refeição"}
          onPress={handleSubmit}
        />
      </Wrapper>
    </Background>
  );
}
