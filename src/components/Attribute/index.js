import { useState } from "react";
import {
  Content,
  BoxRow,
  Box,
  AttributeTitle,
  AttributeInput,
  ModNumber,
} from "./styles";

function calcu(level) {
  return Math.ceil(-5 + Math.floor(level / 2));
}

export default function Attribute() {
  const [attributeFor, setAttributeFor] = useState(0);
  const [attributeDes, setAttributeDes] = useState(0);
  const [attributeCon, setAttributeCon] = useState(0);
  const [attributeInt, setAttributeInt] = useState(0);
  const [attributeSab, setAttributeSab] = useState(0);
  const [attributeCar, setAttributeCar] = useState(0);

  const onChange = (e) => {
    e.target.name == "FOR"
      ? setAttributeFor(calcu(e.target.value))
      : e.target.name == "DES"
      ? setAttributeDes(calcu(e.target.value))
      : e.target.name == "CON"
      ? setAttributeCon(calcu(e.target.value))
      : e.target.name == "INT"
      ? setAttributeInt(calcu(e.target.value))
      : e.target.name == "SAB"
      ? setAttributeSab(calcu(e.target.value))
      : setAttributeCar(calcu(e.target.value));
  };

  return (
    <Content>
      <BoxRow>
        <Box>
          <AttributeTitle>FOR</AttributeTitle>
          <ModNumber>{attributeFor}</ModNumber>
          <AttributeInput
            onChange={onChange}
            placeholder="10"
            type="number"
            name="FOR"
          />
        </Box>
        <Box>
          <AttributeTitle>DES</AttributeTitle>
          <ModNumber>{attributeDes}</ModNumber>
          <AttributeInput
            onChange={onChange}
            placeholder="10"
            type="number"
            name="DES"
          />
        </Box>
        <Box>
          <AttributeTitle>CON</AttributeTitle>
          <ModNumber>{attributeCon}</ModNumber>
          <AttributeInput
            onChange={onChange}
            placeholder="10"
            type="number"
            name="CON"
          />
        </Box>
        <Box>
          <AttributeTitle>INT</AttributeTitle>
          <ModNumber>{attributeInt}</ModNumber>
          <AttributeInput
            onChange={onChange}
            placeholder="10"
            type="number"
            name="INT"
          />
        </Box>
        <Box>
          <AttributeTitle>SAB</AttributeTitle>
          <ModNumber>{attributeSab}</ModNumber>
          <AttributeInput
            onChange={onChange}
            placeholder="10"
            type="number"
            name="SAB"
          />
        </Box>
        <Box>
          <AttributeTitle>CAR</AttributeTitle>
          <ModNumber>{attributeCar}</ModNumber>
          <AttributeInput
            onChange={onChange}
            placeholder="10"
            type="number"
            name="CAR"
          />
        </Box>
      </BoxRow>
    </Content>
  );
}
