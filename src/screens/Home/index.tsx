import logo from "@assets/logo.png";
import { Avatar, Header, Logo, Wrapper } from "./styles";

export function Home() {
  return (
    <Wrapper>
      <Header>
        <Logo source={logo} />
        <Avatar source={{ uri: "https://github.com/thealfredohenrique.png" }} />
      </Header>
    </Wrapper>
  );
}
