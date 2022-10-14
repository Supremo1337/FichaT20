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
    { title: "FOR", number: "0", gridColumn: "1/2", gridRow: "1/2" },
    { title: "DES", number: "0", gridColumn: "2/3", gridRow: "1/2" },
    { title: "CON", number: "0", gridColumn: "3/4", gridRow: "1/2" },
    { title: "INT", number: "0", gridColumn: "1/2", gridRow: "2/3" },
    { title: "DES", number: "0", gridColumn: "2/3", gridRow: "2/3" },
    { title: "CON", number: "0", gridColumn: "3/4", gridRow: "2/3" },
  ];
  return (
    <Content>
      <BoxRow>
        {Boxinputs.map((res,index) => {
          return (
            <Box key={index} gridColumn={res.gridColumn} gridRow={res.gridRow}>
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
