import React from "react";
import "./style.css";

export const ProductType = {
  GOOD: "good",
  BAD: "bad"
};

function AdvantageType({ className = "", type }) {
  let options;

  switch (type) {
    case ProductType.GOOD:
      options = {
        text: "Фермерские продукты",
        bgColor: "#88aa4d"
      };
      break;
    case ProductType.BAD:
      options = {
        text: "Магазинные продукты",
        bgColor: "#F75531"
      };
      break;
    default:
      options = {
        text: "",
        bgColor: "#000"
      };
      break;
  }

  return options.text ? (
    <p
      className={`advantage-quality ${className}`}
      style={{ backgroundColor: options.bgColor }}
    >
      {options.text}
    </p>
  ) : null;
}

export default AdvantageType;
