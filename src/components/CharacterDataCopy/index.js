import { Content } from "./styles";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { useState, useEffect } from "react";
import { inputs } from "./config";
import { useFormik } from "formik";
import { ButtonSubmit } from "../SubmitBar/styles";

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

export default function CharacterDataCopy() {
  const [saveUserName, setSaveUserName] = useState();

  const [account, setAccount] = useState({
    name: "",
    character: "",
    origin: "",
    role: "",
    race: "",
    divinity: "",
    level: 4,
  });

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/users/Hik")
      .then((res) => {
        setAccount(res.data);
      })
      .catch((error) => {
        console.log(error, "erro");
      });
  }, []);

  const teste = async (event) => {
    event.preventDefault();
    await axios.post("http://localhost:8000/api/users", account);
  };

  return (
    <Content onSubmit={(e) => teste(e)}>
      {inputs(account).map((res, index) => {
        return (
          <Box
            key={index}
            component="div"
            noValidate
            gridColumn={res.gridColumn}
            gridRow={res.gridRow}
            sx={{
              display: "grid",
              "& .MuiTextField-root": { m: 0.5, width: res.width },
            }}
          >
            <CssTextField
              label={res.title}
              id="custom-css-outlined-input"
              value={res.value}
              variant="outlined"
              size="small"
              InputProps={{ style: { fontFamily: "Tormenta" } }}
              InputLabelProps={{ style: { fontFamily: "Tormenta" } }}
              autoComplete="off"
              type={res.type == "number" ? "number" : ""}
              onChange={(e) =>
                setAccount({
                  ...account,
                  [res.name]: event.target.value,
                })
              }
            />
          </Box>
        );
      })}
      <ButtonSubmit type={"submit"} value={"Salvar"} />
    </Content>
  );
}
