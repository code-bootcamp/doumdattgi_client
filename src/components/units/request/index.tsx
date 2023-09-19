import dynamic from "next/dynamic";
import ButtonHeight70px from "../../commons/buttons/ButtonHeight70px";
import InputHeight50px from "../../commons/inputs/InputHeight50px";
import * as S from "./styles";
import { useRouter } from "next/router";
import Link from "next/link";
import { useRequest } from "../../commons/hooks/custom/useSendRequest/index";
import { useForm } from "react-hook-form";
// import { schemaCreateRequest } from "../../../commons/libraries/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { ChangeEvent, useEffect, useRef } from "react";
import { EditorInstance, EditorInstance2 } from "./index.types";
import ButtonHeight50px from "../../commons/buttons/ButtonHeight50px";
import { useQueryFetchUserPaymentInfo } from "../../commons/hooks/queries/useQueryFetchUserPaymentInfo";
import { useQueryFetchDetailProduct } from "../../commons/hooks/queries/useQueryFetchDetailProduct";
import InputHeight40px from "../../commons/inputs/InputHeight40px";
import { DatePicker, DatePickerProps } from "antd";
import { RangePickerProps } from "antd/es/date-picker";
import dayjs from "dayjs";
import { useRecoilState } from "recoil";
import { minAmountState } from "../../../commons/stores";
import { useSchema } from "../../../commons/libraries/schema";

const CountUp = dynamic(
  async () => await import("../../commons/parts/countUp/intex"),
  {
    ssr: false
  }
);

const Editor = dynamic(async () => await import("../../commons/parts/editor"), {
  ssr: false
});

interface IFormData {
  product_id: string;
  request_title: string;
  request_content: string;
  request_price: string;
  request_dueDate: string;
}

interface IEditor {
  getInstance: any;
}

export default function Request(props: any): JSX.Element {
  const router = useRouter();
  const editorRef = useRef<EditorInstance>(null);

  const storage = globalThis?.sessionStorage;
  const link = storage?.getItem("prevPath") || "/";
  const { onClickWriteRequest, isTime, setIsTime, isSubmitting } = useRequest();

  const { data } = useQueryFetchUserPaymentInfo("");
  const { data: product } = useQueryFetchDetailProduct(`${router.query.id}`);
  const [minAmount, setMinAmount] = useRecoilState(minAmountState);
  const { schemaCreateRequest } = useSchema();

  const userPoint = data?.fetchPayments[0]?.user?.user_point ?? 0;
  const minimumWage = Number(product?.fetchDetailProduct?.product_minAmount);

  useEffect(() => {
    setMinAmount(minimumWage);
  }, [product]);

  // ============== 포인트 부족 ===============
  // useEffect(() => {
  //   if (data !== undefined && userPoint < minimumWage) {
  //     alert("포인트가 부족하여 충전 페이지로 이동합니다.");
  //     router.push("/mypage/point");
  //   }
  // }, []);

  // =============== 의뢰서 작성 ===============
  const { register, handleSubmit, formState, setValue, trigger } =
    useForm<IFormData>({
      resolver: yupResolver(schemaCreateRequest),
      mode: "onChange"
    });

  const onChangeContents = (data: IEditor): void => {
    const EditorInstance = editorRef.current?.getInstance() as EditorInstance2;
    const value = EditorInstance?.getHTML();
    setValue("request_content", value === "<p><br></p>" ? "" : value);
    void trigger("request_content");
  };

  const onChangeDate: DatePickerProps["onChange"] = (_, dateString) => {
    setValue("request_dueDate", dateString);
    void trigger("request_dueDate");
  };

  const disabledDate: RangePickerProps["disabledDate"] = current => {
    // Can not select days before today and today
    return current < dayjs().endOf("day");
  };

  return (
    <form onSubmit={handleSubmit(onClickWriteRequest)}>
      <S.Wrapper>
        <S.Container>
          <S.Title>
            {product?.fetchDetailProduct?.user?.user_nickname}님의
            <S.Highlight>
              {product?.fetchDetailProduct?.product_title}
            </S.Highlight>
            서비스 의뢰서 작성하기
          </S.Title>
          <S.Desc>
            신청을 위해 아래 폼을 채워주세요! <br />
            최대한 상세히 채울수록 원하는 결과물을 받아볼 가능성이 높아진답니다.
          </S.Desc>
          <S.DivideLine />
          <S.InputWrap>
            <S.SubTitle>
              의뢰 제목<S.SubTitle2> *</S.SubTitle2>
            </S.SubTitle>
            <InputHeight40px
              register={register("request_title")}
              placeholder="제목을 입력해주세요."
            />
            <S.Error>{formState.errors.request_title?.message}</S.Error>
          </S.InputWrap>
          <S.InputWrap>
            <S.SubTitle>
              의뢰 내용
              <S.SubTitle2> *</S.SubTitle2>
            </S.SubTitle>
            <S.EditorBox>
              <Editor onChangeValue={onChangeContents} editorRef={editorRef} />
            </S.EditorBox>
            <S.Error>{formState.errors.request_content?.message}</S.Error>
          </S.InputWrap>
          <S.InputWrap>
            <S.SubTitle>
              작업 요청 금액
              <S.SubTitle2> *</S.SubTitle2>
            </S.SubTitle>
            <S.InputBox>
              <InputHeight40px
                placeholder="예) 10,000 P"
                register={register("request_price")}
              />
            </S.InputBox>
            <S.Error>{formState.errors.request_price?.message}</S.Error>
          </S.InputWrap>
          <S.InputWrap>
            <S.SubTitle>
              필요 날짜
              <S.SubTitle2> *</S.SubTitle2>
            </S.SubTitle>
            <S.InputBox>
              <DatePicker
                onChange={onChangeDate}
                size="large"
                showToday={false}
                format={"YYYY. MM. DD"}
                disabledDate={disabledDate}
              />
            </S.InputBox>
            <S.Error>{formState.errors.request_dueDate?.message}</S.Error>
          </S.InputWrap>
          <S.BtnBox>
            <Link href={link}>
              <ButtonHeight50px title="취소하기" />
            </Link>
            <S.Between />
            <ButtonHeight50px
              title="신청하기"
              isActive={formState.isValid}
              // disabled={isSubmitting}
            />
          </S.BtnBox>
        </S.Container>
      </S.Wrapper>
    </form>
  );
}
