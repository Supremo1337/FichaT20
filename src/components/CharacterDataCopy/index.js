import { Content } from "./styles";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState, useEffect } from "react";
import { inputs } from "./config";
import SubmitBar from "../SubmitBar";
import request from "../../services/api.js";
import { PushUserById } from "./services";

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
  const [token, setToken] = useState("");
  const [account, setAccount] = useState("");

  const accountFake = {
    name: "",
    character: "",
    origin: "",
    role: "",
    race: "",
    divinity: "",
    level: 0,
  };

  useEffect(() => {
    request
      .get(
        `/authme/users?token=${window.localStorage.getItem("tokenTormenta20")}`
      )
      .then((res) => {
        console.log("ESSE É O RES", res);
        setAccount(PushUserById(request, res.data.user._id));
      })
      .catch((err) => {
        console.log("ESSE É O ERRO", err);
      });
  }, []);

  const teste = async (event) => {
    try {
      event.preventDefault();
      const passAcess = window.localStorage.getItem("tokenTormenta20");
      setToken(window.localStorage.getItem("tokenTormenta20"));
      await request.post("/ficha/character", { passAcess, account });
    } catch (err) {
      console.log(err);
    }
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
          </Box>
        );
      })}
      <SubmitBar />
    </Content>
  );
}
