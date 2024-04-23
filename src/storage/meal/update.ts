import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/collections";
import { AppError } from "@utils/error";
import { MealStorageDTO } from "./MealStorageDTO";
import { getAll } from "./get-all";

type Meal = Omit<MealStorageDTO, "id">;

export async function update(mealId: string, meal: Meal) {
  try {
    if (meal.name.trim().length === 0) {
      throw new AppError("The 'name' field is required.");
    }

    const stored = await getAll();
    const meals = stored.filter((meal) => meal.id !== mealId);
    const value = [...meals, { id: mealId, ...meal }];

    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(value));
  } catch (error) {
    throw error;
  }
}
