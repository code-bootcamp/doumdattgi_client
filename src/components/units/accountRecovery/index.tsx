import * as S from "./accountRecovery.styles";
import InputHeight42px from "../../commons/inputs/InputHeight42px";
import ButtonHeight50px from "../../commons/buttons/ButtonHeight50px";
import { useState } from "react";
import ButtonHeight42px from "../../commons/buttons/ButtonHeight42px";

interface IFinding {
  isEmail: boolean;
}

export default function AccountRecovery(props: IFinding): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  const onClickAuthPassword = (): void => {
    setIsOpen(true);
  };

  return (
    <>
      <S.Wrapper>
        <S.Title>{props?.isEmail ? "이메일 " : "비밀번호 "}찾기</S.Title>
        <S.SubTitle>
          가입 시 등록했던 휴대폰 번호를 입력해주세요.
          <br />
          휴대폰 번호로 인증번호를 보내드립니다.
        </S.SubTitle>
        <S.IndexTitle>휴대폰 번호</S.IndexTitle>
        <InputHeight42px placeholder="휴대폰 번호" />
        {isOpen ? (
          <>
            <S.AuthWrapper>
              <S.IndexTitle>인증번호 입력</S.IndexTitle>
              <S.AuthBody>
                <InputHeight42px placeholder="인증번호 입력" />
                <ButtonHeight42px title="인증하기" />
              </S.AuthBody>
            </S.AuthWrapper>
          </>
        ) : (
          <>
            <ButtonHeight50px title="전송하기" onClick={onClickAuthPassword} />
          </>
        )}
        <S.Footer>
          {props.isEmail ? "이메일이 " : "비밀번호가 "} 생각나셨나요?
          <S.Login href="/login">로그인</S.Login>
        </S.Footer>
      </S.Wrapper>
    </>
  );
}
