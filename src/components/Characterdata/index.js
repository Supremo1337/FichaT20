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

export default function CharacterData() {
  const inputs = [
    { title: "Personagem", gridColumn: "1/2", gridRow: "1/2" },
    { title: "Jogador", gridColumn: "1/2", gridRow: "2/3" },
    { title: "Raça", gridColumn: "1/2", gridRow: "3/4" },
    { title: "Origem", gridColumn: "2/3", gridRow: "1/2" },
    { title: "Classe & Nível", gridColumn: "2/3", gridRow: "2/3" },
    { title: "Divindade", gridColumn: "2/3", gridRow: "3/4" },
  ];

  return (
    <Content>
      <GroupDates>
        {inputs.map((res, index) => {
          return (
            <Box key={index}
              component="form"
              noValidate
              gridColumn={res.gridColumn}
              gridRow={res.gridRow}
              sx={{
                display: "grid",
                "& .MuiTextField-root": { m: 1, width: "30h" },
              }}
            >
              <CssTextField
                label={res.title}
                id="custom-css-outlined-input"
                defaultValue=""
                size="small"
                InputProps={{ style: { fontFamily:"Tormenta" } }}
                InputLabelProps={{ style: { fontFamily:"Tormenta" } }}
              />
            </Box>
          );
        })}
      </GroupDates>
    </Content>
  );
}
