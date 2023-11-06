import * as S from "./style";
import { fallback } from "../../../../../commons/libraries/fallback";
import { useMoveToPage } from "../../../hooks/custom/useMoveToPage";
import Tag from "../../../tag/category";
import {
  IFetchLikeCategoryOutput,
  IFetchProductOutput,
  IFetchSearchProductOutput,
  IFetchSubCategoryOutput
} from "../../../../../commons/types/generated/types";

interface IProps {
  data?:
    | IFetchProductOutput
    | IFetchSubCategoryOutput
    | IFetchSearchProductOutput;
  data2?: IFetchLikeCategoryOutput | IFetchSearchProductOutput;
  isLike?: boolean;
  isRandom?: boolean;
  isNewbie?: boolean;
}

export default function CardBox(props: IProps) {
  const { onClickMoveToPage } = useMoveToPage();

  return (
    <S.Wrapper isRandom={props.isRandom} isNewbie={props.isNewbie}>
      <S.ImageBox>
        <S.Thumbnail
          src={`${props.data?.i_image_url ?? props.data2?.image_url}`}
          width={"100%"}
          fallback={fallback}
          preview={false}
          onClick={onClickMoveToPage(
            `/${
              props.data?.product_product_id ?? props.data2?.product_product_id
            }`
          )}
        />
      </S.ImageBox>
      <S.Container>
        <S.TopSection>
          <S.CategoryBox>
            <S.UserBox>
              <S.Avatar
                onError={e => {
                  const target = e.target as HTMLImageElement;
                  target.src = fallback;
                }}
                src={
                  props.data?.u_user_profileImage ??
                  props.data2?.u_user_profileImage ??
                  fallback
                }
              />
              <S.UserName>
                {props.data?.u_user_nickname ?? props.data2?.u_user_nickname}
              </S.UserName>
            </S.UserBox>
          </S.CategoryBox>
          <S.TitleBox>
            <S.Title
              onClick={onClickMoveToPage(
                `/${
                  props.data?.product_product_id ??
                  props.data2?.product_product_id
                }`
              )}
            >
              {props.data?.product_product_title ??
                props.data2?.product_product_title}
            </S.Title>
          </S.TitleBox>
        </S.TopSection>
        <S.InfoBox>
          <S.TagBox>
            <Tag
              data={
                props.data?.product_product_category ??
                props.data2?.product_product_category ??
                ""
              }
            />
            <Tag
              data={
                props.data?.product_product_sub_category ??
                props.data2?.product_product_sub_category ??
                ""
              }
            />
          </S.TagBox>
        </S.InfoBox>
      </S.Container>
    </S.Wrapper>
  );
}
