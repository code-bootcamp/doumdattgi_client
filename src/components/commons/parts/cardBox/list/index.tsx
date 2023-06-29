import { Avatar, Image } from "antd";
import * as S from "./style";
import { fallback } from "../../../../../commons/libraries/fallback";
import { getDate } from "../../../../../commons/libraries/getDate";
import { useMoveToPage } from "../../../hooks/custom/useMoveToPage";
import Tag from "../../../tag";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { CategoryObj } from "../../../../../commons/libraries/translate";
import {
  IFetchLikeCategoryOutput,
  IFetchProductOutput,
  IFetchSubCategoryOutput,
  IQueryFetchSubCategoryProductArgs
} from "../../../../../commons/types/generated/types";

interface IProps {
  data?: IFetchProductOutput | IFetchSubCategoryOutput;
  data2?: IFetchLikeCategoryOutput;
  isLike?: boolean;
}

export default function ListCardBox(props: IProps) {
  const { onClickMoveToPage } = useMoveToPage();

  return (
    <S.Wrapper
      onClick={onClickMoveToPage(
        `/${
          props.isLike
            ? props.data2?.product_product_id
            : props.data?.product_product_id
        }`
      )}
    >
      <Image
        src={`${
          props.isLike ? props.data2?.image_url : props.data?.i_image_url
        }`}
        width={"100%"}
        height={200}
        fallback={fallback}
        preview={false}
      />
      <S.Container>
        <S.CategoryBox>
          <S.Category>
            {props.isLike
              ? CategoryObj[props.data2?.product_product_category ?? ""]
              : CategoryObj[props.data?.product_product_category ?? ""]}
          </S.Category>
          <S.Icon icon={faBookmark} className="bookmark" />
        </S.CategoryBox>
        <S.TitleBox>
          <S.Title>
            {props.isLike
              ? props.data2?.product_product_title
              : props.data?.product_product_title}
          </S.Title>
        </S.TitleBox>
        <S.InfoBox>
          <Tag
            data={
              props.isLike
                ? props.data2?.product_product_workDay ?? ""
                : props.data?.product_product_workDay ?? ""
            }
          />
          <S.UserBox>
            <S.Avatar
              onError={e => {
                const target = e.target as HTMLImageElement;
                target.src = fallback;
              }}
              src={props.data?.u_user_profileImage ?? fallback}
            />
            <S.UserName>
              {props.isLike
                ? props.data2?.u_user_nickname
                : props.data?.u_user_nickname}
            </S.UserName>
          </S.UserBox>
        </S.InfoBox>
      </S.Container>
    </S.Wrapper>
  );
}
