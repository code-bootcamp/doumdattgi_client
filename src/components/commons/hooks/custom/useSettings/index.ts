import { useState } from "react";
import { useMutationUpdateProfileImage } from "../../mutations/useMutationUpdateProfileImage";
import { useMutationUploadFile } from "../../mutations/useMutationUploadFile";
import { UploadFile } from "antd";
import { FETCH_LOGIN_USER } from "../../queries/useQueryFetchLoginUser";
import { useMutationUpdateNicknameIntroduce } from "../../mutations/useMutationUpdateNicknameIntroduce";
import { useMutationUpdateUserInfo } from "../../mutations/useMutationUpdateUserInfo";

export interface IPropsIntroduceData {
  user_nickname: string;
  user_introduce: string;
}

export interface IpropsDetail {
  user_name: string;
  user_email: string;
  user_portfolio: string;
}

export const useSettings = () => {
  const [updateNicknameIntroduce] = useMutationUpdateNicknameIntroduce();
  const [updateUserInfo] = useMutationUpdateUserInfo();

  const [isAvatarEdit, setIsAvatarEdit] = useState(false);
  const [isProfileEdit, setIsProfileEdit] = useState(false);
  const [isDetailEdit, setIsDetailEdit] = useState(false);

  // =============== 프로필 이미지 ===============
  const onClickEditAvatar = () => {
    setIsAvatarEdit(prev => !prev);
  };

  // =============== 프로필 자기소개 ===============
  const onClickEditProfile = () => {
    setIsProfileEdit(prev => !prev);
  };

  const clickEditIntroduce = async (data: IPropsIntroduceData) => {
    setIsProfileEdit(prev => !prev);

    try {
      const result = await updateNicknameIntroduce({
        variables: {
          updateNicknameIntroduceInput: {
            user_nickname: data.user_nickname,
            user_introduce: data.user_introduce
          }
        },
        refetchQueries: [{ query: FETCH_LOGIN_USER }]
      });

      console.log(result);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  // =============== 프로필 상세 ===============

  const clickEditDetail = () => {
    setIsDetailEdit(prev => !prev);
  };

  const clickSaveDetail = async (data: IpropsDetail) => {
    setIsDetailEdit(prev => !prev);
    console.log(data.user_name);

    try {
      const result = await updateUserInfo({
        variables: {
          updateUserInfoInput: {
            user_name: data.user_name,
            user_email: data.user_email,
            user_portfolio: data.user_portfolio
          }
        },
        refetchQueries: [{ query: FETCH_LOGIN_USER }]
      });

      console.log(result);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [uploadFile] = useMutationUploadFile();
  const [updateProfileImage] = useMutationUpdateProfileImage();

  const onClickSubmitAvatar = async () => {
    const urlResult = await Promise.all(
      fileList.map(
        async el => await uploadFile({ variables: { files: el.originFileObj } })
      )
    );
    const resultUrl = urlResult[0]?.data?.uploadFile[0];

    try {
      const result = await updateProfileImage({
        variables: {
          user_url: resultUrl
        },
        refetchQueries: [
          {
            query: FETCH_LOGIN_USER
          }
        ]
      });
      console.log(result);
      setIsAvatarEdit(prev => !prev);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onClickDeleteAvatar = async () => {
    try {
      const result = await updateProfileImage({
        variables: {
          user_url: ""
        },
        refetchQueries: [
          {
            query: FETCH_LOGIN_USER
          }
        ]
      });
      console.log(result);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return {
    onClickEditAvatar,
    clickEditIntroduce,
    onClickEditProfile,
    onClickSubmitAvatar,
    onClickDeleteAvatar,
    isAvatarEdit,
    isProfileEdit,
    fileList,
    setFileList,
    setIsAvatarEdit,
    clickEditDetail,
    clickSaveDetail,
    isDetailEdit
  };
};
