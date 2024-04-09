import type { TouchableOpacityProps } from "react-native";
import { Divider, Hour, Name, Status, Wrapper } from "./styles";

interface MealListItemProps extends TouchableOpacityProps {
  hour: string;
  name: string;
  isWithinDiet: boolean;
}

export function MealListItem({
  hour,
  name,
  isWithinDiet,
  ...rest
}: MealListItemProps) {
  return (
    <Wrapper {...rest}>
      <Hour>{hour}</Hour>
      <Divider />

      <Name>{name}</Name>

      <Status isWithinDiet={isWithinDiet} />
    </Wrapper>
  );
}
