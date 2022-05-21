import React from "react";
import { ReactComponent as LogoImage } from "/src/assets/logo.svg";
import { StyledLogo } from "./style";

function Logo() {
  return (
    <StyledLogo href="/">
      <LogoImage />
    </StyledLogo>
  );
}

export default Logo;
