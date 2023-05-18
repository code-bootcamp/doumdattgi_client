import * as S from "./index.styles";

export default function PreviewContents() {
  return (
    <S.PreviewContent>
      <S.Pv_Top>디자인</S.Pv_Top>
      <S.Pv_Title>여기는 제목</S.Pv_Title>
      <S.Pv_Footer>
        <S.Tag>#협의가능</S.Tag>
        <S.UserInfo>
          <S.ProfileImg src="/Profile.png" />
          <S.NickName>닉네임</S.NickName>
        </S.UserInfo>
      </S.Pv_Footer>
    </S.PreviewContent>
  );
}
