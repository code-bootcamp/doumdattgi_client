import styled from "@emotion/styled";

export const FlexBox = styled.div`
  width: 35vw;
  height: calc(100vh - 122px);
  position: absolute;
  z-index: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 3px solid green;
`;

export const Wrapper = styled.div`
  width: 35vw;
  height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 6px;
  background-color: white;
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
  cursor: pointer;
`;

export const Arrow = styled.div`
  width: 70px;
  height: 150px;
  border-radius: 0px 15px 15px 0px;
  font-size: 40px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 10px;
  color: #e6e6e6;
  background-color: #bdbdbd;
  border: none;
`;
