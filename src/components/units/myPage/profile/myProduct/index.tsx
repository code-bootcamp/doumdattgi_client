import * as S from "./styles";
import { CategoryObj, Obj } from "../../../../../commons/libraries/translate";
import { fallback } from "../../../../../commons/libraries/fallback";
import Tag from "../../../../commons/tag/category";
import {
  IFetchMyPickOutput,
  IProduct
} from "../../../../../commons/types/generated/types";
import { useMoveToPage } from "../../../../commons/hooks/custom/useMoveToPage";

interface IMyProductProps {
  data: IProduct[] | IFetchMyPickOutput[] | undefined;
  onLoadMore: (page: number) => void;
}

export default function ProfileMyProduct(props: IMyProductProps): JSX.Element {
  const { onClickMoveToPage } = useMoveToPage();

  // 무한 스크롤 로직
  console.log(props.data);

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
            {props.data?.map(el => {
              const productId =
                "product_id" in el ? el.product_id : el.p_product_id;
              const imageUrl =
                "i_image_url" in el ? el.i_image_url : el.images[0].image_url;
              const productCategory =
                "product_category" in el
                  ? el.product_category
                  : el.p_product_category;
              const productTitle =
                "product_title" in el ? el.product_title : el.p_product_title;
              const productWorkDay =
                "product_workDay" in el
                  ? el.product_workDay
                  : el.p_product_workDay;
              const productSummary =
                "product_summary" in el
                  ? el.product_summary
                  : el.p_product_summary;
              const moveToSeek =
                "product_sellOrBuy" in el
                  ? el.product_sellOrBuy
                    ? `/${productId}`
                    : `/seek/${productId}`
                  : `/${productId}`;
              return (
                <S.RightListBox onClick={onClickMoveToPage(moveToSeek)}>
                  <S.ListImage
                    onError={e => {
                      const target = e.target as HTMLImageElement;
                      target.src = fallback;
                    }}
                    src={imageUrl}
                  />
                  <S.RightDetailBox>
                    <S.ListCategory>
                      {CategoryObj[productCategory]}
                    </S.ListCategory>
                    <S.ListTitle>{productTitle}</S.ListTitle>
                    <Tag data={productWorkDay} />
                    <S.DivideLine />
                    <S.Remarks>{productSummary}</S.Remarks>
                  </S.RightDetailBox>
                </S.RightListBox>
              );
            })}
          </>
        )}
      </S.WrapperRight>
    </S.Wrapper>
  );
}
