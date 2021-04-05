import styled from "styled-components";
import { above, colors } from "../../GlobalStyle";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: url("https://res.cloudinary.com/imagesfull/image/upload/v1587758568/like/stars_jwrc2k.svg"),
    #85c638;

  overflow: hidden;
  color: ${colors.obscure};
  text-align: center;

  h1 {
    font-size: 32px;
  }

  img {
    width: 200px;
    margin: 50px 0;
  }
`;

export default Container;
