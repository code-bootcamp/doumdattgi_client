import { Avatar, Image } from "antd";
import * as S from "./style";
import { fallback } from "../../../../../commons/libraries/fallback";
import { useMoveToPage } from "../../../hooks/custom/useMoveToPage";
import Tag from "../../../tag/category";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { CategoryObj } from "../../../../../commons/libraries/translate";
import { IFetchProductOutput } from "../../../../../commons/types/generated/types";

interface IProps {
  data: IFetchProductOutput;
}

export default function CardBox(props: IProps) {
  const { onClickMoveToPage } = useMoveToPage();
  return (
    <S.Wrapper
      onClick={onClickMoveToPage(`/${props.data?.product_product_id}`)}
    >
      <Image
        src={`${props.data?.i_image_url}`}
        width={"100%"}
        height={250}
        fallback={fallback}
        preview={false}
      />
      <S.Container>
        <S.CategoryBox>
          <S.Category>
            {CategoryObj[props.data?.product_product_category ?? ""]}
          </S.Category>
          <S.Icon icon={faBookmark} className="bookmark" />
        </S.CategoryBox>
        <S.TitleBox>
          <S.Title>{props.data?.product_product_title}</S.Title>
        </S.TitleBox>
        <S.InfoBox>
          <Tag data={props.data?.product_product_category ?? ""} />
          <S.UserBox>
            <S.Avatar
              onError={e => {
                const target = e.target as HTMLImageElement;
                target.src = fallback;
              }}
              src={props.data?.u_user_profileImage ?? fallback}
            />
            <S.UserName>{props.data?.u_user_nickname}</S.UserName>
          </S.UserBox>
        </S.InfoBox>
      </S.Container>
    </S.Wrapper>
  );
}
