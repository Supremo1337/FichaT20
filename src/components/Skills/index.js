import {
  Content,
  SkillsTitleandValue,
  SkillsText,
  SkillsRow,
  CheckSkills,
  InputSkills,
  NameSkills,
  NameCheckGroup,
  InputSkillsGroup,
  InputSkillsTotal,
} from "./styles";
import { TextDiv } from "../Characterdata/styles";
import OpenWithIcon from "@mui/icons-material/OpenWith";
import { Title } from "../../styles/global";

export default function Skills() {
  const Skills = [
    { title: "Acrobacia", simbolo: "+" },
    { title: "Adestramento" },
    { title: "Atletismo" },
    { title: "Atuação" },
    { title: "" },
    { title: "" },
    { title: "" },
    { title: "" },
    { title: "" },
    { title: "" },
    { title: "" },
    { title: "" },
    { title: "" },
    { title: "" },
    { title: "" },
    { title: "" },
    { title: "" },
    { title: "" },
    { title: "" },
    { title: "" },
    { title: "" },
    { title: "" },
    { title: "" },
    { title: "" },
    { title: "" },
    { title: "" },
    { title: "" },
    { title: "" },
    { title: "" },
    { title: "" },
  ];

  return (
    <Content>
      <SkillsTitleandValue>
        <Title>PERÍCIAS</Title>
        <TextDiv>Total</TextDiv>
        <SkillsText fontSize={"10px"} paddingTop={"7px"} marginLeft={"-22px"} width={"40px"}>1/2 do Nível</SkillsText>
        <SkillsText fontSize={"10px"} paddingTop={"7px"} marginLeft={"-22px"} width={"40px"}>Mod. de Atributo</SkillsText>
        <SkillsText fontSize={"10px"} paddingTop={"7px"} marginLeft={"-22px"} width={"30px"}>Treino</SkillsText>
        <SkillsText fontSize={"10px"} paddingTop={"7px"} marginLeft={"-22px"} width={"30px"}>Outros</SkillsText>
      </SkillsTitleandValue>
      {Skills.map((res) => {
        return (
          <SkillsRow>
            <NameCheckGroup>
              <CheckSkills type="checkbox"></CheckSkills>
              <NameSkills fontSize={"12px"}>
                {res.title}
                {res.simbolo?<OpenWithIcon sx={{ fontSize: 10 }}></OpenWithIcon>:null}
              </NameSkills>
            </NameCheckGroup>
            <InputSkillsGroup>
              <InputSkillsTotal right={"5px"}></InputSkillsTotal>
              <label style={{ position: "relative", right: "7px" }}>=</label>
              <InputSkills width={"25px"} height={"15px"} right={"13px"}></InputSkills>
              <label style={{ position: "relative", right: "12px" }}>+</label>
              <InputSkills width={"25px"} height={"15px"} right={"12px"}></InputSkills>
              <label style={{ position: "relative", right: "12px" }}>+</label>
              <InputSkills width={"25px"} height={"15px"} right={"12px"}></InputSkills>
              <label style={{ position: "relative", right: "12px" }}>+</label>
              <InputSkills width={"25px"} height={"15px"} right={"13px"}></InputSkills>
            </InputSkillsGroup>
          </SkillsRow>
        );
      })}
      {/* Space */}
      {/* <SkillsRow>
        <NameCheckGroup>
          <CheckSkills type="checkbox"></CheckSkills>
          <NameSkills fontSize={"12px"}>Adestramento*</NameSkills>
        </NameCheckGroup>
        <InputSkillsGroup>
          <InputSkillsTotal right={"5px"}></InputSkillsTotal>
          <label style={{ position: "relative", right: "7px" }}>=</label>
          <InputSkills right={"13px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"12px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"12px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"13px"}></InputSkills>
        </InputSkillsGroup>
      </SkillsRow> */}
      {/* Space */}
      {/* <SkillsRow>
        <NameCheckGroup>
          <CheckSkills type="checkbox"></CheckSkills>
          <NameSkills fontSize={"12px"}>Atlestismo</NameSkills>
        </NameCheckGroup>
        <InputSkillsGroup>
          <InputSkillsTotal right={"5px"}></InputSkillsTotal>
          <label style={{ position: "relative", right: "7px" }}>=</label>
          <InputSkills right={"13px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"12px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"12px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"13px"}></InputSkills>
        </InputSkillsGroup>
      </SkillsRow> */}
      {/* Space */}
      {/* <SkillsRow>
        <NameCheckGroup>
          <CheckSkills type="checkbox"></CheckSkills>
          <NameSkills fontSize={"12px"}>Atuação</NameSkills>
        </NameCheckGroup>
        <InputSkillsGroup>
          <InputSkillsTotal right={"5px"}></InputSkillsTotal>
          <label style={{ position: "relative", right: "7px" }}>=</label>
          <InputSkills right={"13px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"12px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"12px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"13px"}></InputSkills>
        </InputSkillsGroup>
      </SkillsRow>
      {/* Space */}
      {/* <SkillsRow>
        <NameCheckGroup>
          <CheckSkills type="checkbox"></CheckSkills>
          <NameSkills fontSize={"12px"}>Cavalgar</NameSkills>
        </NameCheckGroup>
        <InputSkillsGroup>
          <InputSkillsTotal right={"5px"}></InputSkillsTotal>
          <label style={{ position: "relative", right: "7px" }}>=</label>
          <InputSkills right={"13px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"12px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"12px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"13px"}></InputSkills>
        </InputSkillsGroup>
      </SkillsRow> */}
      {/* Space */}
      {/* <SkillsRow>
        <NameCheckGroup>
          <CheckSkills type="checkbox"></CheckSkills>
          <NameSkills fontSize={"12px"}>Conhecimento</NameSkills>
        </NameCheckGroup>
        <InputSkillsGroup>
          <InputSkillsTotal right={"5px"}></InputSkillsTotal>
          <label style={{ position: "relative", right: "7px" }}>=</label>
          <InputSkills right={"13px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"12px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"12px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"13px"}></InputSkills>
        </InputSkillsGroup>
      </SkillsRow> */}
      {/* Space */}
      {/* <SkillsRow>
        <NameCheckGroup>
          <CheckSkills type="checkbox"></CheckSkills>
          <NameSkills fontSize={"12px"}>Cura</NameSkills>
        </NameCheckGroup>
        <InputSkillsGroup>
          <InputSkillsTotal right={"5px"}></InputSkillsTotal>
          <label style={{ position: "relative", right: "7px" }}>=</label>
          <InputSkills right={"13px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"12px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"12px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"13px"}></InputSkills>
        </InputSkillsGroup>
      </SkillsRow> */}
      {/* Space */}
      {/* <SkillsRow>
        <NameCheckGroup>
          <CheckSkills type="checkbox"></CheckSkills>
          <NameSkills fontSize={"12px"}>Diplomacia</NameSkills>
        </NameCheckGroup>
        <InputSkillsGroup>
          <InputSkillsTotal right={"5px"}></InputSkillsTotal>
          <label style={{ position: "relative", right: "7px" }}>=</label>
          <InputSkills right={"13px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"12px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"12px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"13px"}></InputSkills>
        </InputSkillsGroup>
      </SkillsRow> */}
      {/* Space */}
      {/* <SkillsRow>
        <NameCheckGroup>
          <CheckSkills type="checkbox"></CheckSkills>
          <NameSkills fontSize={"12px"}>Enganação</NameSkills>
        </NameCheckGroup>
        <InputSkillsGroup>
          <InputSkillsTotal right={"5px"}></InputSkillsTotal>
          <label style={{ position: "relative", right: "7px" }}>=</label>
          <InputSkills right={"13px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"12px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"12px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"13px"}></InputSkills>
        </InputSkillsGroup>
      </SkillsRow> */}
      {/* Space */}
      {/* <SkillsRow>
        <NameCheckGroup>
          <CheckSkills type="checkbox"></CheckSkills>
          <NameSkills fontSize={"12px"}>Fortitude</NameSkills>
        </NameCheckGroup>
        <InputSkillsGroup>
          <InputSkillsTotal right={"5px"}></InputSkillsTotal>
          <label style={{ position: "relative", right: "7px" }}>=</label>
          <InputSkills right={"13px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"12px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"12px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"13px"}></InputSkills>
        </InputSkillsGroup>
      </SkillsRow> */}
      {/* Space */}
      {/* <SkillsRow>
        <NameCheckGroup>
          <CheckSkills type="checkbox"></CheckSkills>
          <NameSkills fontSize={"12px"}>
            Furtividade<OpenWithIcon sx={{ fontSize: 10 }}></OpenWithIcon>
          </NameSkills>
        </NameCheckGroup>
        <InputSkillsGroup>
          <InputSkillsTotal right={"5px"}></InputSkillsTotal>
          <label style={{ position: "relative", right: "7px" }}>=</label>
          <InputSkills right={"13px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"12px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"12px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"13px"}></InputSkills>
        </InputSkillsGroup>
      </SkillsRow> */}
      {/* Space */}
      {/* <SkillsRow>
        <NameCheckGroup>
          <CheckSkills type="checkbox"></CheckSkills>
          <NameSkills fontSize={"12px"}>Guerra</NameSkills>
        </NameCheckGroup>
        <InputSkillsGroup>
          <InputSkillsTotal right={"5px"}></InputSkillsTotal>
          <label style={{ position: "relative", right: "7px" }}>=</label>
          <InputSkills right={"13px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"12px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"12px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"13px"}></InputSkills>
        </InputSkillsGroup>
      </SkillsRow> */}
      {/* Space */}
      {/* <SkillsRow>
        <NameCheckGroup>
          <CheckSkills type="checkbox"></CheckSkills>
          <NameSkills fontSize={"12px"}>Iniciativa</NameSkills>
        </NameCheckGroup>
        <InputSkillsGroup>
          <InputSkillsTotal right={"5px"}></InputSkillsTotal>
          <label style={{ position: "relative", right: "7px" }}>=</label>
          <InputSkills right={"13px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"12px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"12px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"13px"}></InputSkills>
        </InputSkillsGroup>
      </SkillsRow> */}
      {/* Space */}
      {/* <SkillsRow>
        <NameCheckGroup>
          <CheckSkills type="checkbox"></CheckSkills>
          <NameSkills fontSize={"12px"}>Intimidação</NameSkills>
        </NameCheckGroup>
        <InputSkillsGroup>
          <InputSkillsTotal right={"5px"}></InputSkillsTotal>
          <label style={{ position: "relative", right: "7px" }}>=</label>
          <InputSkills right={"13px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"12px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"12px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"13px"}></InputSkills>
        </InputSkillsGroup>
      </SkillsRow> */}
      {/* Space */}
      {/* <SkillsRow>
        <NameCheckGroup>
          <CheckSkills type="checkbox"></CheckSkills>
          <NameSkills fontSize={"12px"}>Intuição</NameSkills>
        </NameCheckGroup>
        <InputSkillsGroup>
          <InputSkillsTotal right={"5px"}></InputSkillsTotal>
          <label style={{ position: "relative", right: "7px" }}>=</label>
          <InputSkills right={"13px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"12px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"12px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"13px"}></InputSkills>
        </InputSkillsGroup>
      </SkillsRow> */}
      {/* Space */}
      {/* <SkillsRow>
        <NameCheckGroup>
          <CheckSkills type="checkbox"></CheckSkills>
          <NameSkills fontSize={"12px"}>Investigação</NameSkills>
        </NameCheckGroup>
        <InputSkillsGroup>
          <InputSkillsTotal right={"5px"}></InputSkillsTotal>
          <label style={{ position: "relative", right: "7px" }}>=</label>
          <InputSkills right={"13px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"12px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"12px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"13px"}></InputSkills>
        </InputSkillsGroup>
      </SkillsRow> */}
      {/* Space */}
      {/* <SkillsRow>
        <NameCheckGroup>
          <CheckSkills type="checkbox"></CheckSkills>
          <NameSkills fontSize={"12px"}>Jogatina*</NameSkills>
        </NameCheckGroup>
        <InputSkillsGroup>
          <InputSkillsTotal right={"5px"}></InputSkillsTotal>
          <label style={{ position: "relative", right: "7px" }}>=</label>
          <InputSkills right={"13px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"12px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"12px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"13px"}></InputSkills>
        </InputSkillsGroup>
      </SkillsRow> */}
      {/* Space */}
      {/* <SkillsRow>
        <NameCheckGroup>
          <CheckSkills type="checkbox"></CheckSkills>
          <NameSkills fontSize={"12px"}>
            Ladinagem*<OpenWithIcon sx={{ fontSize: 10 }}></OpenWithIcon>
          </NameSkills>
        </NameCheckGroup>
        <InputSkillsGroup>
          <InputSkillsTotal right={"5px"}></InputSkillsTotal>
          <label style={{ position: "relative", right: "7px" }}>=</label>
          <InputSkills right={"13px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"12px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"12px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"13px"}></InputSkills>
        </InputSkillsGroup>
      </SkillsRow> */}
      {/* Space */}
      {/* <SkillsRow>
        <NameCheckGroup>
          <CheckSkills type="checkbox"></CheckSkills>
          <NameSkills fontSize={"12px"}>Luta</NameSkills>
        </NameCheckGroup>
        <InputSkillsGroup>
          <InputSkillsTotal right={"5px"}></InputSkillsTotal>
          <label style={{ position: "relative", right: "7px" }}>=</label>
          <InputSkills right={"13px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"12px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"12px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"13px"}></InputSkills>
        </InputSkillsGroup>
      </SkillsRow> */}
      {/* Space */}
      {/* <SkillsRow>
        <NameCheckGroup>
          <CheckSkills type="checkbox"></CheckSkills>
          <NameSkills fontSize={"12px"}>Misticismo*</NameSkills>
        </NameCheckGroup>
        <InputSkillsGroup>
          <InputSkillsTotal right={"5px"}></InputSkillsTotal>
          <label style={{ position: "relative", right: "7px" }}>=</label>
          <InputSkills right={"13px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"12px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"12px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"13px"}></InputSkills>
        </InputSkillsGroup>
      </SkillsRow> */}
      {/* Space */}
      {/* <SkillsRow>
        <NameCheckGroup>
          <CheckSkills type="checkbox"></CheckSkills>
          <NameSkills fontSize={"12px"}>Nobreza*</NameSkills>
        </NameCheckGroup>
        <InputSkillsGroup>
          <InputSkillsTotal right={"5px"}></InputSkillsTotal>
          <label style={{ position: "relative", right: "7px" }}>=</label>
          <InputSkills right={"13px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"12px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"12px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"13px"}></InputSkills>
        </InputSkillsGroup>
      </SkillsRow> */}
      {/* Space */}
      {/* <SkillsRow>
        <NameCheckGroup>
          <CheckSkills type="checkbox"></CheckSkills>
          <NameSkills fontSize={"12px"}>Ofício(_____)*</NameSkills>
        </NameCheckGroup>
        <InputSkillsGroup>
          <InputSkillsTotal right={"5px"}></InputSkillsTotal>
          <label style={{ position: "relative", right: "7px" }}>=</label>
          <InputSkills right={"13px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"12px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"12px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"13px"}></InputSkills>
        </InputSkillsGroup>
      </SkillsRow> */}
      {/* Space */}
      {/* <SkillsRow>
        <NameCheckGroup>
          <CheckSkills type="checkbox"></CheckSkills>
          <NameSkills fontSize={"12px"}>Ofício(_____)*</NameSkills>
        </NameCheckGroup>
        <InputSkillsGroup>
          <InputSkillsTotal right={"5px"}></InputSkillsTotal>
          <label style={{ position: "relative", right: "7px" }}>=</label>
          <InputSkills right={"13px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"12px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"12px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"13px"}></InputSkills>
        </InputSkillsGroup>
      </SkillsRow> */}
      {/* Space */}
      {/* <SkillsRow>
        <NameCheckGroup>
          <CheckSkills type="checkbox"></CheckSkills>
          <NameSkills fontSize={"12px"}>Percepção</NameSkills>
        </NameCheckGroup>
        <InputSkillsGroup>
          <InputSkillsTotal right={"5px"}></InputSkillsTotal>
          <label style={{ position: "relative", right: "7px" }}>=</label>
          <InputSkills right={"13px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"12px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"12px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"13px"}></InputSkills>
        </InputSkillsGroup>
      </SkillsRow> */}
      {/* Space */}
      {/* <SkillsRow>
        <NameCheckGroup>
          <CheckSkills type="checkbox"></CheckSkills>
          <NameSkills fontSize={"12px"}>Pilotagem*</NameSkills>
        </NameCheckGroup>
        <InputSkillsGroup>
          <InputSkillsTotal right={"5px"}></InputSkillsTotal>
          <label style={{ position: "relative", right: "7px" }}>=</label>
          <InputSkills right={"13px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"12px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"12px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"13px"}></InputSkills>
        </InputSkillsGroup>
      </SkillsRow> */}
      {/* Space */}
      {/* <SkillsRow>
        <NameCheckGroup>
          <CheckSkills type="checkbox"></CheckSkills>
          <NameSkills fontSize={"12px"}>Pontaria</NameSkills>
        </NameCheckGroup>
        <InputSkillsGroup>
          <InputSkillsTotal right={"5px"}></InputSkillsTotal>
          <label style={{ position: "relative", right: "7px" }}>=</label>
          <InputSkills right={"13px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"12px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"12px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"13px"}></InputSkills>
        </InputSkillsGroup>
      </SkillsRow> */}
      {/* Space */}
      {/* <SkillsRow>
        <NameCheckGroup>
          <CheckSkills type="checkbox"></CheckSkills>
          <NameSkills fontSize={"12px"}>Reflexos</NameSkills>
        </NameCheckGroup>
        <InputSkillsGroup>
          <InputSkillsTotal right={"5px"}></InputSkillsTotal>
          <label style={{ position: "relative", right: "7px" }}>=</label>
          <InputSkills right={"13px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"12px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"12px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"13px"}></InputSkills>
        </InputSkillsGroup>
      </SkillsRow> */}
      {/* Space */}
      {/* <SkillsRow>
        <NameCheckGroup>
          <CheckSkills type="checkbox"></CheckSkills>
          <NameSkills fontSize={"12px"}>Religião*</NameSkills>
        </NameCheckGroup>
        <InputSkillsGroup>
          <InputSkillsTotal right={"5px"}></InputSkillsTotal>
          <label style={{ position: "relative", right: "7px" }}>=</label>
          <InputSkills right={"13px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"12px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"12px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"13px"}></InputSkills>
        </InputSkillsGroup>
      </SkillsRow> */}
      {/* Space */}
      {/* <SkillsRow>
        <NameCheckGroup>
          <CheckSkills type="checkbox"></CheckSkills>
          <NameSkills fontSize={"12px"}>Sobrevivência</NameSkills>
        </NameCheckGroup>
        <InputSkillsGroup>
          <InputSkillsTotal right={"5px"}></InputSkillsTotal>
          <label style={{ position: "relative", right: "7px" }}>=</label>
          <InputSkills right={"13px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"12px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"12px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"13px"}></InputSkills>
        </InputSkillsGroup>
      </SkillsRow> */}
      {/* Space */}
      {/* <SkillsRow>
        <NameCheckGroup>
          <CheckSkills type="checkbox"></CheckSkills>
          <NameSkills fontSize={"12px"}>Vontade</NameSkills>
        </NameCheckGroup>
        <InputSkillsGroup>
          <InputSkillsTotal right={"5px"}></InputSkillsTotal>
          <label style={{ position: "relative", right: "7px" }}>=</label>
          <InputSkills right={"13px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"12px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"12px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"13px"}></InputSkills>
        </InputSkillsGroup>
      </SkillsRow> */}
      {/* Space  */}
    </Content>
  );
}
