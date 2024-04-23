import AsyncStorage from "@react-native-async-storage/async-storage";
import { getAll } from "./get-all";
import { MEAL_COLLECTION } from "@storage/collections";

export async function deleteById(mealId: string) {
  try {
    const meals = await getAll();
    const value = meals.filter((meal) => meal.id !== mealId);

    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(value));
  } catch (error) {
    throw error;
  }
}
