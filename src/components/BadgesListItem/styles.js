import styled from "styled-components";
import { colors } from "../../GlobalStyle";

const Item = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 10px;
  display: flex;
  align-items: center;
  background-color: ${colors.white};
  box-shadow: 0 8px 10px rgba(0, 0, 0, 0.18);
  border-radius: 4px;
  margin-bottom: 60px;
  margin-top: -25px;
`;

export { Item };
