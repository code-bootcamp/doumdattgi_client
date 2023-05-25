import InfiniteScroll from "react-infinite-scroller";
import { useQueryfetchSubCategoryProduct } from "../../../commons/hooks/queries/useQueryFetchSubCategoryProduct";
import SideSubCategory from "../../../commons/parts/list/sideSubcategoryList";
import * as S from "./styles";
import { useMoveToPage } from "../../../commons/hooks/custom/useMoveToPage";
import { CategoryObj, Obj } from "../../../../commons/libraries/translate";
import { useRouter } from "next/router";
import Link from "next/link";

export default function SubCategorys() {
  const router = useRouter();
  const { onClickMoveToPage } = useMoveToPage();

  const BigCategory = Array.isArray(router.query.data)
    ? router.query.data[0]
    : router.query.data || "";

  const Sub = Array.isArray(router.query.sub)
    ? router.query.sub[0]
    : router.query.sub || "";

  const { data, fetchMore } = useQueryfetchSubCategoryProduct(Sub);

  const length = data?.fetchSubCategoryProduct.length;

  const onLoadMore = () => {
    if (data === undefined) return;

    fetchMore({
      variables: {
        page: Math.ceil((data?.fetchSubCategoryProduct?.length ?? 10) / 10) + 1
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult.fetchSubCategoryProduct === undefined) {
          return {
            fetchSubCategoryProduct: [...prev.fetchSubCategoryProduct]
          };
        }

        return {
          fetchSubCategoryProduct: [
            ...prev.fetchSubCategoryProduct,
            ...fetchMoreResult.fetchSubCategoryProduct
          ]
        };
      }
    });
  };

  return (
    <S.Wrapper>
      <SideSubCategory />
      <S.WrapperRight>
        <Link href="/categoryList/all">
          <S.CategoryTag>홈</S.CategoryTag>
        </Link>
        <S.CategoryTag>{`>`}</S.CategoryTag>
        <S.CategoryTag>{CategoryObj[BigCategory]}</S.CategoryTag>
        <S.CategoryTag>{`>`}</S.CategoryTag>
        <S.CategoryTag>{Sub}</S.CategoryTag>
        <S.RightHeader>
          <div>
            {data?.fetchSubCategoryProduct?.length}
            개의 서비스
          </div>
          <div>최신순</div>
        </S.RightHeader>
        <InfiniteScroll loadMore={onLoadMore} pageStart={0} hasMore={true}>
          <S.ContentsBox>
            {data?.fetchSubCategoryProduct.map(el => (
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
