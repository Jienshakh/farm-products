import React from "react";
import Title from "/src/components/ui/title/title";
import AdvantageCard from "/src/components/ui/advantage-card/advantage-card";
import Button from "/src/components/ui/button/button";
import {
  StyledProducts,
  StyledProductsWrapper,
  StyledProductList
} from "./style";
import { AppRoute } from "/src/const";

function Advantage({ comporableProducts, level }) {
  // console.log({comporableProducts})
  return (
    <StyledProducts>
      {comporableProducts && comporableProducts.length ? (
        <StyledProductsWrapper>
          <Title level={level}>Почему фермерские продукты лучше?</Title>
          <StyledProductList>
            {comporableProducts.map((comporableProduct) => (
              <li key={comporableProduct.id}>
                <AdvantageCard {...comporableProduct} />
              </li>
            ))}
          </StyledProductList>
          <Button minWidth={260} link={AppRoute.BUY}>
            Купить
          </Button>
        </StyledProductsWrapper>
      ) : null}
    </StyledProducts>
  );
}

export default Advantage;
