import React from "react";
import { Label, VisuallyHiddenInput } from "/src/components/styled/";
// import { StyledMark, LabelComponent } from "./style";

// function CheckboxButton({
//   value,
//   name,
//   checked,
//   onChange,
//   StyledItem,
//   ...props
// }) {
//   const isChecked = checked === true;
//   const Li = StyledItem;
//   return (
//     <Li>
//       <Label>
//         <VisuallyHiddenInput
//           value={value}
//           name={name}
//           checked={checked}
//           onChange={onChange}
//           {...props}
//           type="checkbox"
//         />
//         <StyledMark $isChecked={isChecked}></StyledMark>
//         <LabelComponent>{name}</LabelComponent>
//       </Label>
//     </Li>
//   );
// }

// export default CheckboxButton;

function CheckboxButton({
  onClick,
  StyledItem,
  labelComponent, // Компонент для отображения label
  isChecked, // выбранно ли значение
  name, // имя
  value, // значение
  text, // текст элемента
  onChange, // событие при изменении
  // onChangePrice,
  // checkedForTotalPrice,
  // onClickLabel = () => {},
  selectValues,
  ...props
}) {
  const LabelComponent = labelComponent;
  const Wrapper = StyledItem;
  const handleChange = (value) => {
    const newValue = [...selectValues];
    const indexValue = newValue.indexOf(value);
    if (indexValue !== -1) {
      newValue.splice(indexValue, 1);
    } else {
      newValue.push(value);
    }
    onChange && onChange(newValue);
  };
  return (
    <Wrapper>
      <Label>
        <VisuallyHiddenInput
          value={value}
          checked={isChecked}
          name={name}
          onChange={() => handleChange(value)}
          {...props}
          type="checkbox"
        />
        {/* <StyledMark $isChecked={isChecked}></StyledMark> */}
        <LabelComponent onClick={() => onClick(value)} $isChecked={isChecked}>
          {text}
        </LabelComponent>
      </Label>
    </Wrapper>
  );
}

export default CheckboxButton;
