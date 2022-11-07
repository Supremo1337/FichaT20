import { ButtonSubmit, Content } from "./styles";

export default function SubmitBar(submit) {
  return (
    <Content>
      {console.log()}
      <ButtonSubmit onSubmit={submit} type={"submit"} value={"Salvar"} />
    </Content>
  );
}
