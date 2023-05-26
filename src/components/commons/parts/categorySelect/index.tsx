import { Select } from "antd";
import {
  Key,
  ReactChild,
  ReactFragment,
  ReactPortal,
  useEffect,
  useState
} from "react";
import { CategoryObj } from "../../../../commons/libraries/translate";
import { option } from "../../../../commons/libraries/category";

interface IData {
  fetchDetailProduct: {
    product_category: string;
  };
}

interface IProps {
  setSelectedCategory: (value: string) => void;
  setSelectedOptions: (value: string[]) => void;
  selectedCategory: string | undefined;
  selectedOptions: string[];
  data?: IData;
}

interface IOption {
  value: string;
  label: string;
}

export default function CategorySelect(props: IProps) {
  const [ssss, setSSSS] = useState("");

  useEffect(() => {
    if (props.data !== undefined) {
      setSSSS(CategoryObj[props.data?.fetchDetailProduct?.product_category]);
    }
  }, [props.data]);

  // 카테고리 변경 기능
  const handleChangeCategory = (value: string) => {
    props.setSelectedCategory(value);
    props.setSelectedOptions([]);
  };

  // 카테고리별 옵션 변경 기능
  const handleChangeOptions = (value: string[]) => {
    props.setSelectedOptions(value);
  };

  // 선택한 카테고리에 해당하는 options 필터링
  const getCategoryOptions = () => {
    if (props.selectedCategory) {
      const selectedCategoryOptions = option.filter(
        (category: { label: string | undefined }) =>
          category.label === props.selectedCategory
      )[0];
      return selectedCategoryOptions ? selectedCategoryOptions.options : [];
    }
    return [];
  };

  const { Option } = Select;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%"
      }}
    >
      <Select
        style={{ marginRight: 5, width: "40%" }}
        placeholder="카테고리를 선택해주세요."
        onChange={handleChangeCategory}
        size={"large"}
        defaultValue={`${ssss}`}
      >
        {Array.isArray(option) &&
          option.map(category => (
            <Option key={category.label} value={category.label}>
              {category.label.split("&")[0]}
            </Option>
          ))}
      </Select>
      <Select
        style={{ width: "100%" }}
        placeholder="옵션을 선택해주세요."
        value={props.selectedOptions}
        onChange={handleChangeOptions}
        size={"large"}
        // defaultValue={props.data?.fetchDetailProduct?.product_sub_category}
      >
        {getCategoryOptions().map(
          (option: {
            value: Key | null | string | undefined;
            label:
              | boolean
              | ReactChild
              | ReactFragment
              | ReactPortal
              | null
              | undefined
              | string;
          }) => (
            <Option key={option.value} value={option.value}>
              {option.label}
            </Option>
          )
        )}
      </Select>
    </div>
  );
}
