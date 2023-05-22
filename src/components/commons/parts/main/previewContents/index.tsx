import * as S from "./index.styles";

export default function PreviewContents(props) {
  return (
    <S.PreviewContent>
      <S.Pv_Top>{props.el?.product_product_category}</S.Pv_Top>
      <S.Pv_Title>{props.el?.product_product_title}</S.Pv_Title>
      <S.Pv_Footer>
        <S.Tag>{props.el?.product_product_workDay}</S.Tag>
        <S.UserInfo>
          <S.ProfileImg
            src={props.el?.u_user_profileImage}
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
