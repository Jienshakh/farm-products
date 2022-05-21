import React, { useState } from "react";
import { TitleList, TitleButton, TitleText, Content } from "./styles";

function Tabs({ tabs }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <TitleList>
        {tabs &&
          tabs.length &&
          tabs.map((item, index) => {
            if (index === activeTab) {
              return (
                <TitleButton as="span" active key={item.title}>
                  <TitleText active as="h2">
                    {item.title}
                  </TitleText>
                </TitleButton>
              );
            }

            return (
              <TitleButton key={item.title} onClick={() => setActiveTab(index)}>
                <TitleText as="h2">{item.title}</TitleText>
              </TitleButton>
            );
          })}
      </TitleList>
      <Content>{tabs[activeTab].content}</Content>
    </>
  );
}
export default Tabs;
