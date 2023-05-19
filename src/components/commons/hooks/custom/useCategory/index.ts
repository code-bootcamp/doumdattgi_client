import { useState } from "react";
import { options } from "../../../../../commons/libraries/category";
import { useBoard } from "../useCreateBoard";

export const useCategory = () => {
  const {
    selectedCategory,
    setSelectedCategory,
    selectedOptions,
    setSelectedOptions
  } = useBoard();
  
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

  //   console.log(selectedCategory, selectedOptions)

  return {
    handleChangeCategory,
    selectedCategory,
    selectedOptions,
    handleChangeOptions,
    getCategoryOptions
  };
};
