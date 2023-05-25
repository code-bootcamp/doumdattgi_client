import styled from "@emotion/styled";

interface IPropsSelect {
  isSelect: boolean;
}

export const Wrapper = styled.div`
  width: 800px;
  margin: 0 auto;
  margin-top: 90px;
  margin-bottom: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  width: 800px;
  font-size: 36px;
  margin-bottom: 30px;
`;

export const SelectBar = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: 40px;
`;

export const selectOption = styled.div`
  width: 120px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: ${(props: IPropsSelect) => (props.isSelect ? "black" : "#AAAAAA")};
  border-bottom: 2px solid ${props => (props.isSelect ? "black" : "white")};
  cursor: pointer;
`;

export const HoldingBox = styled.div`
  width: 800px;
  height: 180px;
  margin-bottom: 14px;
  padding: 0px 30px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  background-color: #f2f2f4;
`;

export const HoldTitle = styled.div`
  font-family: "Arita-dotum4.0";
  font-size: 20px;
  margin-top: 30px;
`;

export const CurrentHold = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 22px;
`;

export const HoldPoint = styled.span`
  font-family: "Arita-dotum4.0";
  font-size: 36px;
`;

export const ChargeBtn = styled.button`
  width: 160px;
  height: 48px;
  border-radius: 30px;
  font-family: "Arita-dotum4.0";
  font-size: 18px;
  background-color: #111111;
  color: white;
  cursor: pointer;
`;
