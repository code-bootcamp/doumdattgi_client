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
    min-height: 600px;
    padding-right: 0;
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

export const RightListBox = styled.div<{
  isSell: boolean;
}>`
  display: flex;
  align-items: center;
  margin-bottom: ${props => (!props.isSell ? "12px" : "24px")};

  ${mq[2]} {
    margin-bottom: ${props => (!props.isSell ? "12px" : "16px")};
  }
  ${mq[4]} {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: ${props => (!props.isSell ? "12px" : "40px")};
  }
`;

export const RightDetailBox = styled.div<{
  isSell: boolean;
}>`
  width: ${props => (!props.isSell ? "100%" : "70%")};
  padding: ${props => (!props.isSell ? "16px" : "0 0 0 16px")};
  border: ${props => (!props.isSell ? "1px solid #d9d9d9" : "none")};
  border-radius: 6px;

  ${mq[0]} {
    width: ${props => (!props.isSell ? "100%" : "65%")};
  }
  ${mq[1]} {
    width: ${props => (!props.isSell ? "100%" : "70%")};
  }
  ${mq[2]} {
    width: ${props => (!props.isSell ? "100%" : "65%")};
  }
  ${mq[3]} {
    width: ${props => (!props.isSell ? "100%" : "60%")};
  }
  ${mq[4]} {
    width: 100%;
    padding: ${props => (!props.isSell ? "16px" : "0 16px")};
  }
`;
export const ListImageBox = styled.div`
  overflow: hidden;
  width: 30%;

  ${mq[0]} {
    width: 35%;
  }
  ${mq[1]} {
    width: 30%;
  }
  ${mq[2]} {
    width: 35%;
  }
  ${mq[3]} {
    width: 40%;
  }
  ${mq[4]} {
    width: 100%;
    margin-bottom: 12px;
  }
`;

export const ListImage = styled.img`
  cursor: pointer;
  width: 100%;
  min-height: 140px;
  display: block;
  border: 1px solid #e0e1ea;
  border-radius: 3px;
  aspect-ratio: 4 / 3;

  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }

  ${mq[4]} {
    width: 100%;
    height: auto;
  }
`;

export const ListCategory = styled.div`
  color: #333333;
  margin-bottom: 20px;
`;

export const ListTitle = styled.div`
  font-size: 18px;
  word-break: keep-all;
  line-height: 22px;
  margin-bottom: 16px;
  cursor: pointer;

  ${mq[3]} {
    font-size: 16px;
  }
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

export const TagBox = styled.div`
  display: flex;
  cursor: pointer;
  & div:last-of-type {
    margin-left: 6px;
  }
  &.pick div {
    margin-left: 0;
  }
`;

export const DivideLine = styled.div<{
  isSell: boolean;
}>`
  border-top: 1px solid #d9d9d9;
  margin: 16px 0px;
  display: ${props => (!props.isSell ? "none" : "block")};
`;

export const Remarks = styled.p`
  color: #888888;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
`;

export const None = styled.div`
  width: 730px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 150px;
`;
