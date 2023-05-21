import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 800px;
  margin: 0px auto;
  padding: 90px 0px;
`;

export const PageTitle = styled.div`
  font-size: 36px;
  font-weight: bold;
`;

export const TabBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  line-height: 50px;
`;

export const PageTab = styled.button`
  width: 120px;
  height: 50px;
  color: #aaaaaa;
  font-size: 20px;
  border: none;
  background-color: white;
  margin: 60px 0px 40px 0px;
  cursor: pointer;
  :active {
    color: black;
    border-bottom: 3px solid black;
  }
`;

export const List = styled.div`
  height: 120px;
  border: 1px solid #d0d2de;
  border-radius: 6px;
  padding: 12px;
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;

  /* // 거절
  background-color: #f8f8f8; */
`;

export const ListLeft = styled.span`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ListStatus = styled.div`
  width: 48px;
  height: 24px;
  border-radius: 12px;
  border: 1px solid #929aa0;
  background-color: #f6f7f9;
  color: #929aa0;
  text-align: center;
  line-height: 24px;

  /* // 대기중
  border: 1px solid #0958d9;
  color: #0958d9;
  background-color: #e6f4ff; */

  /* // 진행중
  border: 1px solid #389e0d;
  color: #389e0d;
  background-color: #f6ffed; */

  /* // 거절
  border: 1px solid #cf1322;
  color: #cf1322;
  background-color: #fff1f0; */
`;

export const ListTitle = styled.div`
  font-size: 24px;

  /* // 거절
  color: #666666; */
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
