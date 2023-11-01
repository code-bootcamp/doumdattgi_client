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
  data: IFetchMyPickOutput[] | undefined;
}

export default function ProfileMyPick(props: IMyProductProps): JSX.Element {
  const { onClickMoveToPage } = useMoveToPage();
  const { pickOnLoadMore } = useMyProduct();

  return (
    <S.Wrapper>
      {props.data === undefined || props.data[0] === undefined ? (
        <S.WrapperRight>
          <S.None>아직 게시물이 없습니당</S.None>
        </S.WrapperRight>
      ) : (
        <S.WrapperRight>
          <>
            {props.data.map(el => (
              <S.RightListBox
                onClick={onClickMoveToPage(`/${el?.p_product_id}`)}
                isSell={!false}
              >
                <S.ListImage
                  onError={e => {
                    const target = e.target as HTMLImageElement;
                    target.src = fallback;
                  }}
                  src={el.i_image_url}
                />
                <S.RightDetailBox isSell={el?.p_product_sellOrBuy}>
                  <S.ListTitle>{el?.p_product_title}</S.ListTitle>
                  <S.TagBox className="pick">
                    <Tag data={CategoryObj[el.p_product_category]} />
                  </S.TagBox>
                  <S.DivideLine isSell={el?.p_product_sellOrBuy} />
                  <S.Remarks>{el.p_product_summary}</S.Remarks>
                </S.RightDetailBox>
              </S.RightListBox>
            ))}
          </>
        </S.WrapperRight>
      )}
    </S.Wrapper>
  );
}
