import { Caption, Option, Options, Status, Title, Wrapper } from "./styles";

interface CheckProps {
  caption: string;
  value: boolean | null;
  onChange: (value: boolean) => void;
}

export function Check({ caption, value, onChange }: CheckProps) {
  function handleChangeValueToTrue() {
    onChange(true);
  }

  function handleChangeValueToFalse() {
    onChange(false);
  }

  return (
    <Wrapper>
      <Caption>{caption}</Caption>

      <Options>
        <Option
          hue="green"
          isSelected={value === true}
          onPress={handleChangeValueToTrue}
        >
          <Status hue="green" />
          <Title>Sim</Title>
        </Option>

        <Option
          hue="red"
          isSelected={value === false}
          onPress={handleChangeValueToFalse}
        >
          <Status hue="red" />
          <Title>Não</Title>
        </Option>
      </Options>
    </Wrapper>
  );
}
