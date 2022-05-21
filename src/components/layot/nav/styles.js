import styled from "styled-components";
import Button from "/src/components/ui/button/button";

export const StyledNav = styled.nav`
  display: flex;
`;

export const StyledButton = styled(Button)`
  background-color: transparent;
  color: ${(props) => props.theme.colorBlackForText};
  padding: 0;
  min-width: min-content;

  &:hover,
  &:active {
    background-color: ${(props) => props.theme.colorWhite};
    text-decoration: underline;
  }

  &:hover {
    box-shadow: none;
  }
`;
