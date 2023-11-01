import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Wrapper = styled.div`
  height: 100%;
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
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-start;
  overflow: auto;
  padding-right: 16px;
  margin-bottom: 24px;
  &::-webkit-scrollbar {
    background: #fff;
    border-radius: 15px;
    width: 12px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #88b04b;
    border-radius: 15px;
    width: 5px;
  }
`;

export const SendingBox = styled.div<{
  me: string | undefined;
  comment: string;
}>`
  width: 100%;
  display: flex;
  ${props =>
    props.me === props.comment
      ? "flex-direction: row-reverse"
      : "flex-direction: column"};
  align-items: ${props =>
    props.me === props.comment ? "flex-end" : "flex-start"};
  margin-top: 12px;
  ${props =>
    props.me === props.comment ? "justify-content: flex-start" : null}
`;

export const SendingBoxWrap = styled.div`
  display: flex;
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
  margin-left: 3px;
`;

export const SenderIcon = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 6px;
`;

export const Date = styled.span<{
  me: string | undefined;
  comment: string;
}>`
  font-size: 14px;
  margin: ${props => (props.me === props.comment ? "0 8px 0 0" : "10px 0 0 50px")};
  color: #888;
`;

export const ChatBox = styled.div`
  border-radius: 10px;
  padding: 10px;
  background-color: #ededed;
`;

export const WrapperFooter = styled.div`
  display: flex;
  align-items: center;
  border-top: 1px solid #d9d9d9;
  padding-top: 24px;
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
export const Relode = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff;
  border-radius: 50%;
  box-shadow: 0px 0px 10px rgba(204, 204, 204, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: absolute;
`;

export const RotateIcon = styled(FontAwesomeIcon)`
  font-size: 18px;
  color: #333;
`;
