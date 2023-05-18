import { Avatar, UploadFile } from "antd";
import { useUser } from "../../../commons/hooks/custom/useUser";
import * as S from "./styles";
import { UserOutlined } from "@ant-design/icons";
import ImageUpload from "../../../commons/parts/imageUpload";
import { useState } from "react";
import AvatarUpload from "../../../commons/parts/avatarUpload";
import { useMutation } from "@apollo/client";
import { UPLOAD_FILE } from "./queries";

export default function Settings() {
  const { data, onClickEditAvatar, isAvatarEdit } = useUser();
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const [uploadFile] = useMutation(UPLOAD_FILE);

  const onClickUpload = async () => {
    // console.log(fileList);
    const urlResult = await Promise.all(
      fileList.map(
        async el => await uploadFile({ variables: { files: el.originFileObj } })
      )
    );
    console.log(urlResult);
    // console.log(fileList.map((el) => el.originFileObj));
    // try {
    //   const result = await uploadFile({
    //     variables: {
    //       files:
    //     }
    //   });

    //   console.log(result);
    // } catch (error) {
    //   alert(error.message);
    // }
  };

  return (
    <S.Wrapper>
      <S.SettingTop>
        <S.Container>
          <S.AvatarWrap>
            {isAvatarEdit && (
              <AvatarUpload fileList={fileList} setFileList={setFileList} />
            )}
            {!isAvatarEdit && <Avatar size={130} icon={<UserOutlined />} />}
            <S.AvatarEdit onClick={onClickEditAvatar}>이미지 수정</S.AvatarEdit>
            <S.AvatarRemove onClick={onClickUpload}>이미지 제거</S.AvatarRemove>
          </S.AvatarWrap>
          <S.ProfileWrap>
            <S.ProfileNickname>
              {data?.fetchLoginUser?.nickname}
            </S.ProfileNickname>
            <S.ProfileIntroduce>
              {data?.fetchLoginUser?.introduce !== ""
                ? data?.fetchLoginUser?.introduce
                : "자기소개를 입력해주세요."}
            </S.ProfileIntroduce>
            <S.ProfileEdit>프로필 수정하기</S.ProfileEdit>
          </S.ProfileWrap>
        </S.Container>
      </S.SettingTop>
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
                  <S.Contents data={data?.fetchLoginUser?.portfolio}>
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
