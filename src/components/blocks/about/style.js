import styled from "styled-components";
import aboutImage from "/src/assets/man.svg";

export const TextWrapper = styled.div`
  display: flex;
  position: relative;
  padding: 183px 553px 183px 90px;
  flex-wrap: wrap;
  background-color: #d8ecfe;
`;

export const Paragraph = styled.p`
  margin: 0;
  padding-right: 99px;
  margin-top: 24px;

  &::after {
    position: absolute;
    content: "";
    top: 37px;
    right: ${(props) => props.theme.pagePadding};
    width: 446px;
    height: 543px;
    background-image: url(${aboutImage});
  }
`;
