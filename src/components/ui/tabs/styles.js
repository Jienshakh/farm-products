import styled from "styled-components";
import Title from "/src/components/ui/title/title";

export const TitleList = styled.div`
  display: flex;
  column-gap: 8px;
`;

export const TitleButton = styled.button`
  padding: 8px 12px;
  background-color: ${(props) =>
    props.active ? "tomato" : props.theme.colorGrey};
  min-width: auto;
  color: ${(props) => props.theme.colorBlackForText};
  font-size: 14px;
  font-weight: 400;
  border: none;
`;

export const Content = styled.div``;

export const TitleText = styled(Title)`
  margin: 0;
  padding: 0;
  font-weight: 400;
  font-size: 14px;
  color: ${(props) =>
    props.active ? props.theme.colorWhite : props.theme.colorBlack};
`;
