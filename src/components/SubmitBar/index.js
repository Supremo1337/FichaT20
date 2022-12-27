import { ButtonSubmit, Content } from "./styles";

export default function SubmitBar(props) {
  return (
    <Content gridColumn={props.gridColumn} gridRow={props.gridRow}>
      <ButtonSubmit type={"submit"} value={"Salvar"} />
    </Content>
  );
}
