import { getAll } from "./get-all";

export async function getById(mealId: string) {
  try {
    const meals = await getAll();
    return meals.find((meal) => meal.id === mealId)!;
  } catch (error) {
    throw error;
  }
}
