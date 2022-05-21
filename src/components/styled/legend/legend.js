import styled from "styled-components";

const Legend = styled.p`
  position: relative;
  display: block;
  font-size: ${(props) => props.theme.fontSizeDefault};
  color: ${(props) => props.theme.colorBlackForText};
  margin: 0;
  font-weight: 700;
  margin-bottom: 27px;
`;

export default Legend;
