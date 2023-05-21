import { Select } from "antd";
import { useCategory } from "../../hooks/custom/useCategory";
import { options } from "../../../../commons/libraries/category";

export default function CategorySelect() {
  const {
    handleChangeCategory,
    selectedOptions,
    handleChangeOptions,
    getCategoryOptions,
    selectedCategory
  } = useCategory();
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
      >
        {options.map(category => (
          <Option key={category.label} value={category.label}>
            {category.label}
          </Option>
        ))}
      </Select>
      <Select
        style={{ width: "100%" }}
        placeholder="옵션을 선택해주세요."
        value={selectedOptions}
        onChange={handleChangeOptions}
        size={"large"}
      >
        {getCategoryOptions().map(option => (
          <Option key={option.value} value={option.value}>
            {option.label}
          </Option>
        ))}
      </Select>
    </div>
  );
}
