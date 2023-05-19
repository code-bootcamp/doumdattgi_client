import * as S from "./styles";
import MainCarousel from "../../commons/parts/main/carousel/index";

export default function CategoryList(): JSX.Element {
  return (
    <S.Wrapper>
      <S.WrapperLeft>
        디자인
        <S.DivideLine />
        <S.Ad />
        <S.LeftList>리스트 목록</S.LeftList>
      </S.WrapperLeft>
      <S.WrapperRight>
        <div>홈 {`>`} 디자인</div>
        <S.RightHeader>
          <div>4개의 서비스</div>
          <div>최신순</div>
        </S.RightHeader>
        <S.ContentsBox>
          {new Array(4).fill(1).map(el => (
            <S.Contents>
              <S.ImageBox src="/qqq.jpeg" />
              <S.Body>
                <S.BodyBox>
                  <S.BodyCategory>디자인</S.BodyCategory>
                  <S.Flag src="/flag.png" />
                </S.BodyBox>
                <S.BodyTitle>
                  제목제목제목제목제목제목제목제목제목제목제목제목제목
                </S.BodyTitle>
                <S.BodyBox>
                  <div>
                    <S.WorkHour>#협의가능</S.WorkHour>
                  </div>
                  <S.BodyBox>
                    <S.UserIcon src="/qqq.jpeg" />
                    <S.UserName>우뎌디</S.UserName>
                  </S.BodyBox>
                </S.BodyBox>
              </S.Body>
            </S.Contents>
          ))}
        </S.ContentsBox>
      </S.WrapperRight>
    </S.Wrapper>
  );
}
