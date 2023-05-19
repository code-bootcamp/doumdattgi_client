import {
  faEllipsisVertical,
  faSeedling
} from "@fortawesome/free-solid-svg-icons";
import Slider from "../../commons/parts/slider";
import * as S from "./styles";
import { faBookmark, faClock } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ButtonHeight50px from "../../commons/buttons/ButtonHeight50px";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Detail() {
  const router = useRouter();
  return (
    <S.Wrapper>
      <S.Container>
        <S.SliderBox>
          <Slider />
        </S.SliderBox>
        <S.DetailWrap>
          <S.DetailBox>
            <S.Category>디자인</S.Category>
            <S.TitleWrap>
              <S.Title>게시글 제목</S.Title>
              <S.IconBox>
                <S.Icon icon={faBookmark} />
                <S.Icon icon={faEllipsisVertical} />
              </S.IconBox>
            </S.TitleWrap>
            <S.TagWrap>
              <S.Tag>디자인</S.Tag>
              <S.Tag>협의가능</S.Tag>
            </S.TagWrap>
            <S.Remarks>
              게시글 요약 게시글 요약 게시글 요약 게시글 요약 게시글 요약 게시글
              요약 게시글 요약 게시글 요약
            </S.Remarks>
          </S.DetailBox>
          <S.DetailBox>
            <S.Button>
              <Link href={`/${router.query.id}/request`}>
                <ButtonHeight50px title="신청하기" />
              </Link>
              <S.SlotBox>
                <S.SlotText>현재 가능 슬롯 3개</S.SlotText>
                <S.SlotBg />
              </S.SlotBox>
            </S.Button>
          </S.DetailBox>
        </S.DetailWrap>
      </S.Container>
      <S.DivideLine />
      <S.Container className="bottom">
        <S.DetailContentsWrap>
          <S.DetailTitle>상세 내용</S.DetailTitle>
          <S.DetailContents>
            안녕하세요! 저희는 소프트웨어 개발을 전문으로 하는 법인 회사입니다.
            고객 중심적인 개발을 추구하며, 최신 기술과 도구를 활용하여 고객의
            요구사항에 부합하는 솔루션을 제공합니다. 웹, 모바일, 데스크탑 등
            다양한 플랫폼에 대응할 수 있는 Full-stack 개발자들이 함께하고
            있으며, 데이터 분석과 보안 시스템 개발 등 다양한 분야에 대한 전문
            지식을 보유하고 있어 고객의 비즈니스 성장에 기여하며 최상의 결과물을
            제공하겠습니다.
          </S.DetailContents>
        </S.DetailContentsWrap>
        <S.DetailUserWrap>
          <S.UserName>유저 닉네임</S.UserName>
          <S.UserAvatar />
          <S.UserContainer>
            <S.UserTimeWrap>
              <S.TimeTitle>
                <S.TimeIcon icon={faClock} />
                <S.TimeText>작업 가능 시간</S.TimeText>
              </S.TimeTitle>
              <S.UserTimeBox>
                <S.UserTimeCategory>주중</S.UserTimeCategory>
                <S.UserTime>9:00 ~ 18:00</S.UserTime>
              </S.UserTimeBox>
            </S.UserTimeWrap>
            <S.UserWorkRateWrap>
              <S.UserWorkRateBox>
                <S.UserWorkRate>15건</S.UserWorkRate>
                <S.UserWorkText>총 작업 수</S.UserWorkText>
              </S.UserWorkRateBox>
              <S.VerticalLine />
              <S.UserWorkRateBox>
                <S.UserLevelIcon src="/plant.png" />
                <S.UserWorkText>새싹 구직자</S.UserWorkText>
              </S.UserWorkRateBox>
            </S.UserWorkRateWrap>
            <S.PortfolioTitleBox>
              <S.PortfolioIcon icon={faSeedling} />
              <S.PortfolioText>포트폴리오</S.PortfolioText>
            </S.PortfolioTitleBox>
            <S.PortfolioLink>어쩌구저쩌구.io/@어쩌구</S.PortfolioLink>
            <S.UserIntroduceTitle>소개</S.UserIntroduceTitle>
            <S.UserIntroduce>
              안녕하세요! 저희는 소프트웨어 개발을 전문으로 하는 법인
              회사입니다. 고객 중심적인 개발을 추구하며, 최신 기술과 도구를
              활용하여 고객의 요구사항에 부합하는 솔루션을 제공합니다. 웹,
              모바일, 데스크탑 등 다양한 플랫폼에 대응할 수 있는 Full-stack
              개발자들이 함께하고 있으며, 데이터 분석과 보안 시스템 개발 등
              다양한 분야에 대한 전문 지식을 보유하고 있어 고객의 비즈니스
              성장에 기여하며 최상의 결과물을 제공하겠습니다.
            </S.UserIntroduce>
          </S.UserContainer>
        </S.DetailUserWrap>
      </S.Container>
      <S.DivideLine className="bottom" />
      <S.Subtitle>이런 게시글은 어떠세요?</S.Subtitle>
      <S.CardBoxWrap></S.CardBoxWrap>
    </S.Wrapper>
  );
}
