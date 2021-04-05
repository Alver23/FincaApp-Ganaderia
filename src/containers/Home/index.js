import React from "react";
import { Container, LandPage, Title, Box_texto } from "./styles";
import Skil from "./InfoHome";
import "./styles.css";

const Home = () => (
  <Container>
    <LandPage>
      <Box_texto>
        <Title>
          <span>Administra tu Finca</span>
        </Title>
        <br />
        <span>FincaApp</span> te permite gestionar la administracion de tu finca
        de manera facil
      </Box_texto>
    </LandPage>
    <div className="home-grid">
      <Skil />
    </div>
  </Container>
);

export default Home;
