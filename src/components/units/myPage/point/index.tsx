import { useRecoilState, useSetRecoilState } from "recoil";
import { ModalCancelState, refetchAtom } from "../../../../commons/stores";
import UseModal from "../../../../components/commons/hooks/custom/useModal/index";
import ChargeModal from "../../../commons/parts/Modals/Charge/index";
import * as S from "./index.styles";
import { MouseEventHandler, useEffect, useState } from "react";
import PayList from "../../../commons/parts/Point/paylist";
import { useQueryFetchUserPaymentInfo } from "../../../commons/hooks/queries/useQueryFetchUserPaymentInfo";
import RefundPoint from "../../../commons/parts/Modals/Refund";
import { IValueArgs } from "./index.types";

export default function PaymentPresenter(): JSX.Element {
  const { clickModal, openModal, setOpenModal } = UseModal();

  const [isCance, setIsCancel] = useRecoilState(ModalCancelState);
  const setRefetch = useSetRecoilState(refetchAtom);

  const [isRefund, setIsRefund] = useState(false);
  const [refundInfo, setRefundInfo] = useState(["", ""]);

  const { data, refetch } = useQueryFetchUserPaymentInfo();
  const fetchPayment = data?.fetchUserPaymentInfo.map(el => el).reverse();
  const dataArr = data?.fetchUserPaymentInfo ?? [];

  useEffect(() => {
    if (isCance) {
      setOpenModal(false);
    }
  }, [isCance]);

  // 결제내역 refetch
  useEffect(() => {
    setRefetch(() => refetch);
  }, [refetch, setRefetch]);

  // 환불요청
  const clickRefund = (value: IValueArgs) => () => {
    const Info = [...refundInfo];

    Info[0] = value.impUid;
    Info[1] = value.paymentType;
    console.log("hi");

    setIsRefund(true);
    setRefundInfo(Info);
  };

  return (
    <>
      <RefundPoint
        refundInfo={refundInfo}
        setIsRefund={setIsRefund}
        isRefund={isRefund}
      />
      <ChargeModal openModal={openModal} setOpenModal={setOpenModal} />
      <S.Wrapper>
        <S.Title>포인트</S.Title>
        <S.HoldingBox>
          <S.HoldTitle>보유포인트</S.HoldTitle>
          <S.CurrentHold>
            <S.HoldPoint>0P</S.HoldPoint>
            <S.ChargeBtn onClick={clickModal}>포인트 충전</S.ChargeBtn>
          </S.CurrentHold>
        </S.HoldingBox>
        {fetchPayment?.map(el => (
          <PayList
            dataArr={dataArr}
            clickRefund={clickRefund}
            el={el}
            key={el.id}
          />
        ))}
      </S.Wrapper>
    </>
  );
}
