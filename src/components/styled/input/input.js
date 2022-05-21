import styled from "styled-components";

const Input = styled.input`
  padding: 14px 12px;
  background-color: ${(props) => props.theme.colorGrey};
  border: 1px solid rgba(0, 0, 0, 0.1);
  font-size: 14px;
  line-height: 21px;
  width: 100%;
  box-sizing: border-box;
`;

export default Input;
