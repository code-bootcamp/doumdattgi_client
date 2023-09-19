import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InfiniteScroll from "react-infinite-scroller";
import { mq } from "../../../../commons/libraries/breakPoints";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

export const Container = styled.div`
  width: 1140px;

  ${mq[0]} {
    width: 100%;
    padding: 0 24px;
  }
  ${mq[2]} {
    padding: 0 16px;
  }
`;
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: 30px;
  border-bottom: 2px solid #88b04b;
`;
export const TitleBox = styled.div``;
export const SubTitle = styled.h2`
  margin-bottom: 14px;
`;
export const Title = styled.h1`
  font-size: 36px;
  font-weight: 600;
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

export const Body = styled.div`
  padding-top: 40px;
  display: flex;
  justify-content: space-between;
`;
export const CategoryWrap = styled.div`
  width: 250px;

  ${mq[1]} {
    width: 180px;
  }
`;
export const Category = styled.span`
  display: block;
  font-size: 18px;
  font-weight: 600;
`;
export const CategoryBox = styled.div`
  margin-top: 24px;
`;
export const CategoryLabel = styled.label`
  display: inline-block;
  cursor: pointer;
`;
export const Radio = styled.input`
  appearance: none;
  &::before {
    content: "";
    box-sizing: border-box;
    display: block;
    width: 16px;
    height: 16px;
    margin-right: 6px;
    border-radius: 50%;
    border: 1px solid #ccc;
  }
  &:hover {
    &::before {
      border: 1px solid #88b04b;
    }
  }
  &:checked {
    &::before {
      border: 5px solid #88b04b;
    }
  }
`;
export const ListWrap = styled.div`
  width: calc(100% - 250px);

  ${mq[1]} {
    width: calc(100% - 180px);
  }
`;
export const LengthBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const LengthText = styled.span`
  display: block;
`;
export const ContentsBox = styled(InfiniteScroll)``;

export const ListTitle = styled.p`
  font-size: 18px;
  font-weight: 600;
  margin-top: 12px;
`;
export const ListBox = styled.div`
  padding: 24px 0;
  border-bottom: 1px solid #d9d9d9;
  cursor: pointer;
  &:last-of-type {
    border-bottom: none
  }
`;
export const FlexBox = styled.div`
  display: flex;
`;
export const RequireBox = styled.div`
  display: flex;
  margin-top: 24px;
  &.require {
    margin-left: 50px;
  }
`;
export const TagBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;
export const createdAt = styled.div`
  display: flex;
  margin-left: 8px;
`;
export const Icon = styled(FontAwesomeIcon)`
  font-size: 14px;
`;
export const DetailTitle = styled.span`
  display: block;
  margin-left: 6px;
`;
export const DetailText = styled.span`
  display: block;
  margin-left: 8px;
  color: #73737A;
`;
export const Tag = styled.div`
  margin-left: 8px;
`;
export const Date = styled.span`
  display: block;
  font-size: 12px;
  color: #9797a0;
  &:last-child {
    margin-left: 4px;
  }
`;
