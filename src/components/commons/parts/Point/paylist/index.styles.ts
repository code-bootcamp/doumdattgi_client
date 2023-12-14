import styled from "@emotion/styled";
import { mq } from "../../../../../commons/libraries/breakPoints";

export const TransferList = styled.div``;

export const TransactionInfo = styled.div`
  width: 800px;
  border: 1px solid #d7d7d7;
  border-radius: 6px;
  margin: 16px 0px;
  padding: 20px;

  ${mq[1]} {
    width: 100%;
  }
`;

export const PayInfoBox = styled.div`
  display: flex;
  align-items: center;
`;

export const PayInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  ${mq[3]} {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Company = styled.span`
  font-size: 1rem;
`;

export const Date = styled.span`
  font-size: 1rem;
  color: #d7d7d7;

  ${mq[3]} {
    margin-top: 10px;
  }
`;

export const TransactInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
`;

export const RefundBox = styled.div`
  width: 160px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Point = styled.span`
  display: block;
  font-size: 1.88rem;
`;

export const Amount = styled.span`
  display: block;
  font-size: 1.88rem;
`;
export const Box = styled.div`
  width: 150px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
