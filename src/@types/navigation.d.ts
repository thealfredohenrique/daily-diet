import type { MealRouteParams } from "@screens/Meal";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      stats: undefined;
      edit: undefined;
      feedback: {
        isWithinDiet: boolean;
      };
      meal: MealRouteParams;
    }
  }
}
