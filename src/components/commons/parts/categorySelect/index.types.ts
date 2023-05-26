import { Dispatch, SetStateAction } from "react";
import { IProduct } from "../../../../commons/types/generated/types";

export interface ICategory2Props {
  categoryArray: string[];
  setCategoryArray: Dispatch<SetStateAction<string[]>>;
  categorySelect: string;
  setCategorySelect: Dispatch<SetStateAction<string>>;
  optionSelect: string;
  setOptionSelect: Dispatch<SetStateAction<string>>;
  data?: IProduct[];
}
