import styled from "styled-components";
import Title from "/src/components/ui/title/title";

export const CardWrapper = styled.div`
  padding: 20px;
  display: flex;
  background-color: ${(props) => props.theme.colorWhite};
`;

export const ProductImage = styled.img`
  margin-right: 20px;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 18px;
`;

export const StyledTitle = styled(Title)`
  font-size: 24px;
  line-height: 31px;
`;
