import * as S from "./index.styles";
import { CategoryObj, Obj } from "../../../../../commons/libraries/translate";

interface IProps {
  el: {
    product_product_category: string;
    product_product_title: string;
    product_product_workDay: string;
    u_user_profileImage?: string | null;
    u_user_nickname: string;
  };
}

export default function PreviewContents(props: IProps) {
  return (
    <S.PreviewContent>
      <S.Pv_Top>{CategoryObj[props.el?.product_product_category]}</S.Pv_Top>
      <S.Pv_Title>{props.el?.product_product_title}</S.Pv_Title>
      <S.Pv_Footer>
        <S.Tag>{Obj[props.el?.product_product_workDay]}</S.Tag>
        <S.UserInfo>
          <S.ProfileImg
            src={props.el?.u_user_profileImage ?? ""}
            onError={e => {
              const target = e.target as HTMLImageElement;
              target.src = "/Profile.png";
            }}
          />
          <S.NickName>{props.el?.u_user_nickname}</S.NickName>
        </S.UserInfo>
      </S.Pv_Footer>
    </S.PreviewContent>
  );
}
