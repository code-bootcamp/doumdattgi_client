import styled from "@emotion/styled";
import { mq } from "../../../../commons/libraries/breakPoints";

export const Wrapper = styled.nav<{
  isOpen: boolean
}>`
  width: 100%;
  background-color: #fff;
  border-bottom: 1px solid #e5e5e5;
  ${mq[2]} {
    display: ${(props) => props.isOpen ? "block" : "none"};
    position: absolute;
    z-index: 9999;
  }
`;
export const Container = styled.div`
  width: 1140px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${mq[0]} {
    width: 100%;
    padding: 0 24px;
  }
  ${mq[2]} {
    display: block;
    padding: 0;
  }
`;
export const NavListBox = styled.ul`
  display: flex;
  padding: 20px 0;

  ${mq[2]} {
    display: block;
    padding: 0;
  }
`;
export const NavList = styled.li`
  margin-left: 50px;
  &:first-of-type {
    margin-left: 0;
  }

  ${mq[1]} {
    margin-left: 30px;
  }
  ${mq[2]} {
    margin-left: 0;
    border-bottom: 1px solid #e5e5e5;
  }
`;
export const NavItem = styled.span`
  display: block;
  font-size: 1.25em;
  line-height: 1.25em;
  cursor: pointer;
  ${mq[2]} {
    padding: 14px;
  }
`;
export const NavListRight = styled.span``;
