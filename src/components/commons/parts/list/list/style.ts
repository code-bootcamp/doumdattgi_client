import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InfiniteScroll from "react-infinite-scroller";
import { mq } from "../../../../../commons/libraries/breakPoints";

export const Container = styled.div<{
  isAll: boolean;
}>`
  padding-left: ${props => (props.isAll ? "0" : "40px")};
  width: ${props => (props.isAll ? "100%" : "calc(100% - 200px)")};

  ${mq[0]} {
    padding: 0;
    padding-left: ${props => (props.isAll ? "0px" : "20px")};
  }
`;

export const CategoryBox = styled.div`
  display: flex;
`;

export const LengthText = styled.span`
  font-size: 16px;
  font-weight: 500;
  display: block;
`;

export const CategoryTag = styled.span`
  display: block;
  margin-right: 5px;
  cursor: pointer;
`;
export const AngleRight = styled(FontAwesomeIcon)`
  margin-right: 5px;
`;

export const LengthBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 24px;
`;

export const ContentsBox = styled.div<{
  isAll: boolean
}>`
  display: grid;
  gap: 20px 10px;
  margin-top: 14px;
  grid-template-columns: ${props => (props.isAll ? "1fr 1fr 1fr 1fr 1fr" : "1fr 1fr 1fr 1fr")};

  ${mq[0]} {
    grid-template-columns: ${props => (props.isAll ? "1fr 1fr 1fr 1fr" : "1fr 1fr 1fr 1fr")};
  }
  ${mq[1]} {
    grid-template-columns: 1fr 1fr 1fr;
  }
  ${mq[2]} {
    grid-template-columns: 1fr 1fr;
  }
  ${mq[3]} {
    grid-template-columns: 1fr;
  }
`;

export const Contents = styled.div`
  width: 221px;
  height: 300px;
  border: 1px solid #bec3c7;
  border-radius: 6px;
  margin-bottom: 50px;
  margin-left: 17px;

  cursor: pointer;
`;

export const ImageBox = styled.img`
  width: 100%;
  height: 181px;
`;

export const Body = styled.div`
  padding: 12px;
`;

export const BodyBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BodyCategory = styled.div`
  font-size: 12px;
  color: #333333;
`;

export const Flag = styled.img`
  width: 10px;
  height: 13px;
  cursor: pointer;
`;

export const BodyTitle = styled.div`
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 8px 0px 20px 0px;
`;

export const WorkHour = styled.div`
  font-size: 14px;
  color: #929aa0;
  text-align: center;
  background-color: #f6f7f9;
  padding: 4px 6px;
  border-radius: 12px;
  border: 1px solid #929aa0;
`;

export const UserIcon = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50px;
  margin: 6px;
`;

export const UserName = styled.div`
  width: 40px;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
