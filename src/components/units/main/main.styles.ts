import styled from "@emotion/styled";
import { mq } from "../../../commons/libraries/breakPoints";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
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

export const Banner = styled.div`
  width: 1140px;
  margin-top: 50px;

  ${mq[0]} {
    width: 100%;
    padding: 0 24px;
    margin-top: 36px;
  }
  ${mq[2]} {
    margin-top: 0;
    padding: 0;
  }
`;

export const Section = styled.section`
  margin-top: 100px;
  ${mq[1]} {
    margin-top: 60px;
  }
  ${mq[3]} {
    margin-top: 60px;
  }
`;

export const Title = styled.h2`
  font-size: 1.25em;
  font-weight: 600;
`;

export const CardboxWrap = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 10px 20px;
  &.buy {
    gap: 10px 10px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }
  &.newbie {
    grid-template-columns: 1fr 1fr 1fr;
  }

  ${mq[0]} {
    gap: 10px 10px;
  }
  ${mq[2]} {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
  }
  ${mq[3]} {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    &.buy {
      grid-template-columns: 1fr;
    }
    &.newbie {
      grid-template-columns: 1fr;
    }
  }
`;

export const AdBar = styled.div`
  /* height: 150px; */
  background-color: #ccc;
  margin-top: 100px;
  border-radius: 6px;
  overflow: hidden;
  ${mq[1]} {
    margin-top: 60px;
  }
  ${mq[3]} {
    margin-top: 60px;
  }
`;

export const Ad = styled.img`
  display: block;
  width: 100%;
  height: auto;
  ${mq[2]} {
    width: auto;
    height: 100px;
  }
`;

export const BarBox = styled.div``;

export const IntroBar = styled.div`
  height: 120px;
  margin-top: 130px;
`;

export const NewUserBoards = styled.div`
  margin-top: 130px;
  margin-bottom: 130px;
  height: 450px;
`;

export const NewPreview = styled.div`
  width: 386.68px;
  height: 390px;
  overflow: hidden;
  border-radius: 6px;
  border: 1px solid #d5d7d7;
  cursor: pointer;
`;

export const NewPreviewImg = styled.img`
  width: 386.68px;
  height: 260px;
`;
