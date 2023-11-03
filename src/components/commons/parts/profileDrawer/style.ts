import styled from "@emotion/styled";
import { mq } from "../../../../commons/libraries/breakPoints";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Close = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 16px;
  right: 16px;
`;
export const CloseIcon = styled(FontAwesomeIcon)`
  font-size: 24px;
  color: #333;
`;
export const WrapperLeft = styled.div`
  width: 100%;
  padding-top: 50px;
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
  line-height: 20px;
  cursor: pointer;
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

export const NavIcon = styled.div`
  display: none;
  cursor: pointer;
  position: absolute;
  left: 24px;
  top: 134px;

  ${mq[1]} {
    display: block;
    height: 22px;
    width: 28px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  ${mq[2]} {
    left: 16px;
  }
`;
export const line = styled.div<{
  isOpen: boolean;
}>`
  display: block;
  height: 3px;
  width: 100%;
  border-radius: 10px;
  background: #444;
  transition: transform 0.2s ease-in-out;
  &.line1 {
    transform-origin: 0% 0%;
    transform: ${props => (props.isOpen ? "rotate(45deg)" : "rotate(0)")};
  }
  &.line2 {
    transform: ${props => (props.isOpen ? "scaleY(0)" : "scaleY(1)")};
  }
  &.line3 {
    transform-origin: 0% 100%;
    transform: ${props => (props.isOpen ? "rotate(-45deg)" : "rotate(0)")};
  }
`;
