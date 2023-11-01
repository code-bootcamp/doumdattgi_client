import styled from "@emotion/styled";
import { mq } from "../../../commons/libraries/breakPoints";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px 0 150px 0;
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

export const Title = styled.h1`
  font-size: 30px;
  line-height: 34px;
  font-weight: 600;
  word-break: keep-all;
`;
export const Desc = styled.p`
  color: #888;
  font-size: 14px;
  line-height: 18px;
  margin-top: 16px;
`;
export const Highlight = styled.span`
  font-size: 30px;
  font-weight: 600;
  color: #88b04b;
  padding: 0 5px;
`;

export const DivideLine = styled.div`
  border-top: 2px solid #88b04b;
  margin: 30px 0px;
`;

export const SubTitle = styled.div`
  width: 100%;
  font-size: 24px;
  margin: 40px 0px 20px 0;
`;

export const SubTitle2 = styled.span`
  font-size: 24px;
  margin: 20px 0px;
  color: #ffc56d;
`;
export const EditorBox = styled.div`
  height: 500px;
`;

export const PaymentBox = styled.div``;

export const InputWrap = styled.div`
  position: relative;
`;
export const InputBox = styled.div`
  width: 250px;
`;

export const PaymentIndex1 = styled.div`
  font-size: 60px;
  margin-right: 20px;
`;

export const PaymentIndex2 = styled.div`
  font-size: 30px;
  margin-right: 20px;
`;

export const Time = styled.input`
  width: 120px;
  height: 70px;
  font-size: 60px;
  border-radius: 5px;
  padding-right: 10px;
  margin-right: 20px;
  text-align: right;
  border: 2px solid #dbdbdb;
`;

export const BtnBox = styled.div`
  display: flex;
  margin-top: 60px;
`;

export const Between = styled.div`
  width: 24px;
`;

export const Error = styled.span`
  display: block;
  position: absolute;
  top: calc(100% + 10px);
  color: red;
  font-size: 16px;
`;
