import styled from "@emotion/styled";

interface IRefundProps {
  isOkRefund: boolean;
}

export const ChargeDone = styled.div`
  padding: 6px 8px;
  font-size: 0.88rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  margin-left: 10px;
  border: none;
  background-color: #389e0d;
  color: white;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const RefundDone = styled.div`
  padding: 6px 8px;
  font-size: 0.88rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  margin-left: 10px;
  border: none;
  background-color: black;
  color: white;
`;

export const ChargedRefund = styled.div`
  padding: 6px 8px;
  font-size: 0.88rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const RefundBtn = styled.button`
  padding: 6px 8px;
  font-size: 0.88rem;
  border-radius: 6px;
  border: none;
  background-color: ${(props: IRefundProps) =>
    props.isOkRefund ? "#bdbdbd" : "#ff6b6b"};
  color: white;
  margin-left: 10px;
`;

export const SoldBtn = styled.button`
  padding: 6px 8px;
  font-size: 0.88rem;
  border-radius: 6px;
  border: none;
  background-color: skyblue;
  color: white;
  margin-left: 10px;
`;

export const Request_BuyBtn = styled.button`
  padding: 6px 8px;
  font-size: 0.88rem;
  border-radius: 6px;
  border: none;
  background-color: #ac58fa;
  color: white;
  margin-left: 10px;
`;

export const Request_RefundBtn = styled.button`
  border-radius: 6px;
  border: none;
  background-color: #ff8000;
  color: white;
  margin-left: 10px;
`;
