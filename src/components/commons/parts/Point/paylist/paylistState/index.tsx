import * as S from "./paylistState.styles";

export default function PayState(props) {
  const Component = { key: <div></div> };

  if (
    // 충전을 완료한 경우
    props.el.payment_payment_status === "PAYMENT" &&
    String(props.el.payment_payment_amount)[0] !== "-" &&
    props.arr.includes(props.el.payment_payment_impUid) === false
  ) {
    Component["key"] = (
      <S.Box>
        <S.RefundBtn onClick={props.clickRefund(props.el)}>
          환불요청
        </S.RefundBtn>
        <S.ChargeDone>충전완료</S.ChargeDone>
      </S.Box>
    );
  } else if (
    // 충전 후 환불을 한 경우
    props.el.payment_payment_status === "CANCEL" &&
    String(props.el.payment_payment_amount)[0] === "-"
  ) {
    Component["key"] = <S.RefundDone>환불완료</S.RefundDone>;
  } else if (
    props.el.payment_payment_status === "PAYMENT" &&
    props.arr.filter((el: string) => el === props.el.payment_payment_impUid)
      .length > 0
  ) {
    Component["key"] = <S.ChargeDone>충전완료</S.ChargeDone>;
  } else if (props.el.payment_payment_status === "SELL") {
    Component["key"] = <S.SoldBtn>입금완료</S.SoldBtn>;
  }

  return Component["key"];
}
