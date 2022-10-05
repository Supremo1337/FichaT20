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
    { title: "Personagem" },
    { title: "Jogador" },
    { title: "Raça" },
    { title: "Origem" },
    { title: "Classe & Nível" },
    { title: "Divindade" },
  ];

  return (
    <Content>
      <GroupDates>
        {inputs.map((res) => {
          return (
            <Box
              component="form"
              noValidate
              sx={{
                display: "grid",
                gridTemplateColumns: { sm: "1fr 1fr" },
                "& .MuiTextField-root": { m: 1, width: "37ch" },
              }}
            >
              <BoxPerso>
                <CssTextField
                  label={res.title}
                  id="custom-css-outlined-input"
                  defaultValue=""
                  size="small"
                />
              </BoxPerso>
            </Box>
          );
        })}
      </GroupDates>
    </Content>
  );
}
