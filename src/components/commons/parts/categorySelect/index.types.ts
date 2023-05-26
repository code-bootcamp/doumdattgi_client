import { Dispatch, SetStateAction } from "react";

interface IData {
  product_category: string;
}

export interface ICategory2Props {
  categoryArray?: string[];
  setCategoryArray: Dispatch<SetStateAction<string[]>>;
  categorySelect?: string;
  setCategorySelect: Dispatch<SetStateAction<string>>;
  optionSelect?: string;
  setOptionSelect: Dispatch<SetStateAction<string>>;
  //   data?: IProduct;

  //   setSelectedCategory: (value: string) => void;
  //   setSelectedOptions: (value: string[]) => void;
  selectedCategory?: string | undefined;
  selectedOptions?: string[];
  data?: IData;
}
