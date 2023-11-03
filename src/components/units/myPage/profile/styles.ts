import styled from "@emotion/styled";
import { mq } from "../../../../commons/libraries/breakPoints";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  width: 1140px;
  display: flex;

  ${mq[0]} {
    width: 100%;
    padding: 0 24px;
  }
  ${mq[2]} {
    padding: 0 16px;
  }
`;

export const ProfileDrawerBox = styled.div`
  display: none;
  ${mq[1]} {
    display: block;
  }
`;

export const WrapperLeft = styled.aside`
  width: 38%;
  max-width: 390px;
  padding: 90px 40px;
  background-color: #fff;
  box-shadow: 10px 0px 10px rgba(204, 204, 204, 0.25);

  ${mq[0]} {
    padding: 90px 24px 0 0;
  }
  ${mq[1]} {
    display: none;
  }
`;

export const UserBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 30px;
`;

export const UserIcon = styled.img`
  width: 130px;
  height: 130px;
  border-radius: 50%;
`;

export const UserName = styled.div`
  font-size: 24px;
  font-weight: 600;
  margin-top: 40px;
`;

export const UserIntroduce = styled.div`
  font-size: 16px;
  color: #888888;
  line-height: 20px;
  margin-top: 24px;
`;

export const ProfileEdit = styled.span`
  display: inline-block;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 30px;
  border-bottom: 1px solid #111;
`;

export const DivideLine = styled.div`
  border-bottom: 1px solid #dddfe3;
`;
export const ContentWrap = styled.div`
  padding-bottom: 60px;
  &.first {
    padding-top: 30px;
  }
`;
export const SubTitle = styled.span`
  display: inline-block;
  padding: 6px 8px;
  background-color: #f6f7f9;
  border: 1px solid #929aa0;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  color: #929aa0;
`;
export const PortfolioLink = styled.span`
  display: inline-block;
  font-size: 16px;
  margin-top: 30px;
  border-bottom: 1px solid #000;
  cursor: pointer;
  line-height: 20px;
`;
export const SlotWrap = styled.div`
  padding-bottom: 60px;
`;
export const SlotBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;

export const Slot = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #888;
  background-color: #fff;
  border: 2px solid #d9d9d9;
  padding: 8px 0;
  border-radius: 6px;
  width: calc(100% / 3);
  margin-left: 5px;
  text-align: center;

  &:first-of-type {
    margin-left: 0;
  }
`;

export const SlotDisable = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #888;
  background-color: #eaeaea;
  border: 2px solid #a9a9a9;
  padding: 8px 30px;
  border-radius: 6px;
`;

export const StatisticsWrap = styled.div`
  display: flex;
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
  font-weight: 600;
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
export const MobileTitleBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const ProfileTitle = styled.h1`
  display: none;
  font-size: 30px;
  line-height: 40px;
  padding-left: 40px;

  ${mq[1]} {
    display: block;
  }
`;

export const WrapperRight = styled.div`
  display: flex;
  flex-direction: column;
  padding: 90px 0px;
  background-color: white;
  margin-left: 40px;
  width: 62%;

  ${mq[1]} {
    width: 100%;
    margin-left: 0;
    padding: 50px 0;
  }
`;

export const RightTitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${mq[3]} {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const CreateLink = styled.div`
  padding: 12px 20px;
  background-color: black;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  cursor: pointer;

  &.mobile {
    display: none;
    margin-top: 0;
  }

  ${mq[3]} {
    display: none;
    &.mobile {
      display: flex;
      margin-top: 0;
    }
  }
`;
export const CreateText = styled.span`
  display: inline-block;
  color: #ffffff;
  font-size: 14px;
  line-height: 16px;
`;
export const CreateIcon = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 5px;
  display: inline-block;
`;
export const ListBtn = styled.button`
  display: inline-block;
  padding: 6px 8px;
  background-color: #f6f7f9;
  border: 1px solid #929aa0;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  color: #929aa0;
  cursor: pointer;
  margin-left: 6px;
  &:first-of-type {
    margin-left: 0;
  }
  &.selected {
    background-color: #111;
  }
`;
