import { getDate } from "../../../../../commons/libraries/getDate";
import { IPropsfetchUserPaymentInfo } from "../../../../units/myPage/point/index.types";
import * as S from "./index.styles";

export default function PayList(props: IPropsfetchUserPaymentInfo) {
  const arr = props.dataArr
    .filter(el => el.status === "CANCEL")
    .map(el => el.impUid);

  return (
    <S.TransferList>
      <S.TransactionInfo>
        <S.PayInfo>
          <S.Company>{props.el?.paymentType}</S.Company>
          <S.Date>{getDate(props.el?.createdAt)}</S.Date>
        </S.PayInfo>
        <S.TransactInfo>
          <S.Point>{`${props.el?.amount} P`}</S.Point>
          <S.Box>
            {String(props.el.amount)[0] === "-" ? (
              <S.RefundDone>환불완료</S.RefundDone>
            ) : arr.filter(el => el === props.el?.impUid).length > 0 ? (
              <S.ChargeDone>충전완료</S.ChargeDone>
            ) : (
              <S.ChargedRefund>
                <S.RefundBtn onClick={props.clickRefund(props.el)}>
                  환불요청
                </S.RefundBtn>
                <S.ChargeDone>충전완료</S.ChargeDone>
              </S.ChargedRefund>
            )}
            <S.Amount>{`${String(props.el?.amount)} 원`}</S.Amount>
          </S.Box>
        </S.TransactInfo>
      </S.TransactionInfo>
    </S.TransferList>
  );
}
