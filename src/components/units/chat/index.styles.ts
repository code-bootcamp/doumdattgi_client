import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  background-color: #fafafa;
`;

export const ListBox = styled.div`
  margin-top: 20px;
`;

export const MessageList = styled.div`
  width: 250px;
  height: 520px;
  overflow: auto;
`;

export const ListTitle = styled.span`
  font-size: 20px;
  display: inline-block;
  margin-bottom: 16px;
`;

export const List = styled.div`
  width: 230px;
  height: 80px;
  border-radius: 6px;
  border: 1px solid #d9d9d9;
  background: #f2f2f3;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 16px;
  margin-bottom: 8px;
`;

export const ProfileImg = styled.img`
  width: 48px;
  height: 48px;
`;

export const InfoBox = styled.div`
  width: calc(100% - 58px);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px 0px;
`;

export const NameAndDate = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const NickName = styled.span`
  font-size: 14px;
`;

export const Date = styled.span`
  font-size: 12px;
  color: #a1a1a1;
`;

export const Content = styled.div`
  font-size: 12px;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const MessageContent = styled.div`
  width: 609px;
  height: 963px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0px 16px;
  border-radius: 6px;
  border: 1px solid #d9d9d9;
  background: #fff;
  margin-top: 56px;
`;

export const MsgTop = styled.div`
  height: 72px;
  display: flex;
  align-items: center;
  padding: 0px 16px;
  border-bottom: 1px solid #d9d9d9;
`;

export const MsgImg = styled.img`
  width: 40px;
  height: 40px;
`;

export const MsgInfo = styled.span`
  margin-left: 16px;
  font-size: 16px;
`;

export const MsgMiddle = styled.div``;

export const MsgBottom = styled.div`
  height: 82px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 16px;
  border-top: 1px solid #d9d9d9;
`;

export const TextArea = styled.input`
  width: 481px;
  height: 50px;
  padding-left: 16px;
  border-radius: 6px;
  border: 2px solid #d9d9d9;

  ::placeholder {
    color: #d9d9d9;
  }
`;

export const SendBtn = styled.button`
  width: 80px;
  height: 50px;
  border-radius: 6px;
  border: none;
  background: #88b04b;
  color: white;
`;

export const RecipientInfo = styled.div`
  width: 250px;
  height: 370px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 56px;
`;

export const RecipientBox = styled.div`
  width: 250px;
  height: 242px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 40px 0px;
  border-radius: 6px;
  border: 1px solid #e5e7eb;
  background-color: white;
`;

export const RecipientImg = styled.img`
  width: 120px;
  height: 120px;
`;

export const RecipientName = styled.span`
  font-size: 18px;
`;

export const ApplyBtn = styled.button`
  width: 250px;
  height: 50px;
  border-radius: 6px;
  border: 1px solid #88b04b;
  background: #fff;
  color: #88b04b;
`;

export const CancelChatBtn = styled.button`
  width: 250px;
  height: 50px;
  background: none;
  color: #ef4444;
  font-size: 18px;
  border: none;
`;
