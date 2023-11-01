import * as S from "./style";
import { fallback } from "../../../../../commons/libraries/fallback";
import { useMoveToPage } from "../../../hooks/custom/useMoveToPage";
import Tag from "../../../tag/category";
import { CategoryObj } from "../../../../../commons/libraries/translate";
import { IProduct } from "../../../../../commons/types/generated/types";

interface IProps {
  data?: IProduct;
}

export default function CardBox(props: IProps) {
  const { onClickMoveToPage } = useMoveToPage();

  return (
    <S.Wrapper isRandom={true}>
      <S.ImageBox>
        <S.Thumbnail
          src={`${props.data?.images[0].image_url}`}
          width={"100%"}
          height={150}
          fallback={fallback}
          preview={false}
          onClick={onClickMoveToPage(`/${props.data?.product_id}`)}
        />
      </S.ImageBox>
      <S.Container>
        <S.CategoryBox>
          <S.UserBox>
            <S.Avatar
              onError={e => {
                const target = e.target as HTMLImageElement;
                target.src = fallback;
              }}
              src={props.data?.user.user_profileImage ?? fallback}
            />
            <S.UserName>{props.data?.user.user_nickname}</S.UserName>
          </S.UserBox>
        </S.CategoryBox>
        <S.TitleBox>
          <S.Title onClick={onClickMoveToPage(`/${props.data?.product_id}`)}>
            {props.data?.product_title}
          </S.Title>
        </S.TitleBox>
        <S.InfoBox>
          <Tag data={CategoryObj[props.data?.product_category ?? ""]} />
          <S.TagBox>
            <Tag data={props.data?.product_sub_category ?? ""} />
          </S.TagBox>
        </S.InfoBox>
      </S.Container>
    </S.Wrapper>
  );
}
