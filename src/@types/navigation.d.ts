import type { EditRouteParams } from "@screens/Edit";
import type { MealRouteParams } from "@screens/Meal";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      stats: undefined;
      edit: EditRouteParams;
      feedback: {
        isWithinDiet: boolean;
      };
      meal: MealRouteParams;
    }
  }
}
