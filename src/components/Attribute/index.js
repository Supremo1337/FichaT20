import { useContext } from "react";
import { useState } from "react";
import { UseStateProvider } from "../Context/UseStateProvider";
import SubmitBar from "../SubmitBar";
import { boxs } from "./boxs";
import {
  Content,
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
      {boxs.map((res, index) => {
        return (
          <Box gridColumn={res.gridColumn} gridRow={res.gridRow} key={index}>
            <AttributeTitle>{res.title}</AttributeTitle>
            <ModNumber>
              {res.modNumber == "attributeFor"
                ? attributeFor
                : res.modNumber == "attributeDes"
                ? attributeDes
                : res.modNumber == "attributeCon"
                ? attributeCon
                : res.modNumber == "attributeInt"
                ? attributeInt
                : res.modNumber == "attributeSab"
                ? attributeSab
                : attributeCar}
            </ModNumber>
            <AttributeInput
              onChange={onChange}
              placeholder="10"
              type="number"
              name={res.name}
            />
          </Box>
        );
      })}
      <SubmitBar gridColumn="1/4" gridRow="3/4" />
    </Content>
  );
}
