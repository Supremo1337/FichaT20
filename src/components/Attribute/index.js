import { useState } from "react";
import SubmitBar from "../SubmitBar";
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

  const boxs = [
    {
      title: "FOR",
      modNumber: "attributeFor",
      name: "FOR",
      gridColumn: "1/2",
      gridRow: "1/2",
    },
    {
      title: "DES",
      modNumber: "attributeDes",
      name: "DES",
      gridColumn: "2/3",
      gridRow: "1/2",
    },
    {
      title: "CON",
      modNumber: "attributeCon",
      name: "CON",
      gridColumn: "3/4",
      gridRow: "1/2",
    },
    {
      title: "INT",
      modNumber: "attributeInt",
      name: "INT",
      gridColumn: "1/2",
      gridRow: "2/3",
    },
    {
      title: "SAB",
      modNumber: "attributeSab",
      name: "SAB",
      gridColumn: "2/3",
      gridRow: "2/3",
    },
    {
      title: "CAR",
      modNumber: "attributeCar",
      name: "CAR",
      gridColumn: "3/4",
      gridRow: "2/3",
    },
  ];

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
      <SubmitBar />
    </Content>
  );
}
