import * as S from "./index.styles";
import Tag from "../../../tag/category";
import { useMoveToPage } from "../../../hooks/custom/useMoveToPage";
import { fallback } from "../../../../../commons/libraries/fallback";

interface IProps {
  el: {
    product_product_category: string;
    product_product_sub_category: string;
    product_product_title: string;
    product_product_workDay: string;
    u_user_profileImage?: string | null;
    u_user_nickname: string;
    product_product_id: string;
  };
}

export default function BarBox(props: IProps) {
  const { onClickMoveToPage } = useMoveToPage();

  return (
    <S.Wrapper
      onClick={onClickMoveToPage(`/seek/${props.el.product_product_id}`)}
    >
      <S.CategoryBox>
        <S.Title>{props.el?.product_product_title}</S.Title>
      </S.CategoryBox>
      <S.InfoBox>
        <S.TagBox>
          <Tag data={props.el?.product_product_category} />
          <Tag data={props.el?.product_product_sub_category} />
        </S.TagBox>
        <S.UserInfo>
          <S.Avatar
            onError={e => {
              const target = e.target as HTMLImageElement;
              target.src = fallback;
            }}
            src={props.el?.u_user_profileImage ?? fallback}
          />
          <S.NickName>{props.el?.u_user_nickname}</S.NickName>
        </S.UserInfo>
      </S.InfoBox>
    </S.Wrapper>
  );
}
