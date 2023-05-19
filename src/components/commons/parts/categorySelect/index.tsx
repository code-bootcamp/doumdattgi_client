import { Select } from "antd";
import { useCategory } from "../../hooks/custom/useCategory";
import { options } from "../../../../commons/libraries/category";


export default function CategorySelect() {

  const { handleChangeCategory, selectedOptions, handleChangeOptions, getCategoryOptions, selectedCategory } = useCategory()
  const { Option } = Select;

const CategorySelect: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<
    string | undefined
  >();
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  // 카테고리 변경 기능
  const handleChangeCategory = (value: string) => {
    setSelectedCategory(value);
    setSelectedOptions([]);
  };

  // 카테고리별 옵션 변경 기능
  const handleChangeOptions = (value: string[]) => {
    setSelectedOptions(value);
  };

  // 선택한 카테고리에 해당하는 options 필터링
  const getCategoryOptions = () => {
    if (selectedCategory) {
      const selectedCategoryOptions = options.find(
        category => category.label === selectedCategory
      );
      return selectedCategoryOptions ? selectedCategoryOptions.options : [];
    }
    return [];
  };

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
