import styled from "styled-components";
import Button from "/src/components/ui/button/button";
import { Text } from "/src/components/styled/";

export const ButtonsWrapper = styled.div`
  display: flex;
  column-gap: 8px;
`;

export const StyledButton = styled(Button)`
  padding: 8px 12px;
  background: ${(props) => props.theme.colorGrey};
  min-width: auto;
  color: ${(props) => props.theme.colorBlackForText};
  font-size: 14px;
  font-weight: 400;
`;

export const StyledText = styled(Text)`
  font-size: 14px;
  line-height: 21px;
  margin: 0;
  margin-bottom: 14px;
`;

export const PriceTag = styled.span`
  background-color: ${(props) => props.theme.colorForAboutBackground};
  display: inline-block;
  padding: 4px 8px;
  font-weight: 800;
  line-height: 21px;
`;
