import dynamic from "next/dynamic";
import ButtonHeight70px from "../../commons/buttons/ButtonHeight70px";
import InputHeight50px from "../../commons/inputs/InputHeight50px";
import * as S from "./styles";
import { useRouter } from "next/router";
import Link from "next/link";
import { useRequest } from "../../commons/hooks/custom/useCreateRequest/index";
import { useForm, UseFormRegisterReturn } from "react-hook-form";
import { schemaCreateRequest } from "../../../commons/libraries/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import type { ChangeEvent } from "react";

const CountUp = dynamic(
  async () => await import("../../commons/parts/countUp/intex"),
  {
    ssr: false
  }
);

const Editor = dynamic(
  async () => await import("../../commons/parts/Toasteditor/index"),
  {
    ssr: false
  }
);

interface IFormData {
  title: string;
  contents: string;
  isTime: number;
  wage: string;
}

export default function Request(): JSX.Element {
  const router = useRouter();

  const storage = globalThis?.sessionStorage;
  const link = storage?.getItem("prevPath") || "/";

  const { onClickWriteRequest, isTime, setIsTime } = useRequest();
  const minimumWage = 9620;

  // =============== 의뢰서 작성 ===============
  const { register, handleSubmit, formState, setValue, trigger } =
    useForm<IFormData>({
      resolver: yupResolver(schemaCreateRequest),
      mode: "onChange"
    });

  const onChangeContents = (data: string): void => {
    console.log(data);
    setValue("contents", data === "<p><br></p>" ? "" : data);
    void trigger("contents");
  };

  // =============== 시간을 입력하면 지불 금액 계산 ===============

  const onChangeTime = (event: ChangeEvent<HTMLInputElement>): void => {
    const time = Number(event?.target.value);
    setIsTime(String(time * minimumWage));
    setValue("wage", String(time * minimumWage));
    trigger("wage");
  };

  return (
    <form onSubmit={handleSubmit(onClickWriteRequest)}>
      <S.Wrapper>
        <S.Title>의뢰서 작성하기</S.Title>
        <S.DivideLine />
        <S.ContentsBox>
          <S.SubTitle>
            의뢰 제안서<S.SubTitle2> *</S.SubTitle2>
          </S.SubTitle>
          <InputHeight50px register={register("title")} />
          <S.SubTitle>
            의뢰 내용
            <S.SubTitle2> *</S.SubTitle2>
          </S.SubTitle>
          <Editor onChange={onChangeContents} />
        </S.ContentsBox>
        <S.SubTitle>
          작업 요청 시간
          <S.SubTitle2> *</S.SubTitle2>
        </S.SubTitle>
        <S.PaymentBox>
          <S.PaymentIndex1>9,620</S.PaymentIndex1>
          <S.PaymentIndex2>X</S.PaymentIndex2>
          <div>
            <S.Time onChange={onChangeTime} />
          </div>
          <S.PaymentIndex2>시간</S.PaymentIndex2>
          <S.PaymentIndex1>=</S.PaymentIndex1>
          <S.PaymentIndex2>₩</S.PaymentIndex2>
          <CountUp isTime={isTime} />
        </S.PaymentBox>
        <S.BtnBox>
          <Link href={link}>
            <ButtonHeight70px title="취소하기" />
          </Link>
          <S.Between />
          <ButtonHeight70px title="신청하기" isActive={formState.isValid} />
        </S.BtnBox>
      </S.Wrapper>
    </form>
  );
}
