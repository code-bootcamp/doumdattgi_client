import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 620px;
  height: 950px;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
`;

export const WrapperHeader = styled.div`
  padding: 24px 0px 0px 24px;
`;

export const Close = styled.img`
  width: 25px;
  height: 25px;
`;

export const WrapperBody = styled.div`
  height: 100%;
  padding: 24px;
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-start;
`;

export const SendingBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  margin-top: 30px;
`;

export const ReceivingBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  margin-top: 30px;
`;

export const Sender = styled.div`
  margin-bottom: 10px;
`;

export const SenderIcon = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50px;
  margin: 0px 10px 10px 0px;
`;

export const Date = styled.div`
  font-size: 14px;
  margin: 0px 10px;
`;

export const ChatBox = styled.div`
  border-radius: 10px;
  padding: 10px;
  background-color: #d9d9d9;
`;

export const WrapperFooter = styled.div`
  display: flex;
  align-items: center;
  padding: 24px;
  height: 110px;
  border-top: 1px solid #d9d9d9;
`;

export const SendingBtn = styled.button`
  width: 70px;
  height: 50px;
  border: none;
  background-color: black;
  color: white;
  border-radius: 6px;
  margin-left: 14px;
`;
