import * as S from "../product.styles";
import { CategoryObj } from "../../../../../commons/libraries/translate";
import { fallback } from "../../../../../commons/libraries/fallback";
import Tag from "../../../../commons/tag/category";
import { IProduct } from "../../../../../commons/types/generated/types";
import { useMoveToPage } from "../../../../commons/hooks/custom/useMoveToPage";
import StatusTag from "../../../../commons/tag/status";

interface IMyProductProps {
  data: IProduct[] | undefined;
  isSeek: boolean;
}

export default function ProfileMyProduct(props: IMyProductProps): JSX.Element {
  const { onClickMoveToPage } = useMoveToPage();

  return (
    <S.Wrapper>
      {props.data === undefined || props.data[0] === undefined ? (
        <S.WrapperRight>
          <S.None>아직 게시물이 없습니당</S.None>
        </S.WrapperRight>
      ) : (
        <S.WrapperRight>
          {props.data?.map(el => (
            <S.RightListBox key={el?.product_id} isSell={el?.product_sellOrBuy}>
              {el?.product_sellOrBuy && (
                <S.ListImageBox>
                  <S.ListImage
                    onClick={
                      el?.product_sellOrBuy
                        ? onClickMoveToPage(`/${el?.product_id}`)
                        : onClickMoveToPage(`/seek/${el?.product_id}`)
                    }
                    onError={e => {
                      const target = e.target as HTMLImageElement;
                      target.src = fallback;
                    }}
                    src={el.images[0].image_url}
                  />
                </S.ListImageBox>
              )}
              <S.RightDetailBox isSell={el?.product_sellOrBuy}>
                {!el?.product_sellOrBuy && <StatusTag status={true} />}
                <S.ListTitle
                  onClick={
                    el?.product_sellOrBuy
                      ? onClickMoveToPage(`/${el?.product_id}`)
                      : onClickMoveToPage(`/seek/${el?.product_id}`)
                  }
                >
                  {el?.product_title}
                </S.ListTitle>
                <S.TagBox>
                  <Tag data={CategoryObj[el.product_category]} />
                  <Tag data={el.product_sub_category} />
                </S.TagBox>
                <S.DivideLine isSell={el?.product_sellOrBuy} />
                <S.Remarks>{el.product_summary}</S.Remarks>
              </S.RightDetailBox>
            </S.RightListBox>
          ))}
        </S.WrapperRight>
      )}
    </S.Wrapper>
  );
}
