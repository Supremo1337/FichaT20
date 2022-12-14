import { useState } from "react";
import { Title } from "../../styles/global";
import { InputSkills, NameSkills } from "../Skills/styles";
import SubmitBar from "../SubmitBar";
import {
  ColumnItens,
  Content,
  Group,
  InputsLoadGroup,
  ItensBox,
  ItensTitle,
  LoadAndStrenght,
  Info,
  MoreContent,
  ThreeColumn,
  Tibar,
  TSTO,
} from "./styles";

export default function Invetory() {
  const [weight, setWeight] = useState({
    num: "",
    num2: "",
  });
  const [result, setResult] = useState("");

  const InputsItensBox = [{}, { display: "none" }];
  const InputsRows = [
    { name: "num" },
    { name: "num2" },
    { name: "" },
    { name: "" },
    { name: "" },
    { name: "" },
    { name: "" },
    { name: "" },
    { name: "" },
    { name: "" },
  ];
  const InputsRowsHalf = [{}, {}, {}, {}, {}];
  const Tibars = [{ title: "T$:" }, { title: "TO:" }];

  const handleInput = function (e) {
    setWeight({
      ...weight,
      [e.target.name]: e.target.value,
    });
  };

  const sum = function () {
    const { weight, weight2 } = input;
    setResult(Number(num) + Number(num2));
  };
  return (
    <Content>
      <Title fontSize="1.6rem">EQUIPAMENTO</Title>
      <Group>
        {InputsItensBox.map((res, index) => {
          return (
            <ItensBox key={index}>
              <ColumnItens width={"100%"}>
                <ItensTitle display={res.display}>Item</ItensTitle>
                {InputsRows.map((_, index) => {
                  return (
                    <InputSkills key={index} width={"90%"} height={"25px"} />
                  );
                })}
              </ColumnItens>
              <ColumnItens width={"35%"}>
                <ItensTitle display={res.display}>Peso</ItensTitle>
                {InputsRows.map((res, index) => {
                  return (
                    <InputSkills
                      key={index}
                      width={"100%"}
                      height={"25px"}
                      placeholder={"0.00"}
                      name={res.name}
                      onChange={handleInput}
                    />
                  );
                })}
              </ColumnItens>
            </ItensBox>
          );
        })}
        <ThreeColumn>
          <ItensBox height={"51%"}>
            <ColumnItens width={"100%"}>
              <ItensTitle display="none">Item</ItensTitle>
              {InputsRowsHalf.map((_, index) => {
                return (
                  <InputSkills key={index} width={"90%"} height={"25px"} />
                );
              })}
            </ColumnItens>
            <ColumnItens width={"35%"}>
              <ItensTitle display="none">Peso</ItensTitle>
              {InputsRowsHalf.map((_, index) => {
                return (
                  <InputSkills
                    key={index}
                    width={"100%"}
                    height={"25px"}
                    placeholder={"0.00"}
                  />
                );
              })}
            </ColumnItens>
          </ItensBox>
          <MoreContent>
            <ItensTitle>
              Se a sua carga Total (1?? valor) estiver maior que a carga M??xima
              (2?? Valor) considere uma Penalidade de Armadura de -2 nas per??cias
              devidas e seu Descolcamente deve ser reduzido em 3m [p??g. 154]
              (Esses modificadores N??O est??o automatizados na ficha(mas quero
              fazer))
            </ItensTitle>
            <LoadAndStrenght>
              <Info>
                <InputsLoadGroup>
                  <InputSkills
                    width={"45%"}
                    height={"25px"}
                    placeholder={"0.00"}
                    value={sum}
                  />
                  <ItensTitle>de</ItensTitle>
                  <InputSkills
                    width={"45%"}
                    height={"25px"}
                    placeholder={"30"}
                  />
                </InputsLoadGroup>
                <ItensTitle>
                  CARGA M??XIMA <br /> (3x de For??a)
                </ItensTitle>
              </Info>
              <Info>
                <InputsLoadGroup>
                  <InputSkills
                    width={"45%"}
                    height={"25px"}
                    placeholder={"100"}
                  />
                </InputsLoadGroup>
                <ItensTitle>
                  LEVANTAR <br /> (at?? 10x For??a)
                </ItensTitle>
              </Info>
              <TSTO>
                {Tibars.map((res, index) => {
                  return (
                    <Tibar key={index}>
                      <Title fontSize="1.6rem">{res.title}</Title>
                      <InputSkills
                        width={"70%"}
                        height={"25px"}
                        placeholder={"100"}
                      />
                    </Tibar>
                  );
                })}
              </TSTO>
            </LoadAndStrenght>
          </MoreContent>
        </ThreeColumn>
      </Group>
      <SubmitBar />
    </Content>
  );
}
