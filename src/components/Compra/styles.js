import styled from "styled-components";
import { above, colors } from "../../GlobalStyle";

const Container = styled.div`
  width: 100%;
  height: 34px;
  border-radius: 4px;
  background: white;
  ${above.mediumL`
    width: 420px;
  `};
`;

const Header = styled.header`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  background: ${colors.darkBlue};
  color: ${colors.white};
   {
    p {
      margin: 0;
    }
  }
`;

const Box = styled.div`
  width: 100%;
  padding-left: 10px;
  display: flex;
  align-items: center;

  h6 {
    margin: 0;
  }
`;

const Footer = styled.footer`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
  background: ${colors.darkBlue};
  color: ${colors.lightBlue};
   {
    p {
      margin: 0;
      font-size: 18px;
    }
  }
`;

export { Container, Header, Box, Footer };
