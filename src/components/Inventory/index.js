import { Title } from "../../styles/global";
import { InputSkills, NameSkills } from "../Skills/styles";
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
  const InputsItensBox = [{}, {}];
  const InputsRows = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
  const InputsRows5 = [{}, {}, {}, {}, {}];
  const Tibars = [{ title: "T$:" }, { title: "TO:" }];

  return (
    <Content>
      <Title>EQUIPAMENTO</Title>
      <Group>
        {InputsItensBox.map((res) => {
          return (
            <ItensBox>
              <ColumnItens width={"100%"}>
                <ItensTitle>Item</ItensTitle>
                {InputsRows.map((res) => {
                  return (
                    <InputSkills width={"90%"} height={"25px"}></InputSkills>
                  );
                })}
              </ColumnItens>
              <ColumnItens width={"30%"}>
                <ItensTitle>Peso</ItensTitle>
                {InputsRows.map((res) => {
                  return (
                    <InputSkills
                      width={"100%"}
                      height={"25px"}
                      placeholder={"0.00"}
                    ></InputSkills>
                  );
                })}
              </ColumnItens>
            </ItensBox>
          );
        })}
        <ThreeColumn>
          <ItensBox height={"51%"}>
            <ColumnItens width={"100%"}>
              <ItensTitle>Item</ItensTitle>
              {InputsRows5.map((res) => {
                return (
                  <InputSkills width={"90%"} height={"25px"}></InputSkills>
                );
              })}
            </ColumnItens>
            <ColumnItens width={"30%"}>
              <ItensTitle>Peso</ItensTitle>
              {InputsRows5.map((res) => {
                return (
                  <InputSkills
                    width={"100%"}
                    height={"25px"}
                    placeholder={"0.00"}
                  ></InputSkills>
                );
              })}
            </ColumnItens>
          </ItensBox>
          <MoreContent>
            <ItensTitle>
              Se a sua carga Total"(1º valor)" estiver maior que a carga Máxima
              (2º Valor) considere uma Penalidade de Armadura de -2 nas perícias
              devidas e seu Descolcamente deve ser reduzido em 3m [pág. 154]
              (Esses modificadores NÃO estão automatizados na ficha(mas quero
              fazer))
            </ItensTitle>
            <LoadAndStrenght>
              <Info>
                <InputsLoadGroup>
                  <InputSkills
                    width={"45%"}
                    height={"25px"}
                    placeholder={"0.00"}
                  ></InputSkills>
                  <ItensTitle>de</ItensTitle>
                  <InputSkills
                    width={"45%"}
                    height={"25px"}
                    placeholder={"30"}
                  ></InputSkills>
                </InputsLoadGroup>
                <ItensTitle>
                  CARGA MÁXIMA <br /> (3x de Força)
                </ItensTitle>
              </Info>
              <Info>
                <InputsLoadGroup>
                  <InputSkills
                    width={"45%"}
                    height={"25px"}
                    placeholder={"100"}
                  ></InputSkills>
                </InputsLoadGroup>
                <ItensTitle>
                  LEVANTAR <br /> (até 10x Força)
                </ItensTitle>
              </Info>
              <TSTO>
                {Tibars.map((res) => {
                  return (
                    <Tibar>
                      <Title>{res.title}</Title>
                      <InputSkills
                        width={"70%"}
                        height={"25px"}
                        placeholder={"100"}
                      ></InputSkills>
                    </Tibar>
                  );
                })}
              </TSTO>
            </LoadAndStrenght>
          </MoreContent>
        </ThreeColumn>
      </Group>
    </Content>
  );
}
