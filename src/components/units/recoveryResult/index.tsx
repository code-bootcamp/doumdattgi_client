import * as S from "./recoveryResult.styles";
import InputHeight46px from "../../commons/inputs/InputHeight46px";
import ButtonHeight50px from "../../commons/buttons/ButtonHeight50px";
import { useResetAccount } from "../../commons/hooks/custom/useResetAccount";
import { useRecoilState } from "recoil";
import { userEmailState } from "../../../commons/stores";

interface IRecoveryResult {
  isEmail: boolean;
  isEditPassword?: boolean;
}

export default function RecoveryResult(props: IRecoveryResult): JSX.Element {
  const {
    register,
    handleSubmit,
    formState,
    onClickResetPassword,
    onClickEditPassword
  } = useResetAccount(props.isEditPassword ?? false);
  const [userEmail] = useRecoilState(userEmailState);

  const mask = (email: string) => {
    var atIndex = email.indexOf("@"); // '@' 기호의 위치 찾기
    if (atIndex >= 2) {
      // '@' 기호 앞에 최소한 2개의 문자가 있어야 마스킹 가능
      var maskedEmail =
        email.substring(0, 2) + "****" + email.substring(atIndex);
      return maskedEmail;
    }
    return email; // 마스킹할 수 없는 경우 원래 이메일 반환
  };

  const result = mask(userEmail);

  return (
    <S.Wrapper>
      {props.isEmail ? (
        <>
          <S.Title>이메일 찾기</S.Title>
          <S.SubTitle>입력하신 휴대폰 번호에 일치하는 이메일은</S.SubTitle>
          <S.AuthBody>
            <S.Email>{userEmail}</S.Email>
            <S.SubTitle>입니다.</S.SubTitle>
          </S.AuthBody>
          <S.Footer>
            이메일이 생각나셨나요?
            <S.Login href="/login">로그인</S.Login>
          </S.Footer>
        </>
      ) : (
        <form
          onSubmit={
            props.isEditPassword
              ? handleSubmit(onClickEditPassword)
              : handleSubmit(onClickResetPassword)
          }
        >
          <S.Title>비밀번호 재설정</S.Title>
          {props.isEditPassword && (
            <>
              <S.IndexTitle>기존 비밀번호</S.IndexTitle>
              <InputHeight46px
                placeholder="기존 비밀번호"
                register={register("prevPassword")}
              />
            </>
          )}
          <S.IndexTitle>새 비밀번호</S.IndexTitle>
          <InputHeight46px
            placeholder="새 비밀번호"
            register={register("password")}
          />
          <S.IndexTitle>새 비밀번호 확인</S.IndexTitle>
          <InputHeight46px
            placeholder="새 비밀번호 확인"
            register={register("passwordCheck")}
          />
          <ButtonHeight50px title="비밀번호 재설정하기" />
          <S.Footer>
            이메일이 생각나셨나요?
            <S.Login href="/login">로그인</S.Login>
          </S.Footer>
        </form>
      )}
    </S.Wrapper>
  );
}
