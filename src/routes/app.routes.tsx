import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Edit } from "@screens/Edit";
import { Feedback } from "@screens/Feedback";
import { Home } from "@screens/Home";
import { Meal } from "@screens/Meal";
import { Stats } from "@screens/Stats";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="stats" component={Stats} />
      <Screen name="edit" component={Edit} />
      <Screen name="feedback" component={Feedback} />
      <Screen name="meal" component={Meal} />
    </Navigator>
  );
}
