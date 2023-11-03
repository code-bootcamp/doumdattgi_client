import styled from "@emotion/styled";

// amount 타입 정의
interface IProps {
  amount: string;
  isSelect: string;
}

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Title = styled.span`
  font-weight: 600;
  font-size: 20px;
  padding-bottom: 30px;
`;

export const OptionBox = styled.div`
  width: 100%;
  padding-top: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const Option = styled.label`
  display: flex;
  justify-content: flex-start;
`;

export const PayMethod = styled.span`
  margin-left: 8px;
`;

export const ChargeBtn = styled.button`
  width: 100%;
  height: 40px;
  font-weight: 500;
  font-size: 16px;
  background-color: ${(props: IProps) =>
    Number(props.amount) !== 0 && props.isSelect !== ""
      ? "#88b04b"
      : "#bdbdbd"};
  color: white;
  border: none;
  border-radius: 6px;
  margin-top: 20px;
`;
