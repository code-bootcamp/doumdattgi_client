import { useUser } from "../../../../commons/hooks/custom/useUser";
import * as S from "./styles";

export default function SettingsBottom() {
  const { data, onClickEditAvatar, isAvatarEdit } = useUser();

  return (
    <S.Wrapper>
      <S.SettingBtm>
        <S.Container className="bottom">
          <S.SettingListWrap>
            <S.SettingListBox>
              <S.SettingListTop>
                <S.SettingList>
                  <S.Categoty>이름</S.Categoty>
                  <S.Contents>{data?.fetchLoginUser?.name}</S.Contents>
                </S.SettingList>
              </S.SettingListTop>
              <S.SettingListBtm>
                수익금을 출금하기 위해서는 실명인증이 필요합니다.
              </S.SettingListBtm>
            </S.SettingListBox>
            <S.SettingListBox>
              <S.SettingListTop>
                <S.SettingList>
                  <S.Categoty>이메일 주소</S.Categoty>
                  <S.Contents>{data?.fetchLoginUser?.email}</S.Contents>
                </S.SettingList>
              </S.SettingListTop>
              <S.SettingListBtm>
                회원 인증 또는 시스템에서 발송하는 이메일을 수신하는 주소입니다.
              </S.SettingListBtm>
            </S.SettingListBox>
            <S.SettingListBox>
              <S.SettingListTop>
                <S.SettingList>
                  <S.Categoty>포트폴리오 주소</S.Categoty>
                  <S.Contents>
                    {data?.fetchLoginUser?.portfolio !== ""
                      ? data?.fetchLoginUser?.portfolio
                      : "포트폴리오 주소를 입력해주세요."}
                  </S.Contents>
                </S.SettingList>
              </S.SettingListTop>
              <S.SettingListBtm>
                나를 소개할 수 있는 포트폴리오 주소입니다.
              </S.SettingListBtm>
            </S.SettingListBox>
            <S.SettingListBox>
              <S.SettingListTop>
                <S.SettingList>
                  <S.Categoty>비밀번호</S.Categoty>
                  <S.Contents>
                    <S.PasswordEdit className="semiBold">
                      비밀번호 변경하기
                    </S.PasswordEdit>
                  </S.Contents>
                </S.SettingList>
              </S.SettingListTop>
              <S.SettingListBtm>
                비밀번호를 변경할 수 있습니다.
              </S.SettingListBtm>
            </S.SettingListBox>
            <S.SettingListBox>
              <S.SettingListTop>
                <S.SettingList>
                  <S.Categoty>회원 탈퇴</S.Categoty>
                  <S.Contents>
                    <S.DeleteUser>회원 탈퇴</S.DeleteUser>
                  </S.Contents>
                </S.SettingList>
              </S.SettingListTop>
              <S.SettingListBtm>
                탈퇴 시 작성하신 게시글 및 댓글이 모두 삭제되며 복구되지
                않습니다.
              </S.SettingListBtm>
            </S.SettingListBox>
          </S.SettingListWrap>
          <S.EditBtnWrap>
            <S.EditBtn>수정하기</S.EditBtn>
          </S.EditBtnWrap>
        </S.Container>
      </S.SettingBtm>
    </S.Wrapper>
  );
}
