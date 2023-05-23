import { useRecoilState, useSetRecoilState } from "recoil";
import { ModalCancelState, refetchAtom } from "../../../../commons/stores";
import UseModal from "../../../../components/commons/hooks/custom/useModal/index";
import ChargeModal from "../../../commons/parts/Modals/Charge/index";
import * as S from "./index.styles";
import { MouseEvent, useEffect, useState } from "react";
import PayList from "../../../commons/parts/Point/paylist";
import { useQueryFetchUserPaymentInfo } from "../../../commons/hooks/queries/useQueryFetchUserPaymentInfo";
import RefundPoint from "../../../commons/parts/Modals/Refund";
import { IValueArgs } from "./index.types";
import { useQueryFetchLoginUser } from "../../../commons/hooks/queries/useQueryFetchLoginUser";

export default function PaymentPresenter(): JSX.Element {
  const { clickModal, openModal, setOpenModal } = UseModal();

  const [isCancel, setIsCancel] = useRecoilState(ModalCancelState);
  const setRefetch = useSetRecoilState(refetchAtom);

  const [isRefund, setIsRefund] = useState(false);
  const [refundInfo, setRefundInfo] = useState(["", ""]);
  const [status, setStatus] = useState([
    { title: "전체", key: 0, isSelected: false },
    { title: "대기중", key: 1, isSelected: false },
    { title: "진행중", key: 2, isSelected: false },
    { title: "종료", key: 3, isSelected: false }
  ]);

  const { data: UserData } = useQueryFetchLoginUser();
  const { data, refetch } = useQueryFetchUserPaymentInfo();

  const fetchPayment = data?.fetchPayments.map(el => el);
  const dataArr = data?.fetchPayments ?? [];

  useEffect(() => {
    if (isCancel) {
      setOpenModal(false);
    }
  }, [isCancel]);

  // 결제내역 refetch
  useEffect(() => {
    setRefetch(() => refetch);
  }, [refetch, setRefetch]);

  // 환불요청
  const clickRefund = (value: IValueArgs) => () => {
    const Info = [...refundInfo];

    Info[0] = value.payment_payment_impUid;
    Info[1] = value.payment_payment_type;
    console.log("hi");

    setIsRefund(true);
    setRefundInfo(Info);
  };

  // 네비게이션 바 선택유무 체크
  const selectState = (e: MouseEvent<HTMLDivElement>) => {
    const selectedId = e.currentTarget.id;

    setStatus(prev =>
      prev.map(el => ({ ...el, isSelected: el.title === selectedId }))
    );
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
        <S.SelectBar>
          {status.map(el => (
            <S.selectOption
              isSelect={el.isSelected}
              id={el.title}
              key={el.key}
              onClick={selectState}
            >
              {el.title}
            </S.selectOption>
          ))}
        </S.SelectBar>
        <S.HoldingBox>
          <S.HoldTitle>보유포인트</S.HoldTitle>
          <S.CurrentHold>
            <S.HoldPoint>{`${
              UserData?.fetchLoginUser.user_point ?? "0"
            } P`}</S.HoldPoint>
            <S.ChargeBtn onClick={clickModal}>포인트 충전</S.ChargeBtn>
          </S.CurrentHold>
        </S.HoldingBox>
        {fetchPayment?.map(el => (
          <PayList
            dataArr={dataArr}
            clickRefund={clickRefund}
            el={el}
            key={el.payment_payment_id}
          />
        ))}
      </S.Wrapper>
    </>
  );
}
