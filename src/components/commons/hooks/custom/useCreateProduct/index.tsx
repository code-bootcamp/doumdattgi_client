import { useRouter } from "next/router";
import { useState } from "react";
import { useMutationCreateProduct } from "../../mutations/useMutationCreateProduct";
import { useMutationUploadFile } from "../../mutations/useMutationUploadFile";
import { DateObj } from "../../../../../commons/libraries/translate";
import { UploadFile } from "antd";

interface IFormData {
  title?: string;
  summary?: string;
  contents?: string;
  product_sellOrBuy?: boolean;
}

export const useCreateProduct = () => {
  const router = useRouter();

  const [createProduct] = useMutationCreateProduct();
<<<<<<< HEAD
=======
  const [uploadFile] = useMutationUploadFile();

>>>>>>> 137f8fcf694ecddf7ed22a716d37de8ec1830870
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedWorkDay, setSelectedWorkDay] = useState("");
  const [selectedWorkTime, setSelectedWorkTime] = useState("");
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  // =============== 글작성 ===============
  const onClickWrite = async (data: IFormData): Promise<void> => {
    // console.log(data);

    const results = await Promise.all(
      fileList.map(el => uploadFile({ variables: { files: el.originFileObj } }))
    );

    const product_thumbnailImage = results.map(el => {
      return { thumbnailImage: el.data.uploadFile[0], isMain: false };
    });
    product_thumbnailImage[0].isMain = true;

    console.log(product_thumbnailImage);
    console.log("dfjsdfljsdfl");
    console.log(data);

    const product_startTime = selectedWorkTime[0];
    const product_endTime = selectedWorkTime[1];
    const product_workTime = Math.abs(
      Number(selectedWorkTime[0]) - Number(selectedWorkTime[1])
    );

    // 카테고리 [영어 선택 로직]
    const product_category = selectedCategory.split("&")[1];

    try {
      const result = await createProduct({
        variables: {
          createProductInput: {
            product_sellOrBuy: data.product_sellOrBuy ?? true,
            product_title: data.title,
            product_category: product_category,
            product_sub_category: selectedOptions,
            product_summary: data.summary,
            product_main_text: data.contents,
            product_workDay: DateObj[selectedWorkDay],
            product_workTime: product_workTime,
            product_startTime: Number(product_startTime),
            product_endTime: Number(product_endTime),
            product_thumbnailImage: product_thumbnailImage,
            product_postNum: "",
            product_roadAddress: "",
            product_detailAddress: ""
          }
        }
      });
      alert("게시글 등록이 완료되었습니다.");
      console.log(result);
      void router.push(`/${result.data?.createProduct.product_id as string}`);
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
    setSelectedWorkTime,
    fileList,
    setFileList
  };
};
