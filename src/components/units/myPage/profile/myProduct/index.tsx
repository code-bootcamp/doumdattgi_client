import * as S from "./styles";
import Link from "next/link";
import { useQueryFetchMyProduct } from "../../../../commons/hooks/queries/useQueryfetchMyProduct";
import { useMoveToPage } from "../../../../commons/hooks/custom/useMoveToPage/index";

export default function ProfileMyProduct(): JSX.Element {
  const { data: myProduct } = useQueryFetchMyProduct();

  const { onClickMoveToPage } = useMoveToPage();

  return (
    <S.Wrapper>
      <S.WrapperRight>
        {myProduct?.fetchMyProduct === undefined ? (
          <S.None>아직 게시물이 없습니당</S.None>
        ) : (
          <>
            {myProduct?.fetchMyProduct.map(el => (
              <S.RightListBox
                onClick={onClickMoveToPage(`/${el.product_product_id}`)}
              >
                <S.ListImage
                  onError={e => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/noimage.png";
                  }}
                  src={el.i_image_url}
                />
                <S.RightDetailBox>
                  <S.ListCategory>
                    {el.product_product_category === "IT"
                      ? "IT・프로그래밍"
                      : ""}
                    {el.product_product_category === "DESIGN" ? "디자인" : ""}
                    {el.product_product_category === "TRANSLATE"
                      ? "번역・통역"
                      : ""}
                    {el.product_product_category === "VIDEO"
                      ? "영상・방송"
                      : ""}
                    {el.product_product_category === "MARKETING"
                      ? "마케팅"
                      : ""}
                    {el.product_product_category === "DOCUMENT"
                      ? "문서・레포트"
                      : ""}
                  </S.ListCategory>
                  <S.ListTitle>{el.product_product_title}</S.ListTitle>
                  <S.ListDetail>
                    #
                    {el.product_product_workDay === "NEGOTIATION"
                      ? "협의가능"
                      : el.product_product_workDay === "WEEKEND"
                      ? "주말"
                      : "주중"}
                  </S.ListDetail>
                  <S.DivideLine />
                  <S.Remarks>{el.product_product_summary}</S.Remarks>
                </S.RightDetailBox>
              </S.RightListBox>
            ))}
          </>
        )}
      </S.WrapperRight>
    </S.Wrapper>
  );
}
