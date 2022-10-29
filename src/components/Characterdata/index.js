import { Content } from "./styles";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { useAmp } from "next/amp";
import { useEffect, useState } from "react";


const ApiFodaDoGabrielCards = axios.create({
  baseURL: "http://localhost:8000",
  timeout: 30000,
});

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
  const [data, setData] = useState([]);
  const [userId, setUserId] = useState()
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
         setUserId(urlParams.get('userId'));
    ApiFodaDoGabrielCards.get("/users").then((response) => {
      setData(response.data);
      return response.data;
    }).catch((err) => {
      console.error("ops! ocorreu um erro" + err);
    });
  }, []);

  const inputs = [
    { title:"Personagem", gridColumn: "1/2", gridRow: "1/2", width: "95%" },
    { title: "Jogador", gridColumn: "1/2", gridRow: "2/3", width: "95%" },
    { title: "Raça", gridColumn: "1/2", gridRow: "3/4", width: "95%" },
    ,
    { title: "Origem", gridColumn: "2/4", gridRow: "1/2", width: "95%" },
    { title: "Classe", gridColumn: "2/3", gridRow: "2/3", width: "95%" },
    { title: "Nível", gridColumn: "3/4", gridRow: "2/3", width: "84%" },
    { title: "Divindade", gridColumn: "2/4", gridRow: "3/4", width: "95%" },
  ];
  return (
    <Content>
      {inputs.map((res, index) => {
        return (
          <Box
            key={index}
            component="form"
            noValidate
            gridColumn={res.gridColumn}
            gridRow={res.gridRow}
            sx={{
              display: "grid",
              "& .MuiTextField-root": { m: 0.5, width: res.width },
            }}
          >
            {console.log("dadosAPI", data?.map(res => res.name))}
            <CssTextField
              label={res.title}
              id="custom-css-outlined-input"
              // defaultValue={res.title ==="Personagem"?data[userId]?.name || "": ""}
              value={res.title ==="Personagem"?data[userId]?.name || "": ""}
              variant="outlined"
              size="small"
              InputProps={{ style: { fontFamily: "Tormenta" } }}
              InputLabelProps={{ style: { fontFamily: "Tormenta" } }}
              autoComplete="off"
              />
          </Box>
        );
      })}
      {console.log("dadosAPI", data?.map(res => res))}
    </Content>
  );
}
