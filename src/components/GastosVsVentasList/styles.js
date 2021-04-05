/* eslint-disable import/prefer-default-export */
import styled from "styled-components";
import { above, colors } from "../../GlobalStyle";

const Container = styled.div`
  width: 100%;
  height: 100%;
  ${"" /* align-items: center; */}

  ${"" /* Pendiente modificar el margin-top */}
  .button {
    top: 3rem;
    width: 90vw;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    background: ${colors.green};
    color: #fff;
    font-size: 20px;
    text-decoration: none;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    position: fixed;
  }

  .button_ventas {
    margin-top: 4rem;
    width: 40vw;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 25px;
    background: ${colors.darkGreen};
    color: #fff;
    font-size: 18px;
    text-decoration: none;
    text-align: center;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
    ${above.mediumL`
    margin-top: 20px;
  `};
  }
  .button_costos {
    margin-top: 2rem;
    width: 40vw;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 25px;
    background: ${colors.danger};
    font-size: 18px;
    color: #fff;
    text-decoration: none;
    text-align: center;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
    ${above.mediumL`
    margin-top: 20px;
  `};
  }
  .button_compras {
    margin-top: 2rem;
    width: 40vw;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 25px;
    background: ${colors.danger};
    font-size: 18px;
    color: #fff;
    text-decoration: none;
    text-align: center;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
    ${above.mediumL`
    margin-top: 20px;
  `};
  }
  .button_ganancias {
    margin-top: 2rem;
    width: 40vw;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 25px;
    background: ${colors.lightBlue};
    font-size: 18px;
    color: #fff;
    text-decoration: none;
    text-align: center;

    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
    ${above.mediumL`
    margin-top: 20px;
  `};
    ${above.large`
    margin-bottom: -20px;
  `};
  }
`;

const Box = styled.div`
  height: 100%;
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const List = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
`;

export { Container, Box, List };
