import React from "react";
import Logo from "../../ui/logo/logo";
import Nav from "../nav/nav";
import { StyledHeader } from "./style";

function Header({ pageUrl }) {
  return (
    <StyledHeader>
      <Logo />
      <Nav pageUrl={pageUrl} />
    </StyledHeader>
  );
}

export default Header;
