import Link from "next/link";
import { useQueryFetchNewbieProduct } from "../../commons/hooks/queries/useQueryFetchNewbieProduct";
import { useQueryFetchProducts } from "../../commons/hooks/queries/useQueryFetchProducts";
import { useQueryFetchRandomProduct } from "../../commons/hooks/queries/useQueryFetchRandomProduct";
import MainCarousel from "../../commons/parts/main/carousel";
import PreviewContents from "../../commons/parts/main/previewContents";
import * as S from "./main.styles";

export default function MainPresenter() {
  const { data } = useQueryFetchRandomProduct();
  const { data: Products } = useQueryFetchProducts(1, 8);
  const { data: Newbie } = useQueryFetchNewbieProduct();

  return (
    <S.Wrapper>
      <S.CarouselBox>
        <MainCarousel />
      </S.CarouselBox>
      <S.Body>
        <S.ShowBoards>
          <S.Theme>✨숨은 보석같은 게시글들</S.Theme>

          <S.PreviewBox>
            {data?.fetchRandomProduct.slice(0, 4).map(el => (
              <Link
                key={el.product_product_id}
                href={`/${el.product_product_id}`}
              >
                <a>
                  <S.Preview>
                    <S.PreviewImg
                      src={el.i_image_url}
                      onError={e => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/noimage.png";
                      }}
                    />
                    <PreviewContents el={el} />
                  </S.Preview>
                </a>
              </Link>
            ))}
          </S.PreviewBox>
        </S.ShowBoards>
        <S.AdBar>
          <img src="/IUgame.png" style={{ width: "100%", height: "160px" }} />
        </S.AdBar>
        <S.RecentBoards>
          <S.Theme>✨최신 게시글</S.Theme>
          <S.PreviewBox>
            {Products?.fetchProducts.map(el => (
              <Link
                key={el.product_product_id}
                href={`/${el.product_product_id}`}
              >
                <a>
                  <S.Preview>
                    <S.PreviewImg
                      src={el.i_image_url}
                      onError={e => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/noimage.png";
                      }}
                    />
                    <PreviewContents el={el} />
                  </S.Preview>
                </a>
              </Link>
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
            {Newbie?.fetchNewbieProduct.map(el => (
              <Link
                key={el.product_product_id}
                href={`/${el.product_product_id}`}
              >
                <a>
                  <S.NewPreview>
                    <S.NewPreviewImg
                      src={el.i_image_url}
                      onError={e => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/noimage.png";
                      }}
                    />
                    <PreviewContents el={el} />
                  </S.NewPreview>
                </a>
              </Link>
            ))}
          </S.PreviewBox>
        </S.NewUserBoards>
      </S.Body>
    </S.Wrapper>
  );
}
