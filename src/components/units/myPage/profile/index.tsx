import * as S from "./styles";
import Link from "next/link";

export default function Profile(): JSX.Element {
  return (
    <S.Wrapper>
      <S.WrapperLeft>
        <S.UserBox>
          <S.UserIcon src="/IU.jpeg" />
          <S.UserName>아이유</S.UserName>
          <S.UserIntroduce>저는 아이유 입니당</S.UserIntroduce>
          <S.ProfileEdit>프로필 수정하기</S.ProfileEdit>
        </S.UserBox>
        <S.LeftBody>
          <S.SubTitle>포트폴리오</S.SubTitle>
          <S.PortfolioLink>어쩌구저쩌구.io/@어쩌구</S.PortfolioLink>
          <S.SubTitle>슬롯</S.SubTitle>
          <S.SlotBox>
            <S.Slot>가능</S.Slot>
            <S.Slot>가능</S.Slot>
            <S.Slot>가능</S.Slot>
          </S.SlotBox>
          <S.SubTitle>통계</S.SubTitle>
          <S.Statistics>
            <S.StatisticsBox>
              <S.StatisticsNum>18건</S.StatisticsNum>
              <S.StatisticsTitle>총 작업 수</S.StatisticsTitle>
            </S.StatisticsBox>
            <S.StatisticsBox>
              <S.TierIcon src="/plant 1.png" />
              <S.StatisticsTitle>새싹 주니어</S.StatisticsTitle>
            </S.StatisticsBox>
          </S.Statistics>
        </S.LeftBody>
      </S.WrapperLeft>
      <S.WrapperRight>
        <S.RightTitleBox>
          <S.SubTitle>게시글 목록</S.SubTitle>
          <Link href={"/create"}>
            <S.CreateLink>
              <S.CreateIcon src="/pencil.png" />새 게시글 작성하기
            </S.CreateLink>
          </Link>
        </S.RightTitleBox>
        <S.RightListBox>
          <S.ListImage src="/IU.jpeg" />
          <S.RightDetailBox>
            <S.ListCategory>디자인</S.ListCategory>
            <S.ListTitle>
              제제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목목
            </S.ListTitle>
            <S.ListDetail>#카테고리</S.ListDetail>
            <S.ListDetail>#상세카테고리</S.ListDetail>
            <S.ListDetail>#작업시간</S.ListDetail>
            <S.DivideLine />
            <S.Remarks>
              요약요약요약요약요약요약요약요약요약요약요약요약요약요약요약요약요약요약요약요약요약요약요약요약요약요약요약요약요약요약요약요약요약요약요약요약요약요약요약요약요약요약요약요약요약요약요약요약요약요약요약요약요약요약요약요약요약요약요약요약요약요약요약요약
            </S.Remarks>
          </S.RightDetailBox>
        </S.RightListBox>
      </S.WrapperRight>
    </S.Wrapper>
  );
}
