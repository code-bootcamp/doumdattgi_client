import styled from "@emotion/styled";
import { mq } from "../../../commons/libraries/breakPoints";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  margin-top: 50px;
  width: 1140px;
`;

export const Upper = styled.div`
  height: 395px;
  padding-left: 40px;
  background-color: #fafafa;
  margin-bottom: 60px;
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const TitleSection = styled.section``;

export const Title = styled.span`
  font-size: 20px;
`;

export const SubTitle = styled.span`
  margin-left: 9px;
  font-size: 12px;
  color: #888;
`;

export const CardboxWrap = styled.div`
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const Container = styled.div`
  width: 220px;
  display: flex;
  justify-content: center;

  ${mq[0]} {
    width: 25%;
    padding: 0 24px;
  }
  ${mq[2]} {
    padding: 0 16px;
  }
`;

export const Container_Right = styled.div`
  width: calc(100% - 220px);
`;
