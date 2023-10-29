import styled from "@emotion/styled";
import { mq } from "../../../../commons/libraries/breakPoints";

export const Wrapper = styled.div`
  display: flex;
  margin-top: 40px;
  justify-content: center;
`;

export const SubTitle = styled.div`
  width: 100px;
  height: 30px;
  font-size: 14px;
  color: #929aa0;
  border: 1px solid #929aa0;
  border-radius: 6px;
  background-color: #f6f7f9;
  padding: 0px 9px;
  text-align: center;
  line-height: 30px;
`;

export const WrapperRight = styled.div`
  width: 100%;
  height: calc(100vh - 220px);
  overflow: auto;
  padding-right: 10px;
  &::-webkit-scrollbar {
    background: #fff;
    border-radius: 15px;
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #88b04b;
    border-radius: 15px;
    width: 5px;
  }

  ${mq[1]} {
    height: auto;
    min-height: 400px;
  }
`;

export const RightTitleBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const CreateLink = styled.div`
  width: 180px;
  height: 42px;
  color: #ffffff;
  background-color: black;
  border-radius: 6px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const CreateIcon = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 5px;
`;

export const RightListBox = styled.div`
  display: flex;
  cursor: pointer;
  margin-bottom: 24px;
  ${mq[2]} {
    margin-bottom: 16px;
  }
`;

export const RightDetailBox = styled.div<{
  isSell: boolean;
}>`
  width: ${props => (!props.isSell ? "100%" : "calc(100% - 250px)")};
  padding: ${props => (!props.isSell ? "16px" : "0 0 0 16px")};
  border: ${props => (!props.isSell ? "1px solid #d9d9d9" : "none")};
  border-radius: 6px;
`;

export const ListImage = styled.img`
  width: 250px;
  height: 170px;
  border: 1px solid #e0e1ea;
  border-radius: 3px;
`;

export const ListCategory = styled.div`
  color: #333333;
  margin-bottom: 20px;
`;

export const ListTitle = styled.div`
  font-size: 18px;
  word-break: keep-all;
  line-height: 22px;
  margin-bottom: 14px;
`;

export const ListDetail = styled.span`
  font-size: 14px;
  color: #929aa0;
  text-align: center;
  line-height: 26px;
  border: 1px solid #929aa0;
  border-radius: 12px;
  background-color: #f6f7f9;
  padding: 6px 8px;
  margin-right: 5px;
`;

export const DivideLine = styled.div<{
  isSell: boolean;
}>`
  border-top: 1px solid #d9d9d9;
  margin: 17px 0px;
  display: ${props => (!props.isSell ? "none" : "block")};
`;

export const Remarks = styled.div`
  color: #888888;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const None = styled.div`
  width: 730px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 150px;
`;
