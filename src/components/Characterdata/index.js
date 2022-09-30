import {
  Content,
  GroupDates,
  Group,
  BoxPerso,
  TextDiv,
  NamePerso,
} from "./styles";

export default function Characterdata() {
  const inputs = [
    { title: "Personagem", placeholder: "Nome Do Personagem" },
    { title: "Jogador", placeholder: "Nome Do Jogador" },
    { title: "Raça", placeholder: "Raça" },
  ];
  const inputs2 = [
    { title: "Origem", placeholder: "Origem" },
    { title: "Classe & Nível", placeholder: "Classe e nível" },
    { title: "Divindade", placeholder: "Divindade" },
  ];

  return (
    <Content>
      <GroupDates>
        <Group>
          {inputs.map((res) => {
            return (
              <BoxPerso>
                <TextDiv width={"102px"} top={"10px"} left={"15px"}>
                  {res.title}
                </TextDiv>
                <NamePerso placeholder={res.placeholder}></NamePerso>
              </BoxPerso>
            );
          })}
        </Group>
        <Group>
          {inputs2.map((res) => {
            return (
              <BoxPerso>
                <TextDiv width={"102px"} top={"10px"} left={"15px"}>
                  {res.title}
                </TextDiv>
                <NamePerso placeholder={res.placeholder}></NamePerso>
              </BoxPerso>
            );
          })}
        </Group>
      </GroupDates>

 
    </Content>
  );
}
