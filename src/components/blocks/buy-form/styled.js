// import styled from "styled-components";
// import { Fieldset, Li, Input, Legend, Section } from "/src/components/styled/";

// export const FormWrapper = styled.div`
//   flex-grow: 0;
//   flex-shrink: 0;
//   flex-basis: auto;
//   display: flex;
//   flex-direction: column;
//   row-gap: 18px;
// `;

// export const StyledFieldset = styled(Fieldset)`
//   padding-bottom: 26px;
//   border: none;
//   min-width: 353px;
// `;

// export const TextComponent = styled.span`
//   font-weight: 400;
// `;

// export const StyledItem = styled(Li)`
//   margin-bottom: 29px;

//   &:last-child {
//     margin-bottom: 0;
//   }
// `;

// export const StyledInput = styled(Input)`
//   margin-bottom: 20px;
// `;

// export const StyledLegend = styled(Legend)`
//   margin-bottom: 24px;
// `;

// export const TotalPrice = styled.p`
//   font-size: 24px;
//   line-height: 31px;
//   font-weight: 700;
// `;

// const leftWidth = "353px";

// export const LeftColumn = styled.div`
//   width: ${leftWidth};
//   padding-right: ${(props) => props.theme.indent};
//   overflow-y: overlay;
//   max-height: 100%;
// `;

// export const StyledOrder = styled(Section)`
//   position: absolute;
//   top: ${(props) => props.theme.headerHeight};
//   bottom: ${(props) => props.theme.footerHeight};
//   display: flex;
//   padding-top: 40px;
//   padding-bottom: 0;
//   background-color: ${(props) => props.theme.backgroundColorGray};
//   max-width: ${(props) => props.theme.pageWidth};
// `;

// export const AddressInput = styled(TextInput)`
//   margin-bottom: ${(props) => props.theme.indent};
// `;

// export const PriceLabel = styled(Label)`
//   font-size: 14px;
//   margin-bottom: 6px;
// `;

// export const PriceValue = styled.span`
//   display: block;
//   font-size: 24px;
//   font-weight: bold;
//   margin-bottom: 30px;
// `;

// export const ProductSwiper = styled(Swiper)`
//   width: 727px;

//   .swiper-pagination {
//     display: none;
//   }

//   .swiper-slide {
//     flex-shrink: 1;
//   }
// `;

// export const CheckboxLabel = styled.span`
//   position: relative;
//   display: flex;
//   height: 56px;
//   font-size: 18px;
//   text-align: left;
//   align-items: center;
//   cursor: pointer;

//   &::after {
//     content: "";
//     right: 0;
//     display: block;
//     position: absolute;
//     height: 22px;
//     width: 22px;
//     ${(props) =>
//       props.$isChecked
//         ? css`
//             background-color: #fc9b27;
//             border: 1px solid rgba(0, 0, 0, 0.1);
//             background-image: url(${checkboxSelect});
//             background-repeat: no-repeat;
//             background-position: center center;
//           `
//         : css`
//             background-color: ${props.theme.backgroundColorGray};
//             border: 1px solid rgba(0, 0, 0, 0.1);
//           `}
//   }
// `;
