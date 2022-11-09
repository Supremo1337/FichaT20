import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  height: 100vh;
  background: #66172b;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("/img/loboborgestormenta20capa.jpg");
  background-size: cover;
  background-repeat: no-repeat;
`;

export const BackgroundOverlay = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(to top, #08042f 10%, #0e1926 47%);
  position: fixed;
  opacity: 0.5;
  top: 0px;
  left: 0px;
`;

export const LoginBox = styled.div`
  width: 532px;
  height: 643px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  position: relative;
  z-index: 1;
`;

export const Header = styled.div`
  width: 448px;
  height: 106px;
  /* background: red; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const FormLogin = styled.form`
  width: 448px;
  height: 290px;
  display: flex;
  flex-direction: column;
  /* background: blue; */
  box-sizing: border-box;
  align-items: stretch;
  justify-content: space-between;
  /* justify-content:space-between; */
`;

export const InputLogin = styled.input`
  width: 100%;
  height: 48px;
  border: 1px solid;
  outline: none;
  border-radius: 10px;
  padding-left: 40px;
  ::placeholder {
    font-size: 14px;
    color: #6b7280;
  }
`;

export const InputAndText = styled.div`
  width: 100%;
  height: 76px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* background: blue; */
`;

export const GroupCheckBoxAndButton = styled.div`
  width: 100%;
  height: 106px;
  /* background: pink; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const LoginButton = styled.div`
  width: 100%;
  height: 50px;
  border-radius: 4px;
  background: #2f1e22;
  border: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ForgetAndLogin = styled.div`
  width: 60%;
  height: 44px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  /* background: red; */
`;

export const TextForgetAndLogin = styled.label`
  font-size: 14px;
  color: #6b7280;
  text-decoration: underline;
  cursor: pointer;
`;

// export const InputIcons = styled.div`
//   width: 100%;
//   margin-bottom: 10px;
//   i {
//     position: absolute;
//   }
// `;
