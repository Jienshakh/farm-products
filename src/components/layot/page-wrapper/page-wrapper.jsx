import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import { StyledMain } from "./style";

function PageWrapper({ pageUrl, children }) {
  return (
    <>
      <Header pageUrl={pageUrl} />
      <StyledMain>{children}</StyledMain>
      <Footer />
    </>
  );
}

export default PageWrapper;
