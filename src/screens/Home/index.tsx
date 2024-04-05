import { TouchableOpacity } from "react-native";
import { ArrowUpRight, Plus } from "phosphor-react-native";
import { useTheme } from "styled-components/native";
import logo from "@assets/logo.png";
import { Button } from "@components/Button";
import { Card } from "@components/Card";
import { Avatar, Header, Logo, Wrapper } from "./styles";

export function Home() {
  const { color } = useTheme();

  return (
    <Wrapper>
      <Header>
        <Logo source={logo} />
        <Avatar source={{ uri: "https://github.com/thealfredohenrique.png" }} />
      </Header>

      <TouchableOpacity>
        <Card
          title="90,86%"
          subtitle="das refeições dentro da dieta"
          icon={ArrowUpRight}
        />
      </TouchableOpacity>

      <Button title="Nova refeição" icon={Plus} />
    </Wrapper>
  );
}
