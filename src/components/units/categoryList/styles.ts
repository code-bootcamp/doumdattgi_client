import styled from "@emotion/styled";
import { mq } from "../../../commons/libraries/breakPoints";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;

  border: 3px solid green;
`;

export const Upper = styled.div`
  border: 3px solid black;
`;

export const Section = styled.section``;

export const Title = styled.span``;

export const CardboxWrap = styled.div``;

export const Container = styled.div`
  width: 1140px;
  display: flex;
  border: 2px solid blue;

  ${mq[0]} {
    width: 25%;
    padding: 0 24px;
  }
  ${mq[2]} {
    padding: 0 16px;
  }
`;

export const Container_Right = styled.div`
  width: 100%;
  border: 2px solid red;
`;
