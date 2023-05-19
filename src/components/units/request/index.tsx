import dynamic from "next/dynamic";
import ButtonHeight70px from "../../commons/buttons/ButtonHeight70px";
import InputHeight50px from "../../commons/inputs/InputHeight50px";
import * as S from "./styles";
import { useRouter } from "next/router";
import Link from "next/link";

const Editor = dynamic(
  async () => await import("../../commons/parts/Toasteditor/index"),
  {
    ssr: false
  }
);

export default function Request(): JSX.Element {
  const router = useRouter();

  const storage = globalThis?.sessionStorage;
  const link = storage.getItem("prevPath") || "/";

  return (
    <S.Wrapper>
      <S.Title>의뢰서 작성하기</S.Title>
      <S.DivideLine />
      <S.ContentsBox>
        <S.SubTitle>
          의뢰 내용
          <S.SubTitle2> *</S.SubTitle2>
        </S.SubTitle>
        <Editor />
      </S.ContentsBox>
      <S.SubTitle>
        작업 요청 시간
        <S.SubTitle2> *</S.SubTitle2>
      </S.SubTitle>
      <S.PaymentBox>
        <S.PaymentIndex1>9,620</S.PaymentIndex1>
        <S.PaymentIndex2>X</S.PaymentIndex2>
        <div>
          <InputHeight50px />
        </div>
        <S.PaymentIndex2>시간</S.PaymentIndex2>
        <S.PaymentIndex1>=</S.PaymentIndex1>
        <S.PaymentIndex2>₩</S.PaymentIndex2>
        <S.PaymentIndex1>38,480</S.PaymentIndex1>
      </S.PaymentBox>
      <S.BtnBox>
        <Link href={link}>
          <ButtonHeight70px title="취소하기" />
        </Link>
        <S.Between />
        <ButtonHeight70px title="신청하기" />
      </S.BtnBox>
    </S.Wrapper>
  );
}
