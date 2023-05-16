import styled from "@emotion/styled";

export const Wrapper = styled.div``;

export const SettingTop = styled.div`
  width: 100%;
  height: 400px;
  background-color: #fff;
  box-shadow: 0px 10px 10px rgba(204, 204, 204, 0.25);
  display: flex;
  justify-content: center;
`;
export const Container = styled.div`
  width: 800px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const AvatarWrap = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Avatar = styled.div`
  width: 130px;
  height: 130px;
  background-color: #ccc;
  border-radius: 50%;
`;
export const AvatarEdit = styled.button`
  width: 130px;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  padding: 8px 0;
  background-color: #111;
  color: #fff;
  font-weight: 600;
  margin-top: 20px;
  cursor: pointer;
`;
export const AvatarRemove = styled.button`
  width: 130px;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  padding: 8px 0;
  font-weight: 600;
  background: none;
  margin-top: 10px;
  cursor: pointer;
`;
export const ProfileWrap = styled.div`
  width: 570px;
  word-break: break-all;
`;
export const ProfileNickname = styled.h2`
  font-size: 36px;
  line-height: 36px;
  font-weight: 700;
`;
export const ProfileIntroduce = styled.p`
  color: #888888;
  margin-top: 20px;
`;
export const ProfileEdit = styled.span`
  display: inline-block;
  border-bottom: 1px solid #111;
  font-weight: 600;
  margin-top: 80px;
  cursor: pointer;
`;
export const SettingBtm = styled.div`
  display: flex;
  justify-content: center;
  .bottom {
    flex-direction: column;
  }
`;
export const SettingListWrap = styled.ul`
  width: 100%;
  margin-top: 60px;
`;
export const SettingListBox = styled.li`
  width: 100%;
  padding: 30px 0;
  border-top: 1px solid #d9d9d9;
  &:first-of-type {
    border-top: none;
  }
  &:last-of-type {
    border-bottom: 1px solid #d9d9d9;
  }
`;
export const SettingListTop = styled.div``;
export const SettingList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .semiBold {
    font-weight: 600;
  }
`;
export const Categoty = styled.span`
  display: block;
  font-size: 24px;
  line-height: 24px;
  font-weight: 600;
`;
export const Contents = styled.p`
  font-size: 20px;
  line-height: 20px;
  width: 570px;
`;
export const PasswordEdit = styled.span`
  display: inline-block;
  border-bottom: 2px solid #111;
  cursor: pointer;
`;
export const SettingListBtm = styled.p`
  color: #888888;
  margin-top: 30px;
`;
export const DeleteUser = styled.button`
  width: 100px;
  border-radius: 6px;
  border: none;
  font-size: 20px;
  line-height: 20px;
  font-weight: 600;
  color: #fff;
  padding: 8px 0;
  background-color: #ff6b6b;
  cursor: pointer;
`;
export const EditBtnWrap = styled.div`
  display: flex;
  margin-top: 60px;
`;
export const EditBtn = styled.button`
  width: 165px;
  border: none;
  color: #fff;
  border-radius: 6px;
  background-color: #111;
  font-size: 24px;
  line-height: 24px;
  font-weight: 600;
  padding: 13px 0;
`;
