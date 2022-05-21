import React, { useState } from "react";
import CheckboxButton from "/src/components/ui/checkbox-button/checkbox-button";
// import BuyForm from "/src/components/blocks/buy-form/buy-form";
// import { StyledSection, StyledForm, ProductSwiper } from "./style";
import ProductCard from "/src/components/ui/product-card/product-card/";
import {
  StyledFieldset,
  StyledItem,
  StyledInput,
  StyledLegend,
  TotalPrice,
  FormWrapper,
  StyledSection,
  StyledForm,
  ProductSwiper,
  CheckboxLabel
} from "./styles";
import { Legend, UL, Label } from "/src/components/styled/";
import Button from "/src/components/ui/button/button";
import { SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Mousewheel, Scrollbar } from "swiper/core";
import "swiper/swiper-bundle.min.css";
SwiperCore.use([Mousewheel, Pagination, Scrollbar]);

function BuyPage({ filterOptions, products }) {
  const [checkedState, setCheckedState] = useState(
    new Array(filterOptions.length).fill(false)
  );

  const [totalPrice, setTotalPrice] = useState(0);

  const handleOnChange = (position) => {
    const updateCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updateCheckedState);

    const total = updateCheckedState.reduce((sum, currentState, index) => {
      if (currentState === true) {
        return sum + filterOptions[index].price;
      }
      return sum;
    }, 0);
    setTotalPrice(total);
  };
  const [swiperRef, setSwiperRef] = useState(null);
  const [selectProductIds, setSelectProductIds] = useState([]);
  const handleOnClickProduct = (value, index) => {
    console.log(swiperRef);
    if (!selectProductIds.includes(value)) {
      swiperRef.slideTo(index, 0);
    }
  };
  const canFilter = filterOptions.length;
  return (
    // <StyledSection>
    <StyledForm $maxWidth={1280}>
      <FormWrapper>
        <StyledFieldset>
          <Legend>Выберите продукты</Legend>
          <UL>
            {filterOptions.map(
              (option, index) =>
                canFilter && (
                  <CheckboxButton
                    labelComponent={CheckboxLabel}
                    key={option.id}
                    StyledItem={StyledItem}
                    value={option.id}
                    name={"select-products"}
                    text={option.name}
                    checkedForTotalPrice={checkedState[index]}
                    // onChange={() => handleOnChange(index)}
                    selectValues={selectProductIds}
                    onChange={(e) => {
                      handleOnChange(index);
                      setSelectProductIds(e);
                    }}
                    // onChange={() => handleOnChange(index)}
                    // onClickLabel={handleOnClickProduct}
                    isChecked={selectProductIds.includes(option.id)}
                    onClick={(value) => handleOnClickProduct(value, index)}
                  />
                )
            )}
          </UL>
        </StyledFieldset>
        <StyledFieldset $width={353}>
          <StyledLegend>Сделать заказ</StyledLegend>
          <StyledInput placeholder="Введите адрес доставки" />
          <Label $small $margin={8}>
            Цена
          </Label>
          <TotalPrice>{totalPrice} руб.</TotalPrice>
          <Button>Купить</Button>
        </StyledFieldset>
      </FormWrapper>
      {/* <BuyForm
          filterOptions={filterOptions}
          selectValues={selectProductIds}
          onChange={setSelectProductIds}
          onClickLabel={handleOnClickProduct}
        /> */}

      <ProductSwiper
        onSwiper={setSwiperRef}
        spaceBetween={12}
        direction="vertical"
        slidesPerView="auto"
        scrollbar={{ draggable: true }}
        mousewheel
        pagination={{
          type: "fanction"
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </ProductSwiper>
    </StyledForm>
    // </StyledSection>
  );
}

export default BuyPage;
