import styled, { css } from "styled-components";

const Label = styled.label`
  position: relative;
  display: block;
  ${(props) =>
    props.$small
      ? css`
          font-size: 14px;
        `
      : css`
          font-weight: 700;
        `}
  margin-bottom: ${(props) => props.$margin || 0}px;
`;

export default Label;
