import { Dispatch, SetStateAction } from "react";

interface IData {
  product_category: string;
  product_sub_category: string
}

export interface ICategory2Props {
  categoryArray?: string[];
  setCategoryArray: Dispatch<SetStateAction<string[]>>;
  categorySelect?: string;
  setCategorySelect: Dispatch<SetStateAction<string>>;
  optionSelect?: string;
  setOptionSelect: Dispatch<SetStateAction<string>>;
  selectedCategory?: string | undefined;
  selectedOptions?: string[];
  data?: IData;
  onChangeCategory?: (value: string) => void;
  onChangeSubCategory?: (value: string) => void;
}
