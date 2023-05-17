import styled from "@emotion/styled";

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
`;
