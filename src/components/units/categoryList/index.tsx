import * as S from "./styles";
import { useQueryFetchCategoryProduct } from "../../commons/hooks/queries/useQueryFetchCategoryProduct";
import InfiniteScroll from "react-infinite-scroller";
import { useRouter } from "next/router";
import { CategoryObj, Obj } from "../../../commons/libraries/translate";
import { useMoveToPage } from "../../commons/hooks/custom/useMoveToPage";

export default function CategoryList(): JSX.Element {
  const router = useRouter();
  const { onClickMoveToPage } = useMoveToPage();

  // router 들어가는 값 타입지정 (타입이 배열일 가능성)
  const category = Array.isArray(router.query.data)
    ? router.query.data[0]
    : router.query.data || "";

  const { data, fetchMore } = useQueryFetchCategoryProduct(category);

  // 조회용 카테고리 Key값
  const CategoryTitle = data?.fetchCategoryProduct[0]?.product_product_category;

  // 무한 스크롤 로직
  const onLoadMore = () => {
    if (data === undefined) return;

    fetchMore({
      variables: {
        page: Math.ceil((data?.fetchCategoryProduct.length ?? 10) / 10) + 1
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult.fetchCategoryProduct === undefined) {
          return {
            fetchCategoryProduct: [...prev.fetchCategoryProduct]
          };
        }

        return {
          fetchCategoryProduct: [
            ...prev.fetchCategoryProduct,
            ...fetchMoreResult.fetchCategoryProduct
          ]
        };
      }
    });
  };

  return (
    <S.Wrapper>
      <S.WrapperLeft>
        디자인
        <S.DivideLine />
        <S.Ad />
        <S.LeftList>리스트 목록</S.LeftList>
      </S.WrapperLeft>
      <S.WrapperRight>
        <S.CategoryTag>홈</S.CategoryTag>
        <S.CategoryTag>{`>`}</S.CategoryTag>
        <S.CategoryTag>{CategoryObj[CategoryTitle ?? category]}</S.CategoryTag>
        <S.RightHeader>
          <div>{data?.fetchCategoryProduct.length}개의 서비스</div>
          <div>최신순</div>
        </S.RightHeader>
        <InfiniteScroll loadMore={onLoadMore} pageStart={0} hasMore={true}>
          <S.ContentsBox>
            {data?.fetchCategoryProduct.map(el => (
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
