import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  height: 100vh;
  background: #66172b;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BackgroundOverlay = styled.div`
  width: 100%;
  height: 98vh;
  background: linear-gradient(to top, #08042f 10%, #0e1926 47%);
  position: relative;
  opacity: 0.5;
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
`;

export const Header = styled.div`
  width: 448px;
  height: 106px;
  background: red;
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
  background: blue;
  box-sizing: border-box;
  align-items: stretch;
  /* justify-content:space-between; */
`;

export const InputLogin = styled.input`
  width: 100%;
  height: 48px;
  border: 1px solid;
  outline: none;
`;

export const InputAndText = styled.div`
  width: 100%;
  height: 76px;
  border: 1px solid;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* background: blue; */
`;

export const GroupCheckBoxAndButton = styled.div`
  width: 100%;
  height: 106px;
  background: pink;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

// export const CheckBoxLogin = styled.input`
//   width: 24px;
//   height: 24px;
//   border-radius:4px;
//   border: 1px solid;
//   ::checked{
//     background: red;
//   }
// `;
