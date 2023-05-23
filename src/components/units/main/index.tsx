import { useQueryFetchNewbieProduct } from "../../commons/hooks/queries/useQueryFetchNewbieProduct";
import { useQueryFetchProducts } from "../../commons/hooks/queries/useQueryFetchProducts";
import { useQueryFetchRandomProduct } from "../../commons/hooks/queries/useQueryFetchRandomProduct";
import MainCarousel from "../../commons/parts/main/carousel";
import PreviewContents from "../../commons/parts/main/previewContents";
import * as S from "./main.styles";
import { useMoveToPage } from "../../commons/hooks/custom/useMoveToPage";
import { useQueryFetchSellProduct } from "../../commons/hooks/queries/useQueryFetchSellProduct";

export default function MainPresenter() {
  const { data } = useQueryFetchRandomProduct();
  const { data: Products } = useQueryFetchProducts();
  const { data: Newbie } = useQueryFetchNewbieProduct();
  const { data: Sellers } = useQueryFetchSellProduct();

  const { onClickMoveToPage } = useMoveToPage();

  return (
    <S.Wrapper>
      <S.CarouselBox>
        <MainCarousel />
      </S.CarouselBox>
      <S.Body>
        <S.ShowBoards>
          <S.Theme>✨숨은 보석같은 게시글들</S.Theme>

          <S.PreviewBox>
            {data?.fetchRandomProduct.map(el => (
              <S.Preview
                onClick={onClickMoveToPage(`/${el.product_product_id}`)}
                key={el.product_product_id}
              >
                <S.PreviewImg
                  src={el.i_image_url}
                  onError={e => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/noimage.png";
                  }}
                />
                <PreviewContents el={el} />
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
            {Products?.fetchAllProducts.map(el => (
              <S.Preview
                onClick={onClickMoveToPage(`/${el.product_product_id}`)}
                key={el.product_product_id}
              >
                <S.PreviewImg
                  src={el.i_image_url}
                  onError={e => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/noimage.png";
                  }}
                />
                <PreviewContents el={el} />
              </S.Preview>
            ))}
          </S.PreviewBox>
        </S.RecentBoards>
        <S.JobOfferBox>
          <S.Theme>지금 구하고 있는 구인글이에요</S.Theme>
          <S.PreviewBox>
            {Sellers?.fetchSellProduct.map(el => (
              <S.OfferPreview key={el.product_product_id}>
                <PreviewContents el={el} />
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
            {Newbie?.fetchNewbieProduct.map(el => (
              <S.NewPreview
                onClick={onClickMoveToPage(`/${el.product_product_id}`)}
                key={el.product_product_id}
              >
                <S.NewPreviewImg
                  src={el.i_image_url}
                  onError={e => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/noimage.png";
                  }}
                />
                <PreviewContents el={el} />
              </S.NewPreview>
            ))}
          </S.PreviewBox>
        </S.NewUserBoards>
      </S.Body>
    </S.Wrapper>
  );
}
