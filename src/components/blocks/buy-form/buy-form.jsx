// import React, { useState } from "react";
// import CheckboxButton from "/src/components/ui/checkbox-button/checkbox-button";
// import {
//   StyledFieldset,
//   StyledItem,
//   StyledInput,
//   StyledLegend,
//   TotalPrice,
//   FormWrapper
// } from "./styled";
// import { Legend, UL, Label } from "/src/components/styled/";
// import Button from "/src/components/ui/button/button";

// function BuyForm({ filterOptions, selectValues, onChange, onClickLabel }) {
// const [checkedState, setCheckedState] = useState(
//   new Array(filterOptions.length).fill(false)
// );

// const [totalPrice, setTotalPrice] = useState(0);

// const handleOnChange = (position) => {
//   const updateCheckedState = checkedState.map((item, index) =>
//     index === position ? !item : item
//   );

//   setCheckedState(updateCheckedState);

//   const total = updateCheckedState.reduce((sum, currentState, index) => {
//     if (currentState === true) {
//       return sum + filterOptions[index].price;
//     }
//     return sum;
//   }, 0);
//   setTotalPrice(total);
// };

//   const handleChange = (value) => {
//     const newValue = [...selectValues];
//     const indexValue = newValue.indexOf(value);
//     if (indexValue !== -1) {
//       newValue.splice(indexValue, 1);
//     } else {
//       newValue.push(value);
//     }
//     onChange && onChange(newValue);
//   };
//   const canFilter = filterOptions.length;

//   return (
//     <FormWrapper>
//       <StyledFieldset>
//         <Legend>Выберите продукты</Legend>
//         <UL>
//           {filterOptions.map(
//             (option, index) =>
//               canFilter && (
//                 <CheckboxButton
//                   key={option.id}
//                   StyledItem={StyledItem}
//                   value={option.id}
//                   name={"select-products"}
//                   text={option.name}
//                   // checked={checkedState[index]}
//                   // onChange={() => handleOnChange(index)}
//                   selectValues={selectValues}
//                   onChange={onChange}
//                   onClickLabel={onClickLabel}
//                   isChecked={selectValues.includes(option.id)}
//                   labelComponent={labelComponent}
//                   selectValues={selectValues}
//                   isChecked={selectValues.includes(option.value)}
//                   name={name}
//                   value={option.value}
//                   text={option.title}
//                   onClick={(value) => onClickLabel(value, index)}
//                   onChange={handleChange}
//                 />
//               )
//           )}
//         </UL>
//       </StyledFieldset>
//       <StyledFieldset $width={353}>
//         <StyledLegend>Сделать заказ</StyledLegend>
//         <StyledInput placeholder="Введите адрес доставки" />
//         <Label $small $margin={6}>
//           Цена
//         </Label>
//         {/* <TotalPrice>{totalPrice} руб.</TotalPrice> */}
//         <Button>Купить</Button>
//       </StyledFieldset>
//     </FormWrapper>
//   );
// }

// export default BuyForm;
