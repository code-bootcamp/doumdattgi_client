import styled from "@emotion/styled";
import { mq } from "../../../../commons/libraries/breakPoints";

export const Wrapper = styled.header`
  width: 100%;
  background-color: #fff;
  padding: 7px 0;
`;
export const DivideLine = styled.div`
  width: 100%;
  height: 1px;
  border-bottom: 1px solid #e5e5e5;
`;
export const Container = styled.div`
  width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;

  ${mq[0]} {
    width: 100%;
    padding: 0 24px;
  }
  ${mq[2]} {
    padding: 0 16px;
  }
`;
export const Logo = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const LogoIcon = styled.img`
  display: block;
  width: 36px;
  height: 36px;

  ${mq[3]} {
    width: 24px;
    height: 24px;
  }
`;
export const LogoTitle = styled.h1`
  font-size: 30px;
  line-height: 30px;
  font-weight: 600;
  margin-left: 5px;

  ${mq[3]} {
    font-size: 24px;
  }
`;
