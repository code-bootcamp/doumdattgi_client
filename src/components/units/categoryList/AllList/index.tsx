import { useRouter } from "next/router";
import { useMoveToPage } from "../../../commons/hooks/custom/useMoveToPage";
import * as S from "./styles";
import { CategoryObj, Obj } from "../../../../commons/libraries/translate";
import InfiniteScroll from "react-infinite-scroller";
import { useQueryFetchAllProducts } from "../../../commons/hooks/queries/useQueryFetchAllProducts";

export default function AllList() {
  const router = useRouter();

  const { data, fetchMore } = useQueryFetchAllProducts();
  const { onClickMoveToPage } = useMoveToPage();

  // 무한 스크롤 로직
  const onLoadMore = () => {
    if (data === undefined) return;

    fetchMore({
      variables: {
        page: Math.ceil((data?.fetchProducts?.length ?? 10) / 10) + 1
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult.fetchProducts === undefined) {
          return {
            fetchProducts: [...prev.fetchProducts]
          };
        }

        return {
          fetchProducts: [
            ...prev.fetchProducts,
            ...fetchMoreResult.fetchProducts
          ]
        };
      }
    });
  };

  console.log(data);

  const GotoAllList = () => {};

  return (
    <S.Wrapper>
      <S.WrapperLeft>
        디자인
        <S.DivideLine />
        <S.Ad />
        <S.LeftList>리스트 목록</S.LeftList>
      </S.WrapperLeft>
      <S.WrapperRight>
        <S.CategoryTag onClick={GotoAllList}>홈</S.CategoryTag>
        <S.RightHeader>
          <div>
            {data?.fetchProducts?.length}
            개의 서비스
          </div>
          <div>최신순</div>
        </S.RightHeader>
        <InfiniteScroll loadMore={onLoadMore} pageStart={0} hasMore={true}>
          <S.ContentsBox>
            {data?.fetchProducts.map(el => (
              <S.Contents
                onClick={onClickMoveToPage(`/${el.product_product_id}`)}
                key={el.product_product_id}
              >
                <S.ImageBox
                  src={el.i_image_url}
                  onError={e => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/noimage.png";
                  }}
                />
                <S.Body>
                  <S.BodyBox>
                    <S.BodyCategory>
                      {CategoryObj[el.product_product_category]}
                    </S.BodyCategory>
                    <S.Flag src="/flag.png" />
                  </S.BodyBox>
                  <S.BodyTitle>{el.product_product_title}</S.BodyTitle>
                  <S.BodyBox>
                    <div>
                      <S.WorkHour>{Obj[el.product_product_workDay]}</S.WorkHour>
                    </div>
                    <S.BodyBox>
                      <S.UserIcon
                        src={String(el.u_user_profileImage)}
                        onError={e => {
                          const target = e.target as HTMLImageElement;
                          target.src = "/Profile.png";
                        }}
                      />
                      <S.UserName>{el.u_user_nickname}</S.UserName>
                    </S.BodyBox>
                  </S.BodyBox>
                </S.Body>
              </S.Contents>
            ))}
          </S.ContentsBox>
        </InfiniteScroll>
      </S.WrapperRight>
    </S.Wrapper>
  );
}
