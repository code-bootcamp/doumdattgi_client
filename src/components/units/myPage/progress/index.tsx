import * as S from "./progress.styles";

export default function Progress(): JSX.Element {
  return (
    <S.Wrapper>
      <S.PageTitle>신청 진행 내역</S.PageTitle>
      <S.TabBox>
        <S.PageTab>전체</S.PageTab>
        <S.PageTab>대기중</S.PageTab>
        <S.PageTab>진행중</S.PageTab>
        <S.PageTab>종료</S.PageTab>
      </S.TabBox>

      {new Array(5).fill(1).map(el => (
        <S.List>
          <S.ListLeft>
            <S.ListStatus>종료</S.ListStatus>
            <S.ListTitle>작업 의뢰 제목</S.ListTitle>
          </S.ListLeft>
          <S.ListRight>
            <S.ListDate>2023.05.05</S.ListDate>
            <S.UserBox>
              <S.UserIcon src="/Profile.png" />
              <S.UserName>닉네임</S.UserName>
            </S.UserBox>
          </S.ListRight>
        </S.List>
      ))}
    </S.Wrapper>
  );
}
