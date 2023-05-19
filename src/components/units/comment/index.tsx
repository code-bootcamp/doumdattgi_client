import InputHeight50px from "../../commons/inputs/InputHeight50px";
import * as S from "./styles";

export default function Comment(): JSX.Element {
  return (
    <>
      <S.Wrapper>
        {/* <S.WrapperHeader>
          <S.Close src="/close.png" />
        </S.WrapperHeader> */}
        <S.WrapperBody>
          <S.ReceivingBox>
            <S.Date>23.05.10</S.Date>
            <S.ChatBox>팬이에요</S.ChatBox>
          </S.ReceivingBox>
          <S.SendingBox>
            <S.SenderIcon src="/IU.jpeg" />
            <div>
              <S.Sender>아이유</S.Sender>
              <S.ChatBox>안녕</S.ChatBox>
            </div>
            <S.Date>23.05.10</S.Date>
          </S.SendingBox>
        </S.WrapperBody>
        <S.WrapperFooter>
          <InputHeight50px placeholder="메세지를 입력하세요" />
          <S.SendingBtn>전송</S.SendingBtn>
        </S.WrapperFooter>
      </S.Wrapper>
    </>
  );
}
