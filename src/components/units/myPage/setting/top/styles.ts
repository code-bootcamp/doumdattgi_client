import styled from "@emotion/styled";
import { mq } from "../../../../../commons/libraries/breakPoints";

export const Wrapper = styled.div``;

export const SettingTop = styled.div`
  width: 100%;
  height: 400px;
  background-color: #fff;
  box-shadow: 0px 10px 10px rgba(204, 204, 204, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Container = styled.div`
  width: 800px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  ${mq[1]} {
    width: 100%;
    padding: 0 24px;
  }
  ${mq[3]} {
    padding: 0 16px;
  }
`;
export const AvatarWrap = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Avatar = styled.img`
  width: 130px;
  height: 130px;
  background-color: #ccc;
  border-radius: 50%;
  cursor: pointer;
`;
export const AvatarEdit = styled.button`
  width: 130px;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
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
  font-size: 1rem;
  padding: 8px 0;
  font-weight: 600;
  background: none;
  margin-top: 10px;
  cursor: pointer;
`;
export const ProfileWrap = styled.div`
  width: calc(100% - 200px);
  height: 210px;
  word-break: break-all;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${mq[2]} {
    width: calc(100% - 180px);
  }
`;
export const ProfileBox = styled.div``;
export const ProfileNickname = styled.h2`
  font-size: 2.25rem;
  font-weight: 600;
`;
export const ProfileIntroduce = styled.p`
  color: #888;
  margin-top: 20px;
`;
export const ProfileEditBtn = styled.div`
  display: flex;
`;
export const ProfileEdit = styled.span`
  display: block;
  border-bottom: 1px solid #000;
  line-height: 18px;
  font-weight: 600;
  cursor: pointer;
  margin-left: 8px;
  &:first-of-type {
    margin-left: 0;
  }
`;
export const Text = styled.textarea`
  height: 100px;
  width: 100%;
  resize: none;
  border-radius: 5px;
  border: 1px solid #dbdbdb;
  padding: 16px;
  margin: 10px 0;
  font-size: 1rem;
`;
export const Form = styled.form`
  display: flex;
  height: 230px;
  flex-direction: column;
  justify-content: space-between;
`;
