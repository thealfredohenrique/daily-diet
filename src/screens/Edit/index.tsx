import { useState } from "react";
import { Alert, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button } from "@components/Button";
import { Check } from "@components/Check";
import { DateTimeInput } from "@components/DateTimeInput";
import { Input } from "@components/Input";
import { storage } from "@storage/index";
import { AppError } from "@utils/error";
import { ArrowLeftIcon, Content, Form, Header, Title, Wrapper } from "./styles";

export function Edit() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [datetime, setDatetime] = useState(new Date());
  const [isWithinDiet, setIsWithinDiet] = useState<boolean | null>(null);

  const navigation = useNavigation();

  function handleNavigationToHome() {
    navigation.navigate("home");
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

  return (
    <Wrapper>
      <Header>
        <TouchableOpacity onPress={handleNavigationToHome}>
          <ArrowLeftIcon />
        </TouchableOpacity>

        <Title>Nova refeição</Title>
      </Header>

      <Content>
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

        <Button title="Cadastrar refeição" onPress={handleSubmit} />
      </Content>
    </Wrapper>
  );
}
