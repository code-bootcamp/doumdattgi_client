import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  display: flex;
  margin: 0px auto;
  justify-content: center;
`;

export const WrapperLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 90px 40px 90px 0px;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.05);
`;

export const UserBox = styled.div`
  width: 310px;
  text-align: center;
  border-bottom: 1px solid #d9d9d9;
  margin-bottom: 20px;
`;

export const UserIcon = styled.img`
  width: 130px;
  height: 130px;
  border-radius: 50%;
  margin-bottom: 40px;
`;

export const UserName = styled.div`
  font-size: 24px;
`;

export const UserIntroduce = styled.div`
  font-size: 16px;
  color: #888888;
  margin: 24px 0px 40px 0px;
`;

export const ProfileEdit = styled.div`
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 30px;
`;

export const LeftBody = styled.div`
  width: 310px;
  display: flex;
  flex-direction: column;
`;

export const PortfolioLink = styled.div`
  font-size: 18px;
  text-decoration: underline;
  margin: 30px 0px 60px 0px;
`;

export const SlotBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Slot = styled.div`
  width: 100px;
  height: 36px;
  border: 2px solid #d9d9d9;
  border-radius: 6px;
  margin: 30px 0px 60px 0px;
  color: #888888;
  text-align: center;
  line-height: 36px;
`;

export const SlotDisable = styled.div`
  width: 100px;
  height: 36px;
  border: 2px solid #a9a9a9;
  border-radius: 6px;
  margin: 30px 0px 60px 0px;
  color: #a9a9a9;
  text-align: center;
  line-height: 36px;
  background-color: #eaeaea;
`;

export const Statistics = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 30px;
`;

export const StatisticsBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StatisticsNum = styled.div`
  font-size: 20px;
  height: 70px;
  line-height: 70px;
  text-align: center;
`;

export const TierIcon = styled.img`
  width: 70px;
  height: 70px;
`;

export const StatisticsTitle = styled.div`
  color: #666666;
  margin-top: 33px;
  text-align: center;
`;

// 오른쪽

export const SubTitle = styled.div`
  width: 100px;
  height: 30px;
  font-size: 14px;
  color: #929aa0;
  border: 1px solid #929aa0;
  border-radius: 6px;
  background-color: #f6f7f9;
  padding: 0px 9px;
  text-align: center;
  line-height: 30px;
`;

export const WrapperRight = styled.div`
  display: flex;
  flex-direction: column;
  padding: 90px 0px 90px 0px;
  background-color: white;
  margin-left: 40px;
`;

export const RightTitleBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const CreateLink = styled.div`
  width: 180px;
  height: 42px;
  color: #ffffff;
  background-color: black;
  border-radius: 6px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const CreateIcon = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 5px;
`;

export const ListBtn = styled.button`
  width: 100px;
  height: 30px;
  font-size: 14px;
  color: #929aa0;
  border: 1px solid #929aa0;
  border-radius: 6px;
  background-color: #f6f7f9;
  padding: 0px 9px;
  text-align: center;
  line-height: 30px;
  cursor: pointer;
  margin-right: 10px;
`;
