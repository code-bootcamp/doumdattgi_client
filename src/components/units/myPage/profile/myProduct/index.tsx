import * as S from "../product.styles";
import { CategoryObj, Obj } from "../../../../../commons/libraries/translate";
import { fallback } from "../../../../../commons/libraries/fallback";
import Tag from "../../../../commons/tag/category";
import {
  IFetchMyPickOutput,
  IProduct,
  IQuery
} from "../../../../../commons/types/generated/types";
import { useMoveToPage } from "../../../../commons/hooks/custom/useMoveToPage";
import { useMyProduct } from "../../../../commons/hooks/custom/useMyProduct";
import InfiniteScroll from "react-infinite-scroller";

interface IMyProductProps {
  data: IProduct[] | undefined;
  isSeek: boolean;
}

export default function ProfileMyProduct(props: IMyProductProps): JSX.Element {
  const { onClickMoveToPage } = useMoveToPage();
  const { sellOnLoadMore, seekOnLoadMore } = useMyProduct();

  return (
    <S.Wrapper>
      {props.data === undefined || props.data[0] === undefined ? (
        <S.WrapperRight>
          <S.None>아직 게시물이 없습니당</S.None>
        </S.WrapperRight>
      ) : (
        <S.WrapperRight>
          <InfiniteScroll
            loadMore={props.isSeek ? seekOnLoadMore : sellOnLoadMore}
            pageStart={0}
            hasMore={true}
            useWindow={false}
          >
            {props.data?.map(el => (
              <S.RightListBox onClick={onClickMoveToPage(`/${el?.product_id}`)} key={el?.product_id}>
                <S.ListImage
                  onError={e => {
                    const target = e.target as HTMLImageElement;
                    target.src = fallback;
                  }}
                  src={el.images[0].image_url}
                />
                <S.RightDetailBox>
                  <S.ListCategory>
                    {CategoryObj[el.product_category]}
                  </S.ListCategory>
                  <S.ListTitle>{el?.product_title}</S.ListTitle>
                  <Tag data={el.product_workDay} />
                  <S.DivideLine />
                  <S.Remarks>{el.product_summary}</S.Remarks>
                </S.RightDetailBox>
              </S.RightListBox>
            ))}
          </InfiniteScroll>
        </S.WrapperRight>
      )}
    </S.Wrapper>
  );
}
