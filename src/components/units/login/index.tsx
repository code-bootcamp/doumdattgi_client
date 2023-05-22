import { useForm } from "react-hook-form";
import * as S from "./login.styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaLogin } from "../../../commons/libraries/schema";
import ButtonHeight50px from "../../commons/buttons/ButtonHeight50px";
import InputHeight46px from "../../commons/inputs/InputHeight46px";
import { useUser } from "../../commons/hooks/custom/useUser/index";
import Link from "next/link";

interface IFormData {
  email: string;
  password: string;
}

export default function Login(): JSX.Element {
  const { onClickLogin } = useUser();

  const { register, handleSubmit, formState } = useForm<IFormData>({
    resolver: yupResolver(schemaLogin),
    mode: "onChange"
  });

  return (
    <S.Wrapper>
      <form onSubmit={handleSubmit(onClickLogin)}>
        <S.Title>로그인</S.Title>
        <S.IndexTitle>이메일</S.IndexTitle>
        <InputHeight46px
          placeholder="이메일을 입력해주세요."
          register={register("email")}
        />
        <S.Error>{formState.errors.email?.message}</S.Error>
        <S.IndexTitle>비밀번호</S.IndexTitle>
        <InputHeight46px
          placeholder="비밀번호를 입력해주세요."
          register={register("password")}
          type="password"
        />
        <S.Error>{formState.errors.password?.message}</S.Error>
        <ButtonHeight50px
          title="로그인"
          isActive={formState.isValid}
        ></ButtonHeight50px>
      </form>
      <S.FindingBox>
        <S.Finding href="/accountRecovery">이메일 찾기 {">"} </S.Finding>
        <S.Finding href="/accountRecovery">비밀번호 찾기 {">"} </S.Finding>
      </S.FindingBox>
      <S.SocialLogin>
        <div>SNS로 간편하게 시작하기</div>
        <Link href={"https://doumdattgi-server.com/login/kakao/"}>
          <S.SocialLoginButton src="/카카오톡 버튼.png" />
        </Link>
        <Link href={"https://doumdattgi-server.com/login/google/"}>
          <S.SocialLoginButton src="/구글 버튼.png" />
        </Link>
        <Link href={"https://doumdattgi-server.com/login/naver/"}>
          <S.SocialLoginButton src="/네이버 버튼.png" />
        </Link>
      </S.SocialLogin>
      <div>
        아직 도움닫기 회원이아니세요?
        <S.Join href="/signup">회원가입 하기</S.Join>
      </div>
    </S.Wrapper>
  );
}
