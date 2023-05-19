import styled from "@emotion/styled";

export const TransferList = styled.div``;

export const TransactionInfo = styled.div`
  width: 800px;
  height: 120px;
  border: 1px solid #d7d7d7;
  border-radius: 6px;
  margin: 16px 0px;
  padding: 0px 30px;
`;

export const PayInfo = styled.div`
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 20px;
`;

export const Company = styled.span`
  font-size: 16px;
  font-family: "Arita-dotum4.0";
`;

export const Date = styled.span`
  font-family: "Arita-dotum4.0";
  font-size: 16px;
  color: #d7d7d7;
`;

export const TransactInfo = styled.div`
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Box = styled.div`
  width: 350px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export const RefundBtn = styled.button`
  width: 70px;
  height: 36px;
  border-radius: 6px;
  border: none;
  background-color: #ff6b6b;
  color: white;
`;

export const RefundBox = styled.div`
  width: 160px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ChargeDone = styled.div`
  width: 70px;
  height: 36px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  border: none;
  background-color: #389e0d;
  color: white;
`;

export const RefundDone = styled.div`
  width: 70px;
  height: 36px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  border: none;
  background-color: black;
  color: white;
`;

export const Point = styled.span`
  font-family: "Arita-dotum4.0";
  font-size: 30px;
`;

export const Amount = styled.span`
  font-family: "Arita-dotum4.0";
  width: 140px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  font-size: 30px;
  margin-left: 30px;
`;
