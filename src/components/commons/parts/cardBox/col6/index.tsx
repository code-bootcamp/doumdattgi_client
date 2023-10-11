import * as S from "./style";
import { fallback } from "../../../../../commons/libraries/fallback";
import { useMoveToPage } from "../../../hooks/custom/useMoveToPage";
import Tag from "../../../tag/category";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { CategoryObj } from "../../../../../commons/libraries/translate";
import { IProduct } from "../../../../../commons/types/generated/types";

interface IProps {
  data?: IProduct
}

export default function CardBox(props: IProps) {
  const { onClickMoveToPage } = useMoveToPage();

  return (
    <S.Wrapper>
      <S.ImageBox>
        <S.Thumbnail
          src={`${props.data?.images[0].image_url}`}
          width={"100%"}
          height={180}
          fallback={fallback}
          preview={false}
          onClick={onClickMoveToPage(`/${props.data?.product_id}`)}
        />
      </S.ImageBox>

      <S.Container>
        <S.CategoryBox>
          <S.Category>
            {CategoryObj[props.data?.product_category ?? ""]}
          </S.Category>
          <S.Icon icon={faBookmark} className="bookmark" />
        </S.CategoryBox>
        <S.TitleBox>
          <S.Title
            onClick={onClickMoveToPage(`/${props.data?.product_id}`)}
          >
            {props.data?.product_title}
          </S.Title>
        </S.TitleBox>
        <S.InfoBox>
          <Tag data={props.data?.product_workDay ?? ""} />
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
        </S.InfoBox>
      </S.Container>
    </S.Wrapper>
  );
}
