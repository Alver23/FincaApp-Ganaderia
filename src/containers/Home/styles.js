import styled from "styled-components";
import { above, colors } from "../../GlobalStyle";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: url("https://res.cloudinary.com/imagesfull/image/upload/v1614104568/FincaAppGanado/Imagen5_efl6fv.png")
    no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;

const LandPageTitle = styled.div``;

const LandPage = styled.div`
  display: flex;
  justify-content: center;

  img {
    padding: 0;
    width: 140px;
    margin-top: -20px;
    position: absolute;
  }
`;
const Title = styled.p`
  color: #fcc100;
  padding: 0;
  margin: 0;
`;

const Box_texto = styled.div`
  ${"" /* margin-top: 10rem; */}
  padding: 10px;
  color: white;
  font-size: 24px;
  text-align: center;
  background-image: none;
  line-height: 20pt;

  ${above.small`
    margin-top: 3rem;
    color: white;
  `};
  ${above.mediu`
    margin-top: 9rem;
    color: white;
  `};
  ${above.mediumL`
    margin-top: 5rem;
    color: white;
  `};

  .title {
    margin-top: 3rem;
    ${"" /* color: green; */}
  }

  .title {
    ${above.small`
    margin-top: 0rem;
    color: white;
  `};
  }

  .title {
    ${above.mediu`
    margin-top: 0rem;
    color: white;
  `};
  }

  .title {
    ${above.mediumL`
    margin-top: 2rem;
    color: white;
  `};
  }
  span {
    font-weight: bold;
    font-size: 26px;
    color: #fcc100;
  }
`;

export { Container, LandPage, LandPageTitle, Title, Box_texto };
