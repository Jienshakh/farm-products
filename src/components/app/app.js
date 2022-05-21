import React from "react";
import PageWrapper from "../layot/page-wrapper/page-wrapper";
import comporableProducts from "/src/mocks/comporableProducts";
import { GlobalStyle } from "./style";
import filterOptions from "/src/mocks/filter-options";
import products from "/src/mocks/products";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AppRoute } from "/src/const";
import MainPage from "/src/components/pages/main-page/main-page";
import BuyPage from "/src/components/pages/buy-page/buy-page";
import ScrollTop from "/src/components/ui/scrolltop/scrolltop";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <ScrollTop />
        <Switch>
          <Route exact path={AppRoute.MAIN}>
            <PageWrapper pageUrl={AppRoute.MAIN}>
              <MainPage comporableProducts={comporableProducts} />
            </PageWrapper>
          </Route>
          <Route exact path={AppRoute.BUY}>
            <PageWrapper pageUrl={AppRoute.BUY}>
              <BuyPage filterOptions={filterOptions} products={products} />
            </PageWrapper>
          </Route>
        </Switch>
      </Router>
    </>
  );
}
