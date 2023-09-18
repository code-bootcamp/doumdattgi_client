import styled from "@emotion/styled";
import InfiniteScroll from "react-infinite-scroller";

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
  margin: 90px 0 150px 0;
  min-height: 600px;
`;

export const Container = styled.div`
  width: 800px;
`;

export const MainTitle = styled.div`
  font-size: 36px;
  font-weight: bold;
`;

export const TabBox = styled.div`
  display: flex;
  margin: 40px 0px;
`;

export const Tab = styled.div`
  width: 120px;
  height: 30px;
  display: flex;
  justify-content: center;
  font-size: 20px;
  color: ${(props: IPropsSelect) => (props.isStatus ? "black" : "#aaaaaa")};
  border-bottom: 2px solid ${props => (props.isStatus ? "black" : "none")};
  cursor: pointer;
  :hover {
    color: black;
  }
`;

export const CurrentMileage = styled.div`
  height: 180px;
  background-color: #f2f2f4;
  border-radius: 6px;
  padding: 55px 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 20px;
  margin-bottom: 50px;
`;

export const MileagePoint = styled.div`
  font-size: 36px;
  margin-top: 14px;
  font-weight: 700;
`;

// mileage use page
export const SubTitle = styled.div`
  font-size: 18px;
  margin-bottom: 16px;
`;

export const Contents = styled.div`
  font-size: 14px;
  color: #777777;
  margin-bottom: 5px;
`;

export const CouponWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 50px 0px;
`;

export const Coupon = styled.button<CouponProps>`
  width: 254px;
  height: 330px;
  border-radius: 6px;
  border: 1px solid
    ${props =>
      props.el.select === props.selectedCoupon.split("&")[0]
        ? "#88b04b"
        : "#e5e7eb"};
  background-color: white;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CouponImage = styled.div`
  width: 252px;
  height: 252px;
  background-color: #f4f4f5;
  border-radius: 6px 6px 0px 0px;
`;

export const CouponDetailWrapper = styled.div`
  width: 100%;
  height: calc(100% - 252px);
  padding: 19px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

export const CouponDetail = styled.div`
  font-size: 14px;
`;

// export const List = styled.select`
//   width: 800px;
//   height: 60px;
//   border: 1px solid #e5e7eb;
//   border-radius: 6px;
//   margin: 50px 0px 60px 0px;
//   padding: 0px 20px;
//   display: flex;
//   align-items: center;
//   font-size: 18px;
//   appearance: none;
// `;

export const BoardList = styled.div`
  width: 800px;
  height: 60px;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  margin: 50px 0px 0px 0px;
  padding: 0px 20px;
  display: flex;
  align-items: center;
  font-size: 18px;
  background-color: white;
  cursor: pointer;
`;

export const BtnBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const PurchaseBtn = styled.button`
  width: 348px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  :hover {
    background-color: #88b04b;
    color: white;
  }
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
  padding: 25px 30px 20px 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-bottom: 14px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const HeaderTitle = styled.div`
  font-size: 16px;
`;

export const HeaderDate = styled.div`
  font-size: 16px;
  color: #d7d7d7;
`;

export const BodyPoint = styled.div`
  font-size: 30px;
  font-weight: 700;
`;

// mileage list page

export const Wrapper2 = styled.div`
  /* width: 1200px; */
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
  font-size: 14px;
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
  width: 730px;
  display: flex;
  cursor: pointer;
  padding-bottom: 20px;
`;

export const RightDetailBox = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
`;

export const DetailContents = styled.div`
  width: calc(100% - 150px);
`;

export const MileageDay = styled.div`
  width: 150px;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Day = styled.div`
  font-size: 24px;
  color: #88b04b;
`;

export const Time = styled.div``;

export const ListImage = styled.img`
  width: 270px;
  height: 170px;
  border: 1px solid #e0e1ea;
  border-radius: 3px;
  margin-right: 24px;
  overflow: auto;
`;

export const ListCategory = styled.div`
  color: #333333;
  margin-bottom: 20px;
`;

export const ListTitle = styled.div`
  width: 440px;
  font-size: 18px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 14px;
`;

export const ListDetail = styled.span`
  font-size: 14px;
  color: #929aa0;
  text-align: center;
  line-height: 26px;
  border: 1px solid #929aa0;
  border-radius: 12px;
  background-color: #f6f7f9;
  padding: 6px 8px;
  margin-right: 5px;
`;

export const DivideLine = styled.div`
  border-top: 1px solid #d9d9d9;
  margin: 17px 0px;
`;

export const Remarks = styled.div`
  width: 440px;
  /* height: 36px; */
  color: #888888;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const None = styled.div`
  width: 730px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 150px;
`;
