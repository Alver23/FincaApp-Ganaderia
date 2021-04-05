import styled from "styled-components";
import { above, colors } from "../../GlobalStyle";

const Container = styled.div`
  width: 100%;
  height: 100vh;

  .button_total-compras {
    margin-top: 1.7rem;
    width: 90vw;
    height: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    background: ${colors.danger};
    color: #fff;
    text-decoration: none;
    position: fixed;
  }
  .button {
    margin-top: 5.9rem;
    width: 90vw;
    height: 32px;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 25rem;
    background: ${colors.green};
    color: #fff;
    text-decoration: none;
    position: fixed;
  }

  .row {
    margin-top: 9.7rem;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    color: #fff;
    text-decoration: none;
    position: fixed;
  }
`;

const Box = styled.div`
  width: 100%;
  padding-top: 3.1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${above.mediumL`
    flex-direction: row;
  `};
`;

const Input = styled.input``;

const List = styled.ul`
  margin-top: 120px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  padding-bottom: 30px;

  li {
    width: 420px;
    height: 100px;
    margin: 5px 4px;
    background: #f6f8f9;
    border-radius: 4px;
    color: black;
    text-decoration: none;

    .link {
      text-decoration: none;
    }
  }
`;

const Box_texto = styled.div`
  width: 100%;
  height: 80px;
  padding: 10px 23px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -42rem;
  ${above.mediumL`
    flex-direction: row;
  `};
`;

const Texto = styled.h4`
  color: #1b1b25;
  width: 90vw;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  background: #ced4da;
  margin: 5px;
`;
export { Container, Box, Input, List, Box_texto, Texto };
