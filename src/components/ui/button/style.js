import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledButton = styled(Link)`
  padding: 16px 0;
  border: none;
  background: ${(props) => props.theme.colorForButton};
  color: ${(props) => props.theme.colorWhite};
  font-weight: 700;
  text-decoration: none;
  min-width: ${(props) => (props.$minWidth ? `${props.$minWidth}px` : "100%")};
  box-shadow: none;
  cursor: pointer;
  background-image: none;
  text-align: center;

  &:hover,
  &:active {
    background-color: ${(props) => props.theme.colorForButtonHover};
    box-shadow: inset 0 4px 0 rgba(0, 0, 0, 0.14);
  }

  &:active {
    box-shadow: none;
  }

  &:disabled {
    opacity: 0.5;
    box-shadow: none;
    background-color: ${(props) => props.theme.buttonColor};
  }
`;
