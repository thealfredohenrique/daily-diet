import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/collections";
import type { MealStorageDTO } from "./MealStorageDTO";

export async function getAll(): Promise<MealStorageDTO[]> {
  try {
    const storage = await AsyncStorage.getItem(MEAL_COLLECTION);
    const meals: MealStorageDTO[] = storage ? JSON.parse(storage) : [];

    return meals.map((meal) => ({
      ...meal,
      datetime: new Date(meal.datetime),
    }));
  } catch (error) {
    throw error;
  }
}
