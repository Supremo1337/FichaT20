import {
  Content,
  BoxRow,
  Box,
  AttributeTitle,
  AttributeInput,
  ModNumber,
} from "./styles";

export default function Attribute() {
  const Boxinputs = [
    { title: "FOR", number: "0" },
    { title: "DES", number: "0" },
    { title: "CON", number: "0" },
  ];
  const Boxinputs2 = [
    { title: "INT", number: "0" },
    { title: "SAB", number: "0" },
    { title: "CAR", number: "0" },
  ];
  return (
    <Content>
      <BoxRow>
        {Boxinputs.map((res) => {
          return (
            <Box>
              <AttributeTitle>{res.title}</AttributeTitle>
              <ModNumber>{res.number}</ModNumber>
              <AttributeInput placeholder="10" type="number"></AttributeInput>
            </Box>
          );
        })}
      </BoxRow>
      <BoxRow>
        {Boxinputs2.map((res) => {
          return (
            <Box>
              <AttributeTitle>{res.title}</AttributeTitle>
              <ModNumber>{res.number}</ModNumber>
              <AttributeInput placeholder="10" type="number"></AttributeInput>
            </Box>
          );
        })}
      </BoxRow>
    </Content>
  );
}
