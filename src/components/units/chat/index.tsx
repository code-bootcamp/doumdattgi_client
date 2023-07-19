import * as S from "./index.styles";

export default function Chatting() {
  return (
    <>
      <S.Wrapper>
        <S.ListBox>
          <S.ListTitle>메세지 목록</S.ListTitle>
          <S.MessageList>
            {new Array(8).fill(1).map((el, idx) => (
              <S.List key={idx}>
                <S.ProfileImg src="/Ellipse 23.png" />
                <S.InfoBox>
                  <S.NameAndDate>
                    <S.NickName>상대방 닉네임</S.NickName>
                    <S.Date>23.07.01</S.Date>
                  </S.NameAndDate>
                  <S.Content>
                    안녕하세요,안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하
                  </S.Content>
                </S.InfoBox>
              </S.List>
            ))}
          </S.MessageList>
        </S.ListBox>
        <S.MessageContent>
          <S.MsgTop>
            <S.ProfileImg src="/Ellipse 23.png" />
            <S.MsgInfo>상대방닉네임 님과의 메시지</S.MsgInfo>
          </S.MsgTop>
          <S.MsgMiddle></S.MsgMiddle>
          <S.MsgBottom>
            <S.TextArea placeholder="메세지를 입력하세요" />
            <S.SendBtn>전송</S.SendBtn>
          </S.MsgBottom>
        </S.MessageContent>
        <S.RecipientInfo>
          <S.RecipientBox>
            <S.RecipientImg src="/Ellipse 23.png" />
            <S.RecipientName>상대방 닉네임</S.RecipientName>
          </S.RecipientBox>
          <S.ApplyBtn>
            의뢰서 요청하기 <span>{">"}</span>
          </S.ApplyBtn>
          <S.CancelChatBtn>대화방 종료하기</S.CancelChatBtn>
        </S.RecipientInfo>
      </S.Wrapper>
    </>
  );
}
