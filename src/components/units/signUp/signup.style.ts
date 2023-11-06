import styled from "@emotion/styled";
import { mq } from "../../../commons/libraries/breakPoints";

export const Wrapper = styled.div`
  background-color: #fafafa;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 80px 0;

  ${mq[3]} {
    padding: 50px 16px;
  }
`;
export const Container = styled.div`
width: 400px;
  border: none;
  padding: 60px;
  border-radius: 20px;
  background-color: #fff;
  border: 1px solid #efefef;

  ${mq[3]} {
    width: 100%;
  }
`;

export const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 30px;
`;

export const SignupWrap = styled.div`
  margin-top: 60px;
  .first {
    margin-top: 0;
  }
`;

export const SignupBox = styled.div`
  margin-top: 30px;
  position: relative;
`;

export const SubTitle = styled.span`
  font-size: 14px;
  font-weight: 600;
  display: block;
  margin-bottom: 10px;
`;

export const AuthBtn = styled.button<{
  isActive: boolean;
}>`
  width: 100%;
  height: 42px;
  font-size: 14px;
  font-weight: 600;
  color: ${props => (props.isActive ? "#fff" : "#bec3c7")};
  background-color: ${props => (props.isActive ? "#88b04b" : "#f6f7f9")};
  border: ${props => (props.isActive ? "none" : "1px solid #dddfe3")};
  border-radius: 6px;
  cursor: pointer;
  margin-top: 10px;
`;

export const SubTitleDetail = styled.div`
  color: #818a91;
  word-break: keep-all;
  line-height: 18px;
  font-size: 14px;
  margin-bottom: 16px;
`;

export const Footer = styled.div`
  width: 100%;
  font-size: 14px;
  text-align: center;
  margin-top: 60px;
`;

export const Login = styled.a`
  text-decoration: none;
  border-bottom: 1px solid #111;
  margin-left: 10px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
`;

export const Error = styled.span`
  position: absolute;
  display: block;
  font-size: 14px;
  color: #e31c1c;
  top: calc(100% + 8px);
`;

export const InputBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
export const ButtonBox = styled.div`
  width: 120px;
  margin-left: 8px;
`;

export const Timer = styled.span`
  display: block;
  color: #cf1322;
  margin-left: 8px;
`;

export const SubmitBtn = styled.div`
  margin-top: 60px;
`;
