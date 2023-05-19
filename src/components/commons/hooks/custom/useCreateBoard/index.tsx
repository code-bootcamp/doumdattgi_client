import { useMutation } from "@apollo/client";
import { CREATE_BOARD } from "../../mutations/useMutationCreateBoard";
import { useRouter } from "next/router";
import { useState } from "react";
import { useMutationCreateProduct } from "../../mutations/useMutationCreateProduct";

interface IFormData {
  title?: string;
  remarks?: string;
  contents?: string;
}

export const useBoard = () => {
  const router = useRouter();

  const [createProduct] = useMutationCreateProduct()

  const [selectedCategory, setSelectedCategory] = useState<
    string | undefined
  >();
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  console.log(selectedCategory, selectedOptions);

  // =============== 글작성 ===============
  const onClickWrite = async (data: IFormData): Promise<void> => {
    try {
      const result = await createProduct({
        variables: {
          createProductInput: {
            title: data.title,
            category: selectedCategory,
            sub_category: selectedOptions,
            summary: data.remarks,
            main_text: data.contents,
            sellOrBuy: true
          }
        }
      });
      console.log(result)
    } catch (error) {
      alert(error.message);
    }
  };

  return {
    onClickWrite,
    selectedCategory,
    setSelectedCategory,
    selectedOptions,
    setSelectedOptions
  };
};
