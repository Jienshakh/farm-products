import styled from "styled-components";
// // import { Section, Form } from "/src/components/styled/";
// import { Swiper } from "swiper/react";
import {
  Fieldset,
  Li,
  Input,
  Legend,
  Section,
  Label,
  Form
} from "/src/components/styled/";
import { css } from "styled-components";
import TextInput from "/src/components/ui/text-input/text-input";
import { Swiper } from "swiper/react";
import checkboxSelect from "/src/assets/checkbox.svg";

// export const StyledSection = styled(Section)`
//   min-width: 1100px;
//   margin: 0 auto;
//   display: flex;
//   column-gap: 20px;
// `;

export const StyledForm = styled(Form)`
  position: absolute;
  top: 80px;
  bottom: 80px;
  display: flex;
  padding-top: 40px;
  padding-bottom: 0;
  background-color: #f7f7f7;
  max-width: 1280px;
  padding-left: 90px;
  padding-right: 90px;
  box-sizing: border-box;
`;

export const FormWrapper = styled.div`
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: auto;
  display: flex;
  flex-direction: column;
  row-gap: 18px;
  overflow: overlay;
  padding-right: 20px;
`;

export const StyledFieldset = styled(Fieldset)`
  padding-bottom: 26px;
  border: none;
  min-width: 353px;
`;

// export const TextComponent = styled.span`
//   font-weight: 400;
// `;

export const StyledItem = styled(Li)`
  margin-bottom: 29px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const StyledInput = styled(Input)`
  margin-bottom: 20px;
`;

export const StyledLegend = styled(Legend)`
  margin-bottom: 24px;
`;

export const TotalPrice = styled.p`
  font-size: 24px;
  line-height: 31px;
  font-weight: 700;
  margin: 0;
  margin-bottom: 32px;
`;

export const ProductSwiper = styled(Swiper)`
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: 727px;

  .swiper-pagination {
    display: none;
  }

  .swiper-slide {
    flex-shrink: 1;
  }
`;

export const CheckboxLabel = styled.span`
  position: relative;
  display: flex;
  font-size: 18px;
  text-align: left;
  align-items: center;
  cursor: pointer;
  font-weight: 400;

  &::after {
    content: "";
    right: 0;
    display: block;
    position: absolute;
    height: 22px;
    width: 22px;
    ${(props) =>
      props.$isChecked
        ? css`
            background-color: #fc9b27;
            border: 1px solid rgba(0, 0, 0, 0.1);
            background-image: url(${checkboxSelect});
            background-repeat: no-repeat;
            background-position: center center;
          `
        : css`
            background-color: ${props.theme.backgroundColorGray};
            border: 1px solid rgba(0, 0, 0, 0.1);
          `}
  }
`;
