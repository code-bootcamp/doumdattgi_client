import * as S from "./index.styles";
import { useQueryfetchSearchProduct } from "../../commons/hooks/queries/useQueryFetchSearchProduct";
import InfiniteScroll from "react-infinite-scroller";
import { useMoveToPage } from "../../commons/hooks/custom/useMoveToPage";
import { CategoryObj, Obj } from "../../../commons/libraries/translate";
import { useRouter } from "next/router";

export default function SearchedPage() {
  const router = useRouter();

  const keyWord = Array.isArray(router.query.word)
    ? router.query.word[0]
    : router.query.word || "";

  const { data, fetchMore } = useQueryfetchSearchProduct(keyWord);
  const { onClickMoveToPage } = useMoveToPage();

  const onLoadMore = () => {
    if (data === undefined) return;

    fetchMore({
      variables: {
        page: Math.ceil((data?.fetchSearchProduct?.length ?? 10) / 10) + 1
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult.fetchSearchProduct === undefined) {
          return {
            fetchSearchProduct: [...prev.fetchSearchProduct]
          };
        }

        return {
          fetchSearchProduct: [
            ...prev.fetchSearchProduct,
            ...fetchMoreResult.fetchSearchProduct
          ]
        };
      }
    });
  };

  return (
    <S.Wrapper>
      <S.WrapperRight>
        <S.CategoryTag>{`${keyWord} 검색결과`}</S.CategoryTag>
        <S.RightHeader>
          <div>
            {data?.fetchSearchProduct?.length}
            개의 서비스
          </div>
          <div>최신순</div>
        </S.RightHeader>
        <InfiniteScroll loadMore={onLoadMore} pageStart={0} hasMore={true}>
          <S.ContentsBox>
            {data?.fetchSearchProduct.map(el => (
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
