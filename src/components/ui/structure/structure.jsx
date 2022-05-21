import React from "react";
import { StructureWrapper, Feature, FeatureName, FeatureValue } from "./styles";

function Structure({ structureContent }) {
  return (
    <StructureWrapper>
      {structureContent &&
        structureContent.length &&
        structureContent.map((feature) => {
          return (
            <Feature>
              <FeatureName>{feature.property}: </FeatureName>
              <FeatureValue>{feature.value}</FeatureValue>
            </Feature>
          );
        })}
    </StructureWrapper>
  );
}

export default Structure;
