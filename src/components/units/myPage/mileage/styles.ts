import styled from "@emotion/styled";
import InfiniteScroll from "react-infinite-scroller";
import { mq } from "../../../../commons/libraries/breakPoints";

interface IPropsSelect {
  isStatus: boolean;
}

interface CouponProps {
  el: {
    select: string;
    day: string;
    price: string;
  };
  selectedCoupon: string;
  onClick: () => void;
}

// mileage page
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px auto 0;
  min-height: 600px;
`;

export const Container = styled.div`
  width: 800px;

  ${mq[1]} {
    width: 100%;
    padding: 0 24px;
  }
  ${mq[3]} {
    padding: 0 16px;
  }
`;

export const MainTitle = styled.div`
  font-size: 1.88rem;
`;

export const TabBox = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin: 30px auto;
`;

export const Tab = styled.li`
  position: relative;
  font-size: 1.13rem;
  padding: 0 20px;
  height: 40px;
  display: flex;
  align-items: center;
  color: ${(props: IPropsSelect) => (props.isStatus ? "black" : "#aaaaaa")};
  cursor: pointer;
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 3px;
    width: 100%;
    background-color: ${props => (props.isStatus ? "black" : "white")};
  }
`;

export const CurrentMileage = styled.div`
  background-color: #f2f2f4;
  border-radius: 6px;
  margin-bottom: 50px;
  padding: 24px;
`;
export const MileageText = styled.p`
  font-size: 1.25rem;
`;
export const MileagePoint = styled.p`
  font-size: 2.25rem;
  margin-top: 14px;
  font-weight: 600;
`;

// mileage use page
export const SubTitle = styled.div`
  font-size: 1.13rem;
  margin-bottom: 16px;
`;

export const Contents = styled.p`
  font-size: 0.88rem;
  line-height: 18px;
  color: #777777;
  margin-bottom: 5px;
  word-break: keep-all;
`;

export const CouponWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 14px;
  margin: 50px 0px;
`;

export const Coupon = styled.button<CouponProps>`
  /* width: 254px;
  height: 330px; */
  border-radius: 6px;
  border: ${props =>
    props.el.select === props.selectedCoupon.split("&")[0]
      ? "2px solid #88b04b"
      : "1px solid #e5e7eb"};
  background-color: white;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CouponImageBox = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1;
  background-color: #f4f4f5;
  border-radius: 6px 6px 0px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const CouponImage = styled.img`
  display: block;
  width: 80%;
`;

export const CouponDetailWrapper = styled.div`
  width: 100%;
  padding: 19px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

export const CouponDay = styled.span`
  font-size: 0.88rem;
`;
export const CouponPrice = styled.p`
  font-size: 1rem;
`;

export const BoardList = styled.div`
  width: 100%;
  height: 60px;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  padding: 0px 20px;
  display: flex;
  align-items: center;
  font-size: 1.13rem;
  background-color: white;
  cursor: pointer;
`;

export const BtnBox = styled.div`
  width: 100%;
  margin-top: 60px;
  display: flex;
  justify-content: center;
`;

export const PurchaseBtn = styled.button<{
  isBoardSelected: boolean;
  isCouponSelected: boolean;
}>`
  width: 350px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.13rem;
  border-radius: 6px;
  border: none;
  cursor: ${props =>
    props.isBoardSelected && props.isCouponSelected
      ? "pointer"
      : "not-allowed"};
  background: ${props =>
    props.isBoardSelected && props.isCouponSelected ? "#88b04b" : "#eee"};
  color: ${props =>
    props.isBoardSelected && props.isCouponSelected ? "#fff" : "#aaa"};
`;

export const ListNone = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
`;

// mileage history page
export const MileageList = styled.div`
  width: 100%;
  height: 120px;
  border: 1px solid #d7d7d7;
  border-radius: 6px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 14px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const HeaderTitle = styled.p`
  font-size: 1rem;
`;

export const HeaderDate = styled.span`
  font-size: 1rem;
  color: #d7d7d7;
`;

export const BodyPoint = styled.p`
  font-size: 1.88rem;
  line-height: 30px;
  font-weight: 500;
`;

// mileage list page

export const Wrapper2 = styled.div`
  display: flex;
  margin: 0px auto;
  justify-content: center;

  height: 100vh;
  overflow: auto;
  &::-webkit-scrollbar {
    background: #fff;
    border-radius: 15px;
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #88b04b;
    border-radius: 15px;
    width: 5px;
  }
`;

export const SubTitle2 = styled.div`
  width: 100px;
  height: 30px;
  font-size: 0.88rem;
  color: #929aa0;
  border: 1px solid #929aa0;
  border-radius: 6px;
  background-color: #f6f7f9;
  padding: 0px 9px;
  text-align: center;
  line-height: 30px;
`;

export const WrapperBody = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
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

export const RightListBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 24px;

  ${mq[2]} {
    margin-bottom: 16px;
  }
  ${mq[4]} {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 40px;
  }
`;

export const RightDetailBox = styled.div`
  width: 70%;
  padding-left: 16px;

  ${mq[2]} {
    width: 60%;
  }
  ${mq[3]} {
    width: 60%;
  }
  ${mq[4]} {
    width: 100%;
    padding: 0 16px;
  }
`;

export const DetailContents = styled.div``;

export const MileageDay = styled.div`
  position: absolute;
  z-index: 999;
  bottom: 16px;
  left: 16px;
`;

export const Day = styled.span`
  font-size: 1.5rem;
  padding: 3px 6px;
  color: #fff;
  background-color: #88b04b;
  display: inline-block;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const Time = styled.span`
  color: #fff;
  margin-top: 6px;
  display: block;
`;

export const ListImageBox = styled.div`
  position: relative;
  overflow: hidden;
  width: 30%;

  &::after {
    display: block;
    content: "";
    width: 100%;
    aspect-ratio: 4 / 3;
    background-color: rgba(0, 0, 0, 0.3);
    position: absolute;
    top: 0;
    border-radius: 3px;
  }

  ${mq[2]} {
    width: 40%;
  }
  ${mq[3]} {
    width: 40%;
  }
  ${mq[4]} {
    width: 100%;
    margin-bottom: 12px;
  }
`;

export const ListImage = styled.img`
  cursor: pointer;
  width: 100%;
  display: block;
  border: 1px solid #e0e1ea;
  border-radius: 3px;
  aspect-ratio: 4 / 3;

  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }

  ${mq[4]} {
    width: 100%;
    height: auto;
  }
`;

export const ListCategory = styled.div`
  color: #333333;
  margin-bottom: 20px;
`;

export const ListTitle = styled.div`
  font-size: 1.13rem;
  word-break: keep-all;
  line-height: 22px;
  margin-bottom: 16px;
  cursor: pointer;

  ${mq[3]} {
    font-size: 1rem;
  }
`;

export const ListDetail = styled.span`
  font-size: 0.88rem;
  color: #929aa0;
  text-align: center;
  line-height: 26px;
  border: 1px solid #929aa0;
  border-radius: 12px;
  background-color: #f6f7f9;
  padding: 6px 8px;
  margin-right: 5px;
`;

export const TagBox = styled.div`
  display: flex;
  & div:last-of-type {
    margin-left: 6px;
  }
`;

export const DivideLine = styled.div`
  border-top: 1px solid #d9d9d9;
  margin: 16px 0px;
`;

export const Remarks = styled.div`
  color: #888888;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
`;

export const None = styled.div`
  width: 730px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 150px;
`;

export const MileageItem = styled.div`
  padding: 6px 0;
`;
