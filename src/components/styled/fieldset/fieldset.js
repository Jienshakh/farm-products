import styled from "styled-components";

const Fieldset = styled.fieldset`
  background-color: ${(props) => props.theme.colorWhite};
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04),
    0px 0px 1px rgba(0, 0, 0, 0.04);
  padding: 24px 20px 20px;
  display: flex;
  flex-direction: column;
`;

export default Fieldset;
