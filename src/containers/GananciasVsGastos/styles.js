import styled from "styled-components";
import { above, colors } from "../../GlobalStyle";

const Container = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background: ${colors.white};
`;

const ContainerBadge = styled.div`
  width: 100%;
  height: 80vh;
  margin: 20px 0 0 0;
  ${above.mediumL`
    width: 50%;
    height: 60vh;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  `};
`;

export { Container, ContainerBadge };
