import { useMutation } from "@apollo/client";
import { CREATE_BOARD } from "../../mutations/useMutationCreateBoard";
import { useRouter } from "next/router";
import { useState } from "react";
import { useMutationCreateProduct } from "../../mutations/useMutationCreateProduct";

interface IFormData {
  title?: string;
  summary?: string;
  contents?: string;
}

export const useCreateProduct = () => {
  const router = useRouter();

  const [createProduct] = useMutationCreateProduct();

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedWorkDay, setSelectedWorkDay] = useState("");
  const [selectedWorkTime, setSelectedWorkTime] = useState("");

  // =============== 글작성 ===============
  const onClickWrite = async (data: IFormData): Promise<void> => {
    console.log(data);
    console.log(selectedCategory);

    try {
      const result = await createProduct({
        variables: {
          createProductInput: {
            product_sellOrBuy: true,
            product_title: data.title,
            product_category: "DESIGN",
            product_sub_category: selectedOptions,
            product_summary: data.summary,
            product_main_text: data.contents,
            product_workDay: "WEEKDAY",
            product_workTime: Number(selectedWorkTime),
            product_startTime: 1,
            product_endTime: 1,
            product_thumbnailImage: [],
            product_isMain: [],
            product_postNum: "",
            product_roadAddress: "",
            product_detailAddress: ""
          }
        }
      });
      alert("게시글 등록이 완료되었습니다.");
      console.log(result);
      // void router.push(`/${result.data?.createBoard._id as string}`);
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
    console.log(selectedOptions, selectedWorkDay, selectedWorkTime);
  };

  return {
    onClickWrite,
    selectedCategory,
    setSelectedCategory,
    selectedOptions,
    setSelectedOptions,
    selectedWorkDay,
    setSelectedWorkDay,
    selectedWorkTime,
    setSelectedWorkTime
  };
};
