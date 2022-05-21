import React from "react";
import About from "../../blocks/about/about";
import Advantage from "/src/components/blocks/advantage/advantage";
import { TitleLevel } from "/src/components/ui/title/title";

function MainPage({ comporableProducts }) {
  // console.log({comporableProducts})
  return (
    <>
      <About />
      <Advantage
        comporableProducts={comporableProducts}
        level={TitleLevel.H2}
      />
    </>
  );
}

export default MainPage;
