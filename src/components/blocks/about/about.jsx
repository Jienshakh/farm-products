import React from "react";
import Title, { TitleSize } from "/src/components/ui/title/title";
import { TextWrapper, Paragraph } from "./style.js";

function About() {
  return (
    <>
      <section className="about">
        <TextWrapper>
          <Title size={TitleSize.BIG}>
            Магазин фермерских продуктов с доставкой
          </Title>
          <Paragraph>
            Все продукты изготавливаются под заказ. Фермеры начинают готовить
            продукты за день до отправки заказа клиентам. Именно поэтому мы
            принимаем заказы заранее и доставляем продукты максимально свежими.
          </Paragraph>
        </TextWrapper>
      </section>
    </>
  );
}

export default About;
