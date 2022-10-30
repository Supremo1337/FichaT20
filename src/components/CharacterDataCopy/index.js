import { Content } from "./styles";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { useAmp } from "next/amp";
import { useEffect, useState } from "react";
import { lightTheme, darkTheme } from "../../styles/Themes";

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
      borderColor: lightTheme ? "black" : darkTheme ? "white" : "",
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
  const [name2, setName2] = useState("");
  const [player, setPlayer] = useState("");
  const [data, setData] = useState([]);
  const [dataCharacter, setDataCharacter] = useState("");
  const [dataName, setDataName] = useState("");
  const [userId, setUserId] = useState();
  const [value, setValue] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const urlParams = window.location.search;
    setUserId(urlParams.replace("?userId=", ""));
    console.log("userID: ", userId);
  }, []);

  useEffect(() => {
    ApiFodaDoGabrielCards.get("/users")
      .then((response) => {
        setData(response.data);
        setDataName(response.data[userId]?.name);
        console.log("dados recebidos", response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
        console.log("dados recebidos error", err);
        setLoading(false);
      });
    // setDataCharacter(urlParams);
    // setDataCharacter(data?.character);
    // setDataName(data?.name);
  }, []);

  const handleChange = (event) => {
    // setName2(event.target.value);
    // setDataCharacter(event.target.value);
    event.target.name === "name"
      ? setDataName(event.target.value)
      : setDataCharacter(event.target.value);
    // event.target.name === "Personagem"?
    // setValue(event.target.value): null;
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
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <Content>
          {/* {inputs.map((res, index, item) => {
        return ( */}
          <Box
            component="div"
            noValidate
            // gridColumn={res.gridColumn}
            // gridRow={res.gridRow}
            sx={{
              display: "grid",
              gridTemplateColumns: "1.3fr 1fr 0.4fr",
              gridTemplateRows: "6vh 6vh 6vh",
              width: "100%",
              background: "red",
              padding: "10px",
              "& .MuiTextField-root": {
                m: 0.5,
              },
            }}
          >
            {console.log("dados", dataCharacter)}
            <CssTextField
              label={"Personagem"}
              id="custom-css-outlined-input"
              value={dataCharacter || ""}
              variant="outlined"
              name="character"
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
              value={dataName || ""}
              variant="outlined"
              size="small"
              name="name"
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
              value={name2 || ""}
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
              value={name2 || ""}
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
              value={name2 || ""}
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
              value={name2 || ""}
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
              value={name2 || ""}
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
        </Content>
      )}
    </>
  );
}
