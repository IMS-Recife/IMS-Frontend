import styled from "styled-components";
import { FaBars } from "react-icons/fa";

const Bars = styled(FaBars)`
  display: none;
  color: ${(props) => props.theme.colors.light};
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.5rem;
    cursor: pointer;
    :hover {
      color: ${(props) => props.theme.colors.primary};
    }
  }
`;

export default Bars;
