import React from "react";
import {
  DetailsWrapper,
  DetailProperty,
  DetailPropertyName,
  DetailValue
} from "./styles";

function Details({ detailsContent }) {
  return (
    <DetailsWrapper>
      {detailsContent &&
        detailsContent.length &&
        detailsContent.map((detail) => {
          return (
            <DetailProperty>
              <DetailPropertyName>{detail.property}</DetailPropertyName>
              <DetailValue>{detail.value}</DetailValue>
            </DetailProperty>
          );
        })}
    </DetailsWrapper>
  );
}

export default Details;
