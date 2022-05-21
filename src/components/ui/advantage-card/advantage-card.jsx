import React from "react";
import AdvantageType from "../advantage-type/advantage-type";
import Title, { TitleLevel, TitleSize } from "../title/title";
import "./style.css";
import { StyledTitle } from "./styles";

function AdvantageCard({ type, title, image, text }) {
  return (
    <>
      <article className="advantage-card">
        <div className="advantage-card__wrapper">
          <figure className="advantage-card__figure">
            <div className="advantage-card__quality-wrapper">
              <AdvantageType
                className={`advantage-quality--${type}`}
                type={type}
              ></AdvantageType>
              <StyledTitle size={TitleSize.SMALL} level={TitleLevel.H3}>
                {title}
              </StyledTitle>
              <span
                className="advantage-card__icon"
                style={{ backgroundImage: `url(${image})` }}
              ></span>
            </div>
            <p className="advantage-card__text">{text}</p>
          </figure>
        </div>
      </article>
    </>
  );
}

export default AdvantageCard;
