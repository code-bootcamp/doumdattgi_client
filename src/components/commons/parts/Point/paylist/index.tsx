import { getDate } from "../../../../../commons/libraries/getDate";
import * as S from "./index.styles";

interface IPropsfetchUserPaymentInfo {
  el: {
    paymentType: string,
    createdAt: string,
    amount: number

  }
}

export default function PayList(props: IPropsfetchUserPaymentInfo) {
  return (
    <S.TransferList>
      <S.TransactionInfo>
        <S.PayInfo>
          <S.Company>{props.el?.paymentType}</S.Company>
          <S.Date>{getDate(props.el?.createdAt)}</S.Date>
        </S.PayInfo>
        <S.TransactInfo>
          <S.Point>100,000 P</S.Point>
          <S.Box>
            <S.RefundBtn>환불요청</S.RefundBtn>
            <S.Amount>{`${String(props.el?.amount)}원`}</S.Amount>
          </S.Box>
        </S.TransactInfo>
      </S.TransactionInfo>
    </S.TransferList>
  );
}
