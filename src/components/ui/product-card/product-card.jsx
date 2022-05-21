import React from "react";
import { StyledTitle, CardWrapper, TextWrapper, ProductImage } from "./styles";
import Tabs from "/src/components/ui/tabs/tabs";
import Description from "/src/components/ui/description/description";
import Details from "/src/components/ui/details/details";
import Structure from "/src/components/ui/structure/structure";

function ProductCard({ product }) {
  const tabs = [
    {
      title: "Описание",
      content: <Description descriptionContent={product} />
    },
    {
      title: "Характеристики",
      content: <Details detailsContent={product.details} />
    },
    {
      title: "Свойства",
      content: <Structure structureContent={product.structure} />
    }
  ];

  return (
    <CardWrapper>
      <ProductImage src={product.image} width={248} height={248} />
      <TextWrapper>
        <StyledTitle>{product.name}</StyledTitle>
        <Tabs tabs={tabs} />
      </TextWrapper>
    </CardWrapper>
  );
}

export default ProductCard;
