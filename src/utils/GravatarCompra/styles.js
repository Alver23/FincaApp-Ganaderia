import styled from "styled-components";
import { colors } from "../../GlobalStyle";

const Avatar = styled.img`
  border-radius: 50%;
  background: #a3a3a3;
  width: 70px;
  height: 70px;
  object-fit: cover;
  border: solid ${colors.yellow} 1px;
`;

export default Avatar;
