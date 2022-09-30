import { Content, GroupDates, BoxPerso } from "./styles";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function Characterdata() {
  // const inputs = [
  //   { title: "Personagem" },
  //   { title: "Jogador" },
  //   { title: "Raça" },
  // ];
  // const inputs2 = [
  //   { title: "Origem" },
  //   { title: "Classe & Nível" },
  //   { title: "Divindade" },
  // ];

  return (
    <Content>
      <GroupDates>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <BoxPerso>
            {/* {inputs.map((res) => {
              return ( */}
            <TextField
              label="Personagem"
              id="outlined-size-normal"
              defaultValue=""
              size="small"
              color="warning"
              focused
            />
            <TextField
              label="Jogador"
              id="outlined-size-normal"
              defaultValue=""
              size="small"
              color="warning"
              focused
            />
            <TextField
              label="Raça"
              id="outlined-size-normal"
              defaultValue=""
              size="small"
              color="warning"
              focused
            />
            {/* );
            })} */}
          </BoxPerso>
        </Box>
        {/* Space */}
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <BoxPerso>
            {/* {inputs.map((res) => {
              return ( */}
            <TextField
              label="Origem"
              id="outlined-size-normal"
              defaultValue=""
              size="small"
              color="warning"
              focused
            />
            <TextField
              label="Classe & Nível"
              id="outlined-size-normal"
              defaultValue=""
              size="small"
              color="warning"
              focused
            />
            <TextField
              label="Divindade"
              id="outlined-size-normal"
              defaultValue=""
              size="small"
              color="warning"
              focused
            />
            {/* );
            })} */}
          </BoxPerso>
        </Box>
      </GroupDates>
    </Content>
  );
}
