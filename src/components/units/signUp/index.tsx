import * as S from "./signup.style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaSignUp } from "../../../commons/libraries/schema";
import ButtonHeight50px from "../../commons/buttons/ButtonHeight50px";
import InputHeight42px from "../../commons/inputs/InputHeight42px";
import { useUser } from "../../commons/hooks/custom/useUser";
import ButtonHeight42px from "../../commons/buttons/ButtonHeight42px";

interface IFormData {
  email: string;
  password: string;
  passwordCheck: string;
  nickName: string;
  phoneNumber: number;
  name: string;
}

export default function SignUp(): JSX.Element {
  const { onClickSignUp, onClickValidation, isOn, isActive, sec } = useUser();

  const { register, handleSubmit, formState } = useForm<IFormData>({
    resolver: yupResolver(schemaSignUp),
    mode: "onChange"
  });

  return (
    <S.Wrapper>
      <S.Title>회원가입</S.Title>
      <S.SubTitle>이메일</S.SubTitle>
      <form onSubmit={handleSubmit(onClickSignUp)}>
        <InputHeight42px placeholder="이메일" register={register("email")} />
        {!isOn && (
          <S.AuthBtn type="button" onClick={onClickValidation}>
            이메일 인증하기
          </S.AuthBtn>
        )}
        {isOn && (
          <>
            <S.SubTitle>인증번호 입력</S.SubTitle>
            <S.InputBox>
              <InputHeight42px placeholder="인증번호 입력" />
              <S.Timer>{sec}</S.Timer>
              <S.ButtonBox>
                <ButtonHeight42px
                  title="인증하기"
                  type="button"
                  isActive={isActive}
                />
              </S.ButtonBox>
            </S.InputBox>
          </>
        )}
        <S.SubTitle>비밀번호</S.SubTitle>
        <S.SubTitleDetail>
          영문, 숫자를 포함한 8~16자리의 비밀번호를 입력해주세요
        </S.SubTitleDetail>
        <InputHeight42px
          placeholder="비밀번호"
          type="password"
          register={register("password")}
        />
        <S.SubTitle>비밀번호 확인</S.SubTitle>
        <InputHeight42px
          placeholder="비밀번호"
          type="password"
          register={register("passwordCheck")}
        />
        <S.SubTitle>닉네임</S.SubTitle>
        <S.SubTitleDetail>닉네임을 입력해주세요. (2~15자)</S.SubTitleDetail>
        <InputHeight42px
          placeholder="별명 (2~15자)"
          register={register("nickName")}
        />
        <S.SubTitle>휴대폰 번호</S.SubTitle>
        <InputHeight42px
          placeholder="휴대폰 번호"
          register={register("phoneNumber")}
        />
        <S.SubTitle>이름</S.SubTitle>
        <InputHeight42px
          placeholder="성함을 입력해주세요"
          register={register("name")}
        />
        <ButtonHeight50px title="회원가입하기" isActive={formState.isValid} />
      </form>
      <S.Footer>
        이미 아이디가 있으신가요?
        <S.Login href="/login">로그인</S.Login>
      </S.Footer>
    </S.Wrapper>
  );
}
