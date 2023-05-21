import MainCarousel from "../../commons/parts/main/carousel";
import PreviewContents from "../../commons/parts/main/previewContents";
import * as S from "./main.styles";

export default function MainPresenter() {
  return (
    <S.Wrapper>
      <S.CarouselBox>
        <MainCarousel />
      </S.CarouselBox>
      <S.Body>
        <S.ShowBoards>
          <S.Theme>✨숨은 보석같은 게시글들</S.Theme>
          <S.PreviewBox>
            {new Array(4).fill(1).map((_, idx) => (
              <S.Preview key={idx}>
                <S.PreviewImg src="/IU.jpeg" />
                <PreviewContents />
              </S.Preview>
            ))}
          </S.PreviewBox>
        </S.ShowBoards>
        <S.AdBar>
          <img src="/IUgame.png" style={{ width: "100%", height: "160px" }} />
        </S.AdBar>
        <S.RecentBoards>
          <S.Theme>✨최신 게시글</S.Theme>
          <S.PreviewBox>
            {new Array(8).fill(1).map((_, idx) => (
              <S.Preview key={idx}>
                <S.PreviewImg src="/IU.jpeg" />
                <PreviewContents />
              </S.Preview>
            ))}
          </S.PreviewBox>
        </S.RecentBoards>
        <S.JobOfferBox>
          <S.Theme>지금 구하고 있는 구인글이에요</S.Theme>
          <S.PreviewBox>
            {new Array(4).fill(1).map((_, idx) => (
              <S.OfferPreview key={idx}>
                <PreviewContents />
              </S.OfferPreview>
            ))}
          </S.PreviewBox>
        </S.JobOfferBox>
        <S.IntroBar>
          <img src="/IUgame.png" style={{ width: "100%", height: "120px" }} />
        </S.IntroBar>
        <S.NewUserBoards>
          <S.Theme>🌱신규 @@님의 첫 게시글</S.Theme>
          <S.PreviewBox>
            {new Array(3).fill(1).map((_, idx) => (
              <S.NewPreview key={idx}>
                <S.NewPreviewImg src="/IU.jpeg" />
                <PreviewContents />
              </S.NewPreview>
            ))}
          </S.PreviewBox>
        </S.NewUserBoards>
      </S.Body>
    </S.Wrapper>
  );
}
