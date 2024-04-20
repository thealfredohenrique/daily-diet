import { randomUUID } from "expo-crypto";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/collections";
import { AppError } from "@utils/error";
import { MealStorageDTO } from "./MealStorageDTO";
import { getAll } from "./get-all";

type Meal = Omit<MealStorageDTO, "id">;

export async function create(meal: Meal) {
  try {
    if (meal.name.trim().length === 0) {
      throw new AppError("The 'name' field is required.");
    }

    const meals = await getAll();
    const value = [...meals, { ...meal, id: randomUUID() }];

    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(value));
  } catch (error) {
    throw error;
  }
}
