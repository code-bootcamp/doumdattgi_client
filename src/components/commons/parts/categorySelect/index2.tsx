import { Select } from "antd";
import { category, option } from "../../../../commons/libraries/category";
import { useEffect } from "react";
import { ICategory2Props } from "./index.types";

export default function Category2(props: ICategory2Props) {
  // useEffect(() => {
  //   props.setCategorySelect(props.data?.product_category ?? "");
  //   props.setCategoryArray(option[props.data?.product_category]);

  //   // if (
  //   //   option[props.data?.product_category ?? "DESIGN"] &&
  //   //   option[props.data?.product_category ?? "DESIGN"].length > 0
  //   // ) {
  //   //   props.setOptionSelect(
  //   //     option[props.data?.product_category ?? "DESIGN"][0]
  //   //   );
  //   // }
  // }, [props.data]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%"
      }}
    >
      <>
        <Select
          defaultValue={
            props.data
              ? `${props.data?.product_category}`
              : "카테고리를 선택해주세요."
          }
          style={{ marginRight: 5, width: "250px" }}
          size={"large"}
          onChange={props.onChangeCategory}
          options={category.map(category => ({
            label: category.label,
            value: category.value
          }))}
        />
        <Select
          style={{ width: "calc(100% - 250px)"}}
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
      </>
    </div>
  );
}
