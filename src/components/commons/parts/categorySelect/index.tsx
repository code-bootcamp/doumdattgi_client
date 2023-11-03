import { Select } from "antd";
import { category, option } from "../../../../commons/libraries/category";
import { useEffect } from "react";
import { ICategory2Props } from "./index.types";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
`;
export const CategoryBox = styled.div`
  width: 50%;
  &.sub {
    margin-left: 10px;
  }
`;

export default function Category(props: ICategory2Props) {
  return (
    <Wrapper>
      <CategoryBox>
        <Select
          style={{ width: "100%" }}
          defaultValue={
            props.data
              ? `${props.data?.product_category}`
              : "카테고리를 선택해주세요."
          }
          size={"large"}
          onChange={props.onChangeCategory}
          options={category.map(category => ({
            label: category.label,
            value: category.value
          }))}
        />
      </CategoryBox>
      <CategoryBox className="sub">
        <Select
          style={{ width: "100%" }}
          size={"large"}
          value={
            props.optionSelect
              ? `${props.optionSelect}`
              : "옵션을 선택해주세요."
          }
          onChange={props.onChangeSubCategory}
          options={
            props.categoryArray &&
            props.categoryArray.map(option => ({
              label: option,
              value: option
            }))
          }
        />
      </CategoryBox>
    </Wrapper>
  );
}
