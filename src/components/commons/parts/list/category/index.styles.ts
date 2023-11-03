import styled from "@emotion/styled";
import { mq } from "../../../../../commons/libraries/breakPoints";

export const Wrapper = styled.aside`
  width: 200px;
  font-size: 22px;

  ${mq[0]} {
    width: 190px;
  }
  ${mq[1]} {
    width: 180px;
  }
  ${mq[2]} {
    width: 160px;
  }
  ${mq[3]} {
    display: none;
  }
`;

export const Title = styled.h2`
  font-size: 22px;
  line-height: 22px;
  font-weight: 500;
  padding-bottom: 20px;
`;

export const DivideLine = styled.div`
  border-bottom: 2px solid #88b04b;
`;

export const Ad = styled.div`
  margin-top: 20px;
  margin-bottom: 10px;
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
export const SubCategoryItem = styled.a`
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

export const NavWrapper = styled.div`
  display: none;

  ${mq[3]} {
    display: block;
  }
`;
export const NavTitle = styled.h2`
  font-size: 22px;
  line-height: 22px;
  font-weight: 500;
  padding-bottom: 20px;
`;
export const NavBox = styled.ul`
  width: 100%;
  white-space: nowrap;
  overflow-y: inherit;
  overflow-x: auto;
  display: flex;
  align-items: center;
  margin: 0;
  background-color: #fff;
`;
export const NavDivideLine = styled.div`
  width: 100%;
  height: 1px;
  border-bottom: 1px solid #e5e5e5;
`;
export const NavList = styled.li<{
  tab: string;
  el: string;
}>`
  position: relative;
  padding: 0 12px;
  height: 50px;
  display: flex;
  align-items: center;

  ${props => (props.tab === props.el ? "" : "")}
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: ${props => (props.tab ? "3px" : "")};
    width: 100%;
    background-color: #88b04b;
  }
`;
export const NavItem = styled.a`
  display: block;
  line-height: 50px;
`