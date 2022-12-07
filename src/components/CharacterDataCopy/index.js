import { Content } from "./styles";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState, useEffect } from "react";
import { inputs } from "./config";
import SubmitBar from "../SubmitBar";
import request from "../../services/api.js";
import { PushUserById } from "./services";
import axios from "axios";

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
  const [account, setAccount] = useState("");
  const [test, setTest] = useState();

  // const accountFake = {
  //   name: "",
  //   character: "",
  //   origin: "",
  //   role: "",
  //   race: "",
  //   divinity: "",
  //   level: 0,
  // };

  const handleSubmit = (event) => {
    console.log("ENTROU AQ");
    event.preventDefault();
    const jsonLogin = {
      character,
      name,
      race,
      origin,
      role,
      divinity,
      level,
      author,
    };
    const res = axios
      .post("http://localhost:3333/api/authme/authenticate", jsonLogin, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        if (!res.data.token) return;
        localStorage.setItem("tokenBank", res.data.token);
        router.push("/mainpage");
        console.log("ESSE É O RES", res);
      })
      .catch((error) => {
        console.log("ERRO AQ", error);
        setComparativeLogin(error.response);
      });
  };

  // useEffect(() => {
  //   request
  //     .get(
  //       `/authme/users?token=${window.localStorage.getItem("tokenTormenta20")}`
  //     )
  //     .then((res) => {
  //       console.log("ESSE É O RES", res);
  //       setAccount(PushUserById(request, res.data.user._id));
  //     })
  //     .catch((err) => {
  //       console.log("ESSE É O ERRO", err);
  //     });
  // }, []);

  // const teste = async (event) => {
  //   try {
  //     event.preventDefault();
  //     const passAcess = window.localStorage.getItem("tokenTormenta20");
  //     setToken(window.localStorage.getItem("tokenTormenta20"));
  //     await request.post("/ficha/character", { passAcess, account });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // useEffect(() => {
  //   const res = axios
  //     .get("http://localhost:8000/api/authme/users", {
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: "Bearer " + localStorage.getItem("tokenTormenta20"),
  //       },
  //     })
  //     .then((res) => {
  //       setTest(res.data);
  //     })
  //     .catch((error) => {
  //       console.log("ERRO AQ", error);
  //     });
  // }, []);

  return (
    <Content onSubmit={handleSubmit}>
      {inputs(account).map((res, index) => {
        return (
          <CssTextField
            sx={{
              "& .MuiFormLabel-root": { fontSize: "1.6rem" },
              "& .MuiOutlinedInput-root": {
                fontSize: "1.6rem",
              },
            }}
            label={res.title}
            id="custom-css-outlined-input"
            value={res.value || ""}
            variant="outlined"
            size="small"
            InputProps={{ style: { fontFamily: "Tormenta" } }}
            InputLabelProps={{ style: { fontFamily: "Tormenta" } }}
            autoComplete="off"
            type={res.type == "number" ? "number" : ""}
            onChange={(event) => {
              window.localStorage.setItem(res.name, event.target.value);
              setAccount({
                ...account,
                [res.name]: event.target.value,
              });
            }}
          />
        );
      })}
      <SubmitBar />
    </Content>
  );
}
