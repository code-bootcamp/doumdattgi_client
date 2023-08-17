import * as S from "./styles";
import { CategoryObj, Obj } from "../../../../../commons/libraries/translate";
import { fallback } from "../../../../../commons/libraries/fallback";
import Tag from "../../../../commons/tag/category";

export default function ProfileMyProduct(props): JSX.Element {
  
  // 무한 스크롤 로직
  const onLoadMore = () => {
    // if (myProduct === undefined) return;

    // fetchMore({
    //   variables: {
    //     page: Math.ceil((myProduct?.fetchMyProduct.length ?? 5) / 5) + 1
    //   },
    //   updateQuery: (prev, { fetchMoreResult }) => {
    //     if (fetchMoreResult.fetchMyProduct === undefined) {
    //       return { fetchMyProduct: [...prev.fetchMyProduct] };
    //     }

    //     return {
    //       fetchMyProduct: [
    //         ...prev.fetchMyProduct,
    //         ...fetchMoreResult.fetchMyProduct
    //       ]
    //     };
    //   }
    // });
  };
  console.log(props.data)

  return (
    <S.Wrapper>
      <S.WrapperRight
        loadMore={props.onLoadMore}
        pageStart={1}
        hasMore={true}
        useWindow={false}
      >
        {props.data === undefined || props.data[0] === undefined ? (
          <S.None>아직 게시물이 없습니당</S.None>
        ) : (
          <>
            {props.data?.map(el => (
              <S.RightListBox onClick={props.onClickMoveToPage(`/${el.product_id}`)}>
                <S.ListImage
                  onError={e => {
                    const target = e.target as HTMLImageElement;
                    target.src = fallback;
                  }}
                  src={el?.i_image_url ?? el?.images[0].image_url}
                />
                <S.RightDetailBox>
                  <S.ListCategory>
                    {CategoryObj[el.product_category ?? el.p_product_category]}
                  </S.ListCategory>
                  <S.ListTitle>{el.product_title ?? el.p_product_title}</S.ListTitle>
                  <Tag data={el.product_workDay ?? el.p_product_workDay} />
                  <S.DivideLine />
                  <S.Remarks>{el.product_summary ?? el.p_product_summary}</S.Remarks>
                </S.RightDetailBox>
              </S.RightListBox>
            ))}
          </>
        )}
      </S.WrapperRight>
    </S.Wrapper>
  );
}
