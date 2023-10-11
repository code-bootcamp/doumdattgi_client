import styled from "@emotion/styled";

interface IPropsSelect {
  isStatus: boolean;
}

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px auto 0;
  min-height: 600px;
`;

export const Container = styled.div`
  width: 800px;
`;

export const PageTitle = styled.h1`
  font-size: 36px;
  font-weight: 600;
`;

export const TabBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
`;

export const PageTab = styled.button`
  width: 120px;
  height: 50px;
  color: #aaaaaa;
  font-size: 20px;
  border: none;
  background-color: white;
  cursor: pointer;
  margin: 30px 0;
  :hover {
    color: black;
  }
  color: ${(props: IPropsSelect) => (props.isStatus ? "black" : "#AAAAAA")};
  border-bottom: 2px solid ${props => (props.isStatus ? "black" : "white")};
`;

export const List = styled.div`
  height: 120px;
  border: 1px solid #d0d2de;
  border-radius: 6px;
  padding: 16px;
  display: flex;
  flex-direction: row;
  margin-bottom: 16px;
  cursor: pointer;
`;

export const ListRefuse = styled.div`
  height: 120px;
  border: 1px solid #d0d2de;
  border-radius: 6px;
  padding: 16px;
  display: flex;
  flex-direction: row;
  margin-bottom: 16px;
  cursor: pointer;
  background-color: #f8f8f8;
`;

export const ListLeft = styled.span`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ListStatusFinish = styled.div`
  width: 60px;
  height: 24px;
  border-radius: 12px;
  border: 1px solid #929aa0;
  background-color: #f6f7f9;
  color: #929aa0;
  text-align: center;
  line-height: 24px;
`;

export const ListStatusWaiting = styled.div`
  width: 60px;
  height: 24px;
  border-radius: 12px;
  text-align: center;
  line-height: 24px;
  border: 1px solid #0958d9;
  color: #0958d9;
  background-color: #e6f4ff;
`;

export const ListStatusAccept = styled.div`
  width: 60px;
  height: 24px;
  border-radius: 12px;
  text-align: center;
  line-height: 24px;
  border: 1px solid #389e0d;
  color: #389e0d;
  background-color: #f6ffed;
`;

export const ListStatusRefuse = styled.div`
  width: 60px;
  height: 24px;
  border-radius: 12px;
  text-align: center;
  line-height: 24px;
  border: 1px solid #cf1322;
  color: #cf1322;
  background-color: #fff1f0;
`;

export const ListTitle = styled.div`
  font-size: 24px;
`;

export const ListTitleRefuse = styled.div`
  font-size: 24px;
  color: #666666;
`;

export const ListDate = styled.div`
  font-size: 18px;
  color: #999999;
`;

export const ListRight = styled.span`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
`;

export const UserBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const UserIcon = styled.img`
  width: 26px;
  height: 26px;
  border-radius: 15px;
  margin-right: 6px;
`;

export const UserName = styled.div`
  font-size: 18px;
  color: #333333;
`;

export const ListNone = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
`;
