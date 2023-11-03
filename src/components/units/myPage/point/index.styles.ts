import styled from "@emotion/styled";
import { mq } from "../../../../commons/libraries/breakPoints";

interface IPropsSelect {
  isSelect: boolean;
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 50px auto 0;
  min-height: 600px;
`;

export const Container = styled.div`
  width: 800px;

  ${mq[1]} {
    width: 100%;
    padding: 0 24px;
  }
  ${mq[3]} {
    padding: 0 16px;
  }
`;

export const Title = styled.h1`
  font-size: 30px;
`;
export const SelectWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 800px;
  ${mq[1]} {
    width: 100%;
    padding: 0 24px;
  }
  ${mq[2]} {
  }
  ${mq[3]} {
    padding: 0;
  }
`;
export const SelectBar = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin: 30px auto;

  ${mq[4]} {
    width: 100%;
    white-space: nowrap;
    overflow-y: inherit;
    overflow-x: auto;
    display: flex;
    align-items: center;
    padding: 0 16px;
    margin: 30px auto;
  }
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

export const selectOption = styled.li`
  position: relative;
  text-align: center;
  font-size: 18px;
  padding: 0 20px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props: IPropsSelect) => (props.isSelect ? "black" : "#AAAAAA")};

  ${mq[2]} {
    padding: 0 16px;
    font-size: 16px;
  }
  ${mq[3]} {
    padding: 0 12px;
    line-height: 18px;
    padding-bottom: 10px;
    word-break: keep-all;
  }

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 3px;
    width: 100%;
    background-color: ${props => (props.isSelect ? "black" : "white")};
  }
`;

export const HoldingBox = styled.div`
  margin: 14px 0;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  background-color: #f2f2f4;
  padding: 30px;
`;

export const HoldTitle = styled.span`
  font-size: 20px;
  display: block;
`;

export const CurrentHold = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 22px;

  ${mq[3]} {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const HoldPoint = styled.span`
  font-family: "Arita-dotum4.0";
  font-size: 36px;
  display: block;
`;

export const ChargeBtn = styled.button`
  font-size: 18px;
  background-color: #111111;
  border-radius: 6px;
  padding: 15px 30px;
  border: none;
  color: white;
  cursor: pointer;

  ${mq[3]} {
    padding: 15px 20px;
    margin-top: 10px;
  }
`;

export const Nothing = styled.div`
  margin-top: 25%;
  text-align: center;
  font-size: 16px;
  color: #aaaaaa;
`;
