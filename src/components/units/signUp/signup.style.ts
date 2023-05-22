import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 580px;
  border: none;
  display: flex;
  flex-direction: column;
  padding: 90px 120px;
  border-radius: 20px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  margin: 90px auto;
`;

export const Title = styled.div`
  width: 100%;
  font-size: 36px;

  margin-bottom: 30px;
`;

export const SubTitle = styled.div`
  font-size: 14px;
  margin-top: 20px;
`;

export const AuthBtn = styled.button`
  width: 100%;
  height: 42px;
  font-size: 16px;
  color: #bec3c7;
  background-color: #f6f7f9;
  border: 1px solid #dddfe3;
  border-radius: 6px;
  margin: 5px 0px 10px 0px;
  cursor: pointer;
`;

export const SubTitleDetail = styled.div`
  color: #818a91;
  font-size: 14px;
  margin: 5px 0px;
`;

export const Footer = styled.div`
  width: 100%;
  font-size: 14px;
  text-align: center;
  margin-top: 70px;
`;

export const Login = styled.a`
  text-decoration: underline;
  margin-left: 10px;
  cursor: pointer;
  font-size: 14px;
`;

export const Error = styled.div`
  width: 100%;
  height: 20px;
  font-size: 13px;
  margin-top: 5px;
  color: red;
`;

export const InputBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
export const ButtonBox = styled.div`
  width: 100px;
  margin-left: 8px;
`;

export const Timer = styled.span`
  display: block;
  color: #cf1322;
  margin-left: 8px;
`;
