import * as S from "./recoveryResult.styles";
import InputHeight46px from "../../commons/inputs/InputHeight46px";
import ButtonHeight50px from "../../commons/buttons/ButtonHeight50px";

interface IRecoveryResult {
  isEmail: boolean;
}

export default function RecoveryResult(props: IRecoveryResult): JSX.Element {
  return (
    <S.Wrapper>
      {props.isEmail ? (
        <>
          <S.Title>이메일 찾기</S.Title>
          <S.SubTitle>입력하신 휴대폰 번호에 일치하는 이메일은</S.SubTitle>
          <S.AuthBody>
            <S.Email>abc****@gmail.com</S.Email>
            <S.SubTitle>입니다.</S.SubTitle>
          </S.AuthBody>
          <S.Footer>
            이메일이 생각나셨나요?
            <S.Login href="/login">로그인</S.Login>
          </S.Footer>
        </>
      ) : (
        <>
          <S.Title>비밀번호 재설정</S.Title>
          <S.IndexTitle>새 비밀번호</S.IndexTitle>
          <InputHeight46px placeholder="새 비밀번호" />
          <S.IndexTitle>새 비밀번호 확인</S.IndexTitle>
          <InputHeight46px placeholder="새 비밀번호 확인" />
          <ButtonHeight50px title="비밀번호 재설정하기" />
          <S.Footer>
            이메일이 생각나셨나요?
            <S.Login href="/login">로그인</S.Login>
          </S.Footer>
        </>
      )}
    </S.Wrapper>
  );
}
