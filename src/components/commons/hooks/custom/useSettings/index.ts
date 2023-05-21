import { useState } from "react";
import { useMutationUpdateProfileImage } from "../../mutations/useMutationUpdateProfileImage";
import { useMutationUploadFile } from "../../mutations/useMutationUploadFile";
import { UploadFile } from "antd";
import { FETCH_LOGIN_USER } from "../../queries/useQueryFetchLoginUser";

export const useSettings = () => {
  const [isAvatarEdit, setIsAvatarEdit] = useState(false);
  const [isProfileEdit, setIsProfileEdit] = useState(false);

  // =============== 프로필 이미지 ===============
  const onClickEditAvatar = () => {
    setIsAvatarEdit(prev => !prev);
  };

  const onClickEditProfile = () => {
    setIsProfileEdit(prev => !prev);
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
    onClickEditProfile,
    onClickSubmitAvatar,
    onClickDeleteAvatar,
    isAvatarEdit,
    isProfileEdit,
    fileList,
    setFileList,
    setIsAvatarEdit
  };
};
