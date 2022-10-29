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
  const [name2, setName2] = useState("");
  const [player, setPlayer] = useState("");
  const [data, setData] = useState([]);
  const [userId, setUserId] = useState();
  const [value, setValue] = useState({});

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    setUserId(urlParams.get("userId"));
    ApiFodaDoGabrielCards.get("/users")
      .then((response) => {
        setData(response.data);
        return response.data;
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  const handleChange = (event) => {
    setName2(event.target.value);
    setValue({ ...value, [event.target.name]: event.target.value });
  };

  const inputs = [
    {
      title: "Personagem",
      gridColumn: "1/2",
      gridRow: "1/2",
      width: "95%",
      backVar: "character",
    },
    {
      title: "Jogador",
      gridColumn: "1/2",
      gridRow: "2/3",
      width: "95%",
      backVar: "name",
    },
    {
      title: "Raça",
      gridColumn: "1/2",
      gridRow: "3/4",
      width: "95%",
      backVar: "race",
    },
    {
      title: "Origem",
      gridColumn: "2/4",
      gridRow: "1/2",
      width: "95%",
      backVar: "origin",
    },
    {
      title: "Classe",
      gridColumn: "2/3",
      gridRow: "2/3",
      width: "95%",
      backVar: "role",
    },
    {
      title: "Nível",
      gridColumn: "3/4",
      gridRow: "2/3",
      width: "84%",
      backVar: "level",
    },
    {
      title: "Divindade",
      gridColumn: "2/4",
      gridRow: "3/4",
      width: "95%",
      backVar: "divinity",
    },
  ];

  return (
    <Content>
      {/* {inputs.map((res, index, item) => {
        return ( */}
      <Box
        component="form"
        noValidate
        // gridColumn={res.gridColumn}
        // gridRow={res.gridRow}
        sx={{
          display: "grid",
          gridTemplateColumns: "1.3fr 1fr 0.4fr",
          gridTemplateRows: "6vh 6vh 6vh",
          width: "100%",
          background: "red",
          "& .MuiTextField-root": {
            m: 0.5,
          },
        }}
      >
        {console.log(
          "dataUSER ID AQQQUI ",
          data[userId] ? Object.values(data[userId])?.map((res) => res) : ""
        )}

        <CssTextField
          label={"Personagem"}
          id="custom-css-outlined-input"
          value={name2 || name || ""}
          variant="outlined"
          size="small"
          InputProps={{ style: { fontFamily: "Tormenta" } }}
          InputLabelProps={{ style: { fontFamily: "Tormenta" } }}
          autoComplete="off"
          onChange={handleChange}
          sx={{ gridColumn: "1/2", gridRow: "1/2" }}
        />
        <CssTextField
          label={"Jogador"}
          id="custom-css-outlined-input"
          value={name2 || name || ""}
          variant="outlined"
          size="small"
          InputProps={{ style: { fontFamily: "Tormenta" } }}
          InputLabelProps={{ style: { fontFamily: "Tormenta" } }}
          autoComplete="off"
          onChange={handleChange}
          sx={{
            gridColumn: "1/2",
            gridRow: "2/3",
          }}
        />
        <CssTextField
          label={"Raça"}
          id="custom-css-outlined-input"
          value={name2 || name || ""}
          variant="outlined"
          size="small"
          InputProps={{ style: { fontFamily: "Tormenta" } }}
          InputLabelProps={{ style: { fontFamily: "Tormenta" } }}
          autoComplete="off"
          onChange={handleChange}
          sx={{
            gridColumn: "1/2",
            gridRow: "3/4",
          }}
        />
        <CssTextField
          label={"Origem"}
          id="custom-css-outlined-input"
          value={name2 || name || ""}
          variant="outlined"
          size="small"
          InputProps={{ style: { fontFamily: "Tormenta" } }}
          InputLabelProps={{ style: { fontFamily: "Tormenta" } }}
          autoComplete="off"
          onChange={handleChange}
          sx={{
            gridColumn: "2/4",
            gridRow: "1/2",
          }}
        />
        <CssTextField
          label={"Classe"}
          id="custom-css-outlined-input"
          value={name2 || name || ""}
          variant="outlined"
          size="small"
          InputProps={{ style: { fontFamily: "Tormenta" } }}
          InputLabelProps={{ style: { fontFamily: "Tormenta" } }}
          autoComplete="off"
          onChange={handleChange}
          sx={{
            gridColumn: "2/3",
            gridRow: "2/3",
          }}
        />
        <CssTextField
          label={"Nível"}
          id="custom-css-outlined-input"
          value={name2 || name || ""}
          variant="outlined"
          size="small"
          InputProps={{ style: { fontFamily: "Tormenta" } }}
          InputLabelProps={{ style: { fontFamily: "Tormenta" } }}
          autoComplete="off"
          onChange={handleChange}
          sx={{
            gridColumn: "3/4",
            gridRow: "2/3",
          }}
        />
        <CssTextField
          label={"Divindade"}
          id="custom-css-outlined-input"
          value={name2 || name || ""}
          variant="outlined"
          size="small"
          InputProps={{ style: { fontFamily: "Tormenta" } }}
          InputLabelProps={{ style: { fontFamily: "Tormenta" } }}
          autoComplete="off"
          onChange={handleChange}
          sx={{
            gridColumn: "2/4",
            gridRow: "3/4",
          }}
        />
      </Box>

      {console.log(
        "dadosAPI",
        data?.map((res) => res)
      )}
    </Content>
  );
}
