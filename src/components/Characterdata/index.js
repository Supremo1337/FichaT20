import { Content, GroupDates, BoxPerso } from "./styles";
import { alpha, styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import TextField, { TextFieldProps } from "@mui/material/TextField";


const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "black",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "black",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "black",
    },
    "&:hover fieldset": {
      borderColor: "black",
    },
    "&.Mui-focused fieldset": {
      borderColor: "black",
    },
  },
});

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
          noValidate
          sx={{
            display: "grid",
            gridTemplateColumns: { sm: "1fr 1fr" },
            "& .MuiTextField-root": { m: 1, width: "40ch" }
          }}
        >
          <BoxPerso>
            {/* {inputs.map((res) => {
          return ( */}
            <CssTextField
              label="Personagem"
              id="custom-css-outlined-input"
              defaultValue="Small"
              size="small"
              />
            <CssTextField
              label="Jogador"
              id="custom-css-outlined-input"
              defaultValue="Small"
              size="small"
            />
            <CssTextField
              label="Raça"
              id="custom-css-outlined-input"
              defaultValue="Small"
              size="small"
            />
            {/* );
        })} */}
          </BoxPerso>
        </Box>
        {/* Space */}
        <Box
          component="form"
          noValidate
          sx={{
            display: "grid",
            gridTemplateColumns: { sm: "1fr 1fr" },
            "& .MuiTextField-root": { m: 1, width: "40ch" }
          }}
        >
          <BoxPerso>
            {/* {inputs.map((res) => {
          return ( */}
            <CssTextField
              label="Origem"
              id="custom-css-outlined-input"
              defaultValue="Small"
              size="small"
            />
            <CssTextField
              label="Classe & Nível"
              id="custom-css-outlined-input"
              defaultValue="Small"
              size="small"
            />
            <CssTextField
              label="Divindade"
              id="custom-css-outlined-input"
              defaultValue="Small"
              size="small"
            />
            {/* );
        })} */}
          </BoxPerso>
        </Box>
      </GroupDates>
    </Content>
  );
}
