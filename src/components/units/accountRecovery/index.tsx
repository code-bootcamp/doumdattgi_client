import * as S from "./accountRecovery.styles";
import InputHeight42px from "../../commons/inputs/InputHeight42px";
import ButtonHeight50px from "../../commons/buttons/ButtonHeight50px";
import { useState } from "react";
import ButtonHeight42px from "../../commons/buttons/ButtonHeight42px";
import { useAccountRecovery } from "../../commons/hooks/custom/useAccountRecovery";

interface IFinding {
  isEmail: boolean;
}

export default function AccountRecovery(props: IFinding): JSX.Element {
  const {
    onClickAuthPhone,
    isValidateOpen,
    register,
    formState,
    handleSubmit,
    onClickValidate
  } = useAccountRecovery();

  return (
    <>
      <S.Wrapper>
        <form onSubmit={isValidateOpen ? handleSubmit(onClickValidate) : handleSubmit(onClickAuthPhone)}>
          <S.Title>{props?.isEmail ? "이메일 " : "비밀번호 "}찾기</S.Title>
          <S.SubTitle>
            가입 시 등록했던 휴대폰 번호를 입력해주세요.
            <br />
            휴대폰 번호로 인증번호를 보내드립니다.
          </S.SubTitle>
          <S.IndexTitle>휴대폰 번호</S.IndexTitle>
          <InputHeight42px
            placeholder="휴대폰 번호"
            register={register("user_phone")}
          />
          <div>{formState.errors.user_phone?.message}</div>
          {isValidateOpen ? (
            <>
              <S.AuthWrapper>
                <S.IndexTitle>인증번호 입력</S.IndexTitle>
                <S.AuthBody>
                  <InputHeight42px placeholder="인증번호 입력" register={register("user_token")}/>
                  <S.Button>
                    <ButtonHeight42px title="인증하기" />
                  </S.Button>
                </S.AuthBody>
              </S.AuthWrapper>
            </>
          ) : (
            <>
              <ButtonHeight50px title="전송하기"/>
            </>
          )}
        </form>
        <S.Footer>
          {props.isEmail ? "이메일이 " : "비밀번호가 "} 생각나셨나요?
          <S.Login href="/login">로그인</S.Login>
        </S.Footer>
      </S.Wrapper>
    </>
  );
}
