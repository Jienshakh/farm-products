import React from "react";
import { StyledText, PriceTag } from "./styles";

function Description({ descriptionContent }) {
  return (
    <>
      <StyledText>{descriptionContent.description}</StyledText>
      <PriceTag>
        {descriptionContent.price} руб. / {descriptionContent.weight} гр.
      </PriceTag>
    </>
  );
}

export default Description;
