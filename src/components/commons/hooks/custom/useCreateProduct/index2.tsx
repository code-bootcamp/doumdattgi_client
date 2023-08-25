import { ChangeEvent, SetStateAction, useEffect, useRef, useState } from "react";
import {
  EditorInstance,
  EditorInstance2,
  IFormData
} from "../../../../units/create/index.types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  schemaCreate,
  schemaSeekCreate
} from "../../../../../commons/libraries/schema";
import { useRouter } from "next/router";
import { DatePickerProps, UploadFile, UploadProps } from "antd";
import {
  FETCH_DETAIL_PRODUCT,
  useQueryFetchDetailProduct
} from "../../queries/useQueryFetchDetailProduct";
import { useMutationCreateProduct } from "../../mutations/useMutationCreateProduct";
import { useMutationUploadFile } from "../../mutations/useMutationUploadFile";
import { useMutationUpdateProduct } from "../../mutations/useMutationUpdateProduct";
import { IUpdate } from "./index.types";
import { option } from "../../../../../commons/libraries/category";
import { ICreateSeek } from "../../../../units/seek/create/index.types";

export const useCreateProduct2 = (isEdit: boolean, sellOrBuy: boolean) => {
  const router = useRouter();

  const [createProduct] = useMutationCreateProduct();
  const [updateProduct] = useMutationUpdateProduct();
  const [uploadFile] = useMutationUploadFile();

  const { data } = useQueryFetchDetailProduct(String(router.query.id));
  console.log(data);

  // 카테고리 state
  const [categoryArray, setCategoryArray] = useState<string[]>([]);
  const [categorySelect, setCategorySelect] = useState("");
  const [optionSelect, setOptionSelect] = useState("");
  console.log(optionSelect);

  // 작업가능시간 state
  const [workDay, setWorkDay] = useState("");
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);

  // 이미지 state
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  // 주소 state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [address, setAddress] = useState("");
  const [zipcode, setZipcode] = useState("");

  // 구해요 / 팔아요 boolean
  const [isToggle, setIsToggle] = useState(true);

  const clickEmployee = () => {
    setIsToggle(true);
    setValue("product_sellOrBuy", true);
  };

  const clickEmployer = () => {
    setIsToggle(false);
    setValue("product_sellOrBuy", false);
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const editorRef = useRef<EditorInstance>(null);

  const { register, setValue, trigger, handleSubmit, formState } = useForm<IFormData | IUpdate | ICreateSeek>({
    mode: "onChange",
    resolver: yupResolver(sellOrBuy ? schemaCreate : schemaSeekCreate)
  });

  const onChangeContents = (): void => {
    const editorInstance = editorRef.current?.getInstance() as EditorInstance2;
    const value = editorInstance?.getHTML();

    // register로 등록하지 않고 강제로 값을 넣을 수 있다.
    setValue("product_main_text", value === "<p><br></p>" ? "" : value);

    // setValue로 넣은 값을 검증 요청 하는 법.
    void trigger("product_main_text");
  };

  const onChangeCategory = (value: string): void => {
    setCategorySelect(value);
    setCategoryArray(option[value]);
    setOptionSelect("");

    setValue("product_category", value);
    void trigger("product_category");

    setValue("product_sub_category", "");
    void trigger("product_sub_category");
  };
  const onChangeSubCategory = (value: string): void => {
    setOptionSelect(value);

    setValue("product_sub_category", value);
    void trigger("product_sub_category");
  };

  const onChangeWorkTime = (_: any, timeString: (string | any[])[]) => {
    const startTime = Number(timeString[0].slice(0, 2));
    const endTime = Number(timeString[1].slice(0, 2));

    setValue("product_startTime", startTime);
    void trigger("product_startTime");

    setValue("product_endTime", endTime);
    void trigger("product_endTime");
  };

  const onChangeWorkDay = (value: string) => {
    setValue("product_workDay", value);
    void trigger("product_workDay");
  };

  const onChangeThumbnailImage: UploadProps["onChange"] = ({
    fileList: newFileList
  }) => {
    setFileList(newFileList);

    setValue("product_thumbnailImage", newFileList);
    void trigger("product_thumbnailImage");
  };

  const onCompleteAddressSearch = (data: {
    zonecode: string
    address: string
  }) => {
    setValue("product_postNum", data.zonecode);
    void trigger("product_postNum");
    setValue("product_roadAddress", data.address);
    void trigger("product_roadAddress");

    setAddress(data.address);
    setZipcode(data.zonecode);
    setIsModalOpen(prev => !prev);
  };

  if (isEdit) {
    useEffect(() => {
      setValue("product_title", data?.fetchDetailProduct?.product_title ?? "");

      if (data) {
        setCategorySelect(data?.fetchDetailProduct?.product_category);
        setCategoryArray(option[data?.fetchDetailProduct?.product_category]);
        setOptionSelect(data?.fetchDetailProduct?.product_sub_category);
      }
      setValue("product_category", data?.fetchDetailProduct?.product_category ?? "");
      setValue(
        "product_sub_category",
        data?.fetchDetailProduct?.product_sub_category ?? ""
      );

      setValue("product_summary", data?.fetchDetailProduct?.product_summary ?? "");

      setValue(
        "product_minAmount",
        data?.fetchDetailProduct?.product_minAmount ?? ""
      );

      setValue(
        "product_main_text",
        data?.fetchDetailProduct?.product_main_text === "<p><br></p>"
          ? ""
          : data?.fetchDetailProduct?.product_main_text ?? ""
      );

      setValue("product_workDay", data?.fetchDetailProduct?.product_workDay ?? "");
      setValue(
        "product_startTime",
        data?.fetchDetailProduct?.product_startTime ?? 0
      );
      setValue("product_endTime", data?.fetchDetailProduct?.product_endTime ?? 0);

      setValue("product_postNum", data?.fetchDetailProduct?.product_postNum ?? "");
      setValue(
        "product_roadAddress",
        data?.fetchDetailProduct?.product_roadAddress ?? ""
      );
      setValue(
        "product_detailAddress",
        data?.fetchDetailProduct?.product_detailAddress ?? ""
      );

      setValue("product_thumbnailImage", data?.fetchDetailProduct?.images);
    }, [data]);
  }

  const onClickAddressSearch = (): void => {
    setIsModalOpen(prev => !prev);
  };



  const [disabledPossibleAmount, setDisabledPossibleAmount] = useState(false)
  const [disabledDate, setDisabledDate] = useState(false)

  const onChangePossibleAmount = (e: ChangeEvent<HTMLInputElement>) => {
    if(e.target.value === "협의가능"){
      setDisabledPossibleAmount(true)
      setValue("product_possibleAmount", "협의가능")
      void trigger("product_possibleAmount")
    } else if(e.target.value === "직접입력"){
      setDisabledPossibleAmount(false)
      setValue("product_possibleAmount", "")
    }
  }
  const onChangeDate = (e: ChangeEvent<HTMLInputElement>) => {
    if(e.target.value === "협의가능"){
      setDisabledDate(true)
      setValue("product_date", "협의가능")
      void trigger("product_date")
    } else if(e.target.value === "직접입력"){
      setDisabledDate(false)
      setValue("product_date", "")
    }
  };
  const onChangeDatePicker: DatePickerProps["onChange"] = (_, dateString) => {
    setValue("product_date", dateString);
    void trigger("product_date");
  };

  // =============== 게시글 작성 ===============

  const onClickCreateProduct = async (data: IFormData): Promise<void> => {
    console.log(data);
    try {
      // setIsSubmitting(true);
      const results = await Promise.all(
        fileList.map(el =>
          uploadFile({ variables: { files: el.originFileObj } })
        )
      );

      const product_thumbnailImage = results.map(el => {
        return { thumbnailImage: el.data?.uploadFile[0] ?? "", isMain: false };
      });

      if (product_thumbnailImage.length > 0)
        product_thumbnailImage[0].isMain = true;

      const result = await createProduct({
        variables: {
          createProductInput: {
            product_sellOrBuy: sellOrBuy,
            product_title: String(data.product_title),
            product_category: data.product_category,
            product_sub_category: data.product_sub_category,
            product_summary: String(data.product_summary),
            product_main_text: String(data.product_main_text),
            product_workDay: data.product_workDay,
            product_workTime: data.product_endTime - data.product_startTime,
            product_startTime: data.product_startTime,
            product_endTime: data.product_endTime,
            product_thumbnailImage: product_thumbnailImage,
            product_minAmount: data.product_minAmount
          }
        }
      });
      // setIsSubmitting(false);
      alert("게시글 등록이 완료되었습니다.");
      void router.push(`/${result.data?.createProduct.product_id as string}`);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  // =============== 게시글 수정 ===============
  const onClickEditProduct = async (update: IUpdate): Promise<void> => {
    console.log(update);
    let updateFile = fileList.filter(el => el.originFileObj !== undefined);
    let prevFile = fileList
      .filter(el => el.originFileObj === undefined)
      .map(el => {
        return { thumbnailImage: el.url ?? "", isMain: false };
      });

    const results = await Promise.all(
      updateFile.map(el =>
        uploadFile({ variables: { files: el.originFileObj } })
      )
    );
    const product_thumbnailImage = results.map(el => {
      return { thumbnailImage: el.data?.uploadFile[0] ?? "", isMain: false };
    });

    const resultUrl = [...prevFile, ...product_thumbnailImage];
    resultUrl[0].isMain = true;

    try {
      const result = await updateProduct({
        variables: {
          product_id: router.query.id as string,
          updateProductInput: {
            product_sellOrBuy: sellOrBuy,
            product_title: update.product_title,
            product_category: update.product_category,
            product_sub_category: update.product_sub_category,
            product_summary: update.product_summary,
            product_main_text: update.product_main_text,
            product_workDay: update.product_workDay,
            product_workTime: update.product_endTime - update.product_startTime,
            product_startTime: update.product_startTime,
            product_endTime: update.product_endTime,
            product_thumbnailImage: resultUrl
          }
        },
        refetchQueries: [
          {
            query: FETCH_DETAIL_PRODUCT,
            variables: { product_id: String(router.query.id) }
          }
        ]
      });
      alert("게시글 수정이 완료되었습니다.");
      void router.push(`/${router.query.id as string}`);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  // =============== 구해요 게시글 작성 ===============

  const onClickCreateSeek = async (data: ICreateSeek): Promise<void> => {
    console.log(data)

    try {
      const result = await createProduct({
        variables: {
          createProductInput: {
            product_sellOrBuy: sellOrBuy,
            product_title: String(data.product_title),
            product_category: data.product_category,
            product_sub_category: data.product_sub_category,
            product_main_text: String(data.product_main_text),
            product_possibleAmount: data.product_possibleAmount,
            product_date: data.product_date,
            product_endTime: 0,
            product_startTime: 0,
            product_summary: "",
            product_thumbnailImage: [{ thumbnailImage: "", isMain: true }],
            product_workDay: "WEEKDAY",
            product_workTime: 0,
            product_postNum: data.product_postNum,
            product_roadAddress: data.product_roadAddress,
            product_detailAddress: data.product_detailAddress
          }
        }
      });
      // setIsSubmitting(false);
      alert("게시글 등록이 완료되었습니다.");
      void router.push(
        `/seek/${result.data?.createProduct.product_id as string}`
      );
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return {
    data,

    isToggle,
    clickEmployee,
    clickEmployer,

    editorRef,
    register,
    handleSubmit,
    formState,
    onChangeContents,
    onClickCreateProduct,
    onClickEditProduct,
    onClickCreateSeek,

    categoryArray,
    setCategoryArray,
    categorySelect,
    setCategorySelect,
    optionSelect,
    setOptionSelect,

    workDay,
    setWorkDay,
    startTime,
    setStartTime,
    endTime,
    setEndTime,

    fileList,
    setFileList,

    isModalOpen,
    setIsModalOpen,
    onClickAddressSearch,
    onCompleteAddressSearch,

    address,
    zipcode,
    isSubmitting,

    disabledPossibleAmount,
    disabledDate,

    onChangeCategory,
    onChangeSubCategory,
    onChangeWorkTime,
    onChangeWorkDay,
    onChangeThumbnailImage,
    onChangePossibleAmount,
    onChangeDate,
    onChangeDatePicker
  };
};
