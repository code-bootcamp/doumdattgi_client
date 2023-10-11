import styled from "@emotion/styled";
import { mq } from "../../../../../commons/libraries/breakPoints";

export const Wrapper = styled.div`
  width: 200px;
  font-size: 22px;
`;

export const Title = styled.h2`
  font-size: 22px;
  line-height: 22px;
  font-weight: 500;
  padding-bottom: 26px;
`;

export const DivideLine = styled.div`
  border-bottom: 2px solid #88b04b;
`;

export const Ad = styled.div`
  margin-top: 30px;
  height: 70px;
  background-color: #ccc;
  border-radius: 6px;
  overflow: hidden;

  ${mq[0]} {
    height: 60px;
  }
  ${mq[2]} {
    height: 60px;
  }
`;

export const AdImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const SubCategoryBox = styled.ul``;

export const SubCategory = styled.li`
  display: block;
  cursor: pointer;
  margin-top: 8px;
`;
export const SubCategoryItem = styled.span`
  display: block;
  font-size: 14px;
  font-weight: 600;
  padding: 10px 6px;
  border-radius: 6px;
  transition: all 0.2s linear;
  &:hover {
    background: #f7f7f7;
  }
`;
