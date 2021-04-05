import styled from "styled-components";
import { colors } from "../../GlobalStyle";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: url("https://res.cloudinary.com/imagesfull/image/upload/v1614104568/FincaAppGanado/Imagen5_efl6fv.png")
    no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  z-index: 1000;
`;

const Box_texto = styled.div`
  height: 9rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${colors.white};
  border-radius: 5px;
  padding: 20px;
   {
    h4 {
      color: ${colors.danger};
      font-size: 15px;
      margin: 0;
    }
  }
   {
    p {
      font-size: 20px;
      color: ${colors.darkBlue};
      margin: 0;
    }
    span {
      font-size: 22px;
      color: ${colors.yellow};
      font-weight: 600;
      margin-bottom: 2rem;
    }
  }
`;

export { Container, Box_texto };
