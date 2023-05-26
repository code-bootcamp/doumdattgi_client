import { useRouter } from "next/router";
import { getDateTime } from "../../../../../commons/libraries/getDate";
import { IPropsfetchUserPaymentInfo } from "../../../../units/myPage/point/index.types";
import * as S from "./index.styles";
import PayState from "./paylistState";

export default function PayList(props: IPropsfetchUserPaymentInfo) {
  const router = useRouter();

  const arr = props.dataArr
    .filter(el => el.payment_status === "CANCEL")
    .map(el => el.payment_impUid);

  return (
    <S.TransferList>
      <S.TransactionInfo>
        <S.PayInfo>
          <S.Company>{props.el?.payment_type}</S.Company>
          <S.Date>{getDateTime(props.el?.payment_createdAt)}</S.Date>
        </S.PayInfo>
        <S.TransactInfo>
          <S.Point>{`${props.el?.payment_amount} P`}</S.Point>
          <S.Box>
            <PayState
              el={props.el}
              arr={arr}
              clickRefund={props.clickRefund}
              payment_impUid={""}
              payment_type={""}
              payment_createdAt={""}
              payment_amount={0}
            />
            <S.Amount>{`${String(props.el?.payment_amount)} 원`}</S.Amount>
          </S.Box>
        </S.TransactInfo>
      </S.TransactionInfo>
    </S.TransferList>
  );
}
