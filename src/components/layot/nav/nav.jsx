import React from "react";
import Button from "../../ui/button/button";
import { StyledNav } from "./styles";
import { AppRoute } from "/src/const";
import { StyledButton } from "./styles";

const buttons = [
  {
    to: AppRoute.MAIN,
    button: (
      <StyledButton minWidth={260} link={AppRoute.MAIN} key={AppRoute.MAIN}>
        Главная
      </StyledButton>
    )
  },
  {
    to: AppRoute.BUY,
    button: (
      <Button minWidth={260} link={AppRoute.BUY} key={AppRoute.BUY}>
        Купить
      </Button>
    )
  }
];

function Nav({ pageUrl }) {
  return (
    <StyledNav>
      {buttons
        .filter((button) => button.to !== pageUrl)
        .map((button) => button.button)}
    </StyledNav>
  );
}

export default Nav;
