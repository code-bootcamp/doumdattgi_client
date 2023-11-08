import styled from "@emotion/styled";
import exp from "constants";
import { mq } from "../../../../commons/libraries/breakPoints";

interface IIsToggle {
  isToggle: boolean;
}

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

export const Container = styled.div`
  width: 1000px;

  ${mq[0]} {
    width: 100%;
    padding: 0 24px;
  }
  ${mq[2]} {
    padding: 0 16px;
  }
`;

export const Head = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
`;

export const SelectToggle = styled.div`
  width: 302px;
  height: 42px;
  display: flex;
  flex-direction: row;
`;

export const Employee = styled.div`
  width: 140px;
  font-size: 1.5rem;
  text-align: center;
  line-height: 1.7;
  border-radius: 6px 0px 0px 6px;
  border: 2px solid #333333;
  border-right: none;
  background-color: ${(props: IIsToggle) =>
    props.isToggle ? "black" : "white"};
  color: ${props => (props.isToggle ? "white" : "black")};
  cursor: pointer;
`;

export const Employer = styled.div`
  width: calc(100% - 140px);
  font-size: 1.5rem;
  text-align: center;
  line-height: 1.7;
  border-radius: 0px 6px 6px 0px;
  border: 2px solid #333333;
  border-left: none;
  background-color: ${(props: IIsToggle) =>
    props.isToggle ? "white" : "black"};
  color: ${props => (props.isToggle ? "black" : "white")};
  cursor: pointer;
`;

export const DivideLine = styled.div`
  border-left: 2px solid #111;
`;
export const TitleBox = styled.div``;
export const SubTitle = styled.h2`
  margin-bottom: 14px;
`;
export const Title = styled.h1`
  font-size: 1.88rem;
  line-height: 36px;
`;
export const Body = styled.div``;

export const Body_Top = styled.div`
  margin-top: 30px;
  border-top: 2px solid #88b04b;
  border-bottom: 1px solid #e5e7eb;

  ${mq[3]} {
    margin-top: 16px;
  }
`;

export const InputWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  margin-top: 40px;
  &:last-of-type {
    margin-bottom: 40px;
  }
  &.radio {
    align-items: flex-start;
  }

  ${mq[2]} {
    flex-direction: column;
    align-items: flex-start;
  }
`;
export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 240px);
  &.short {
    width: 220px;
  }

  ${mq[2]} {
    width: 100%;
    margin-top: 10px;
  }
`;
export const ThemeBox = styled.div`
  width: 240px;
`;
export const Theme = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1.5rem;

  ${mq[2]} {
    &.map {
      flex-direction: column;
      align-items: flex-start;
    }
  }
`;

export const Required = styled.span`
  margin-left: 5px;
  font-size: 1.25rem;
  color: #ffc56d;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 6px;
  border: 1px solid #dbdbdb;
  padding-left: 10px;
  font-size: 0.88rem;
`;
export const PriceBox = styled.div`
  border-bottom: 1px solid #e5e7eb;
`;
export const Body_Middle = styled.div``;

export const BoardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 50px;
`;

export const EditorBox = styled.div`
  margin-top: 20px;
  position: relative;
  height: 500px;
`;

export const AvailableTime = styled.div`
  height: 86px;
  margin-top: 100px;
`;

export const SetTimeBox = styled.div`
  width: 351px;
  display: flex;
  margin-top: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const AttachedImg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 50px;
`;

export const Image = styled.div`
  margin-top: 20px;
`;

export const MapBox = styled.div`
  width: 380px;
  height: 220px;

  ${mq[2]} {
    width: 100%;
  }
`;
export const MapDetail = styled.span`
  display: block;
  font-size: 0.88rem;
  margin-left: 20px;
  color: #999;
  line-height: 18px;

  ${mq[2]} {
    margin-left: 0;
    margin-top: 10px;
  }
`;

export const BoardAddress = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const AddressBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 20px;

  ${mq[2]} {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const SearchBox = styled.div`
  width: calc(100% - 380px);
  padding-left: 24px;

  ${mq[2]} {
    width: 100%;
    padding-left: 0;
    margin-top: 20px;
  }
`;

export const ZipcodeWrap = styled.div`
  display: flex;
`;
export const ZipcodeBox = styled.div`
  width: 100px;
`;

export const SearchBtn = styled.button`
  background-color: #111;
  border-radius: 6px;
  border: none;
  font-size: 0.75rem;
  color: #ffffff;
  padding: 0 20px;
  margin-left: 10px;
`;
export const AddressInput = styled.div`
  margin-top: 20px;
`;

export const Body_Bottom = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const BtnBox = styled.div`
  width: 50%;
  &:last-of-type {
    padding-left: 10px;
  }
`;

export const Error = styled.span`
  display: block;
  color: #e31c1c;
  font-size: 0.88rem;
  margin: 10px 0 0 6px;
  &.radio {
    left: 30px;
  }
  &.contents {
    left: 0;
  }
  &.subCategory {
    left: 494px;
  }
`;
export const RadioWrap = styled.div`
  position: relative;
`;
export const RadioBox = styled.div`
  display: flex;
  align-items: center;
  &:last-of-type {
    margin-top: 24px;
  }
`;
export const Label = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
export const Radio = styled.input`
  appearance: none;
  cursor: pointer;
  &::before {
    content: "";
    box-sizing: border-box;
    display: block;
    width: 16px;
    height: 16px;
    margin-right: 14px;
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
