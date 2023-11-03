import styled from "@emotion/styled";
import { mq } from "../../../../../commons/libraries/breakPoints";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;
export const Container = styled.div`
  width: 800px;

  ${mq[1]} {
    width: 100%;
    padding: 0 24px;
  }
  ${mq[3]} {
    padding: 0 16px;
  }
`;
export const SettingListWrap = styled.ul`
  margin-top: 60px;
`;
export const SettingListBox = styled.li`
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
  height: 35px;
`;
export const Categoty = styled.span`
  display: block;
  font-size: 20px;
  line-height: 20px;
  font-weight: 600;
`;
export const Contents = styled.p<{
  data?: boolean;
}>`
  line-height: 18px;
  word-break: keep-all;
  width: calc(100% - 200px);
  font-size: ${(props: any) => (props.data ? "18px" : "16px")};
  color: ${(props: any) => (props.data ? "#111" : "#aaa")};

  ${mq[2]} {
    width: calc(100% - 180px);
  }
`;

export const EditDetail = styled.input`
  width: calc(100% - 200px);
  height: 35px;
  padding-left: 5px;
  font-size: 18px;
  line-height: 18px;
  border: 2px solid #dbdbdb;
  border-radius: 6px;

  ${mq[2]} {
    width: calc(100% - 180px);
  }
`;

export const PasswordEdit = styled.span`
  display: inline-block;
  border-bottom: 1px solid #111;
  cursor: pointer;
`;
export const SettingListBtm = styled.p`
  color: #888888;
  margin-top: 30px;
`;
export const DeleteUser = styled.button`
  width: 80px;
  border-radius: 6px;
  border: none;
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  color: #fff;
  padding: 8px 0;
  background-color: #ff6b6b;
  cursor: pointer;
`;
export const EditBtnWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 60px;
`;
export const EditBtn = styled.button`
  border: none;
  color: #fff;
  border-radius: 6px;
  background-color: #111;
  font-size: 18px;
  line-height: 24px;
  font-weight: 600;
  padding: 12px 40px;
  cursor: pointer;
`;

export const SaveBtn = styled.button`
  width: 50%;
  border: none;
  color: #fff;
  border-radius: 6px;
  background-color: #88b04b;
  font-size: 18px;
  line-height: 24px;
  font-weight: 600;
  padding: 12px 0;
`;

export const CancelBtn = styled.button`
  width: 50%;
  border: none;
  color: #fff;
  border-radius: 6px;
  background-color: lightgray;
  font-size: 18px;
  line-height: 24px;
  font-weight: 600;
  margin-right: 10px;
  padding: 12px 0;
`;
