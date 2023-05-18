import { useRecoilState } from "recoil";
import { ModalCancelState } from "../../../../commons/stores";
import UseModal from "../../../../components/commons/hooks/custom/useModal/index";
import ChargeModal from "../../../commons/parts/Modals/Charge/index";
import * as S from "./index.styles";
import { useEffect } from "react";
import PayList from "../../../commons/parts/Point/paylist";
import { useQueryFetchUserPaymentInfo } from "../../../commons/hooks/queries/useQueryFetchUserPaymentInfo";
import { IQuery } from "../../../../commons/types/generated/types";

export default function PaymentPresenter(): JSX.Element {
  const { clickModal, openModal, setOpenModal } = UseModal();
  const [isCance, setIsCancel] = useRecoilState(ModalCancelState);

  useEffect(() => {
    if (isCance) {
      setOpenModal(false);
    }
  }, [isCance]);

  const { data } = useQueryFetchUserPaymentInfo();

  return (
    <>
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
        {data?.fetchUserPaymentInfo.map(el => (
          <PayList el={el} key={el.impUid} />
        ))}
        {/* {new Array(5).fill(1).map(el => (
          <PayList el={el} key={el.impUid} />
        ))} */}
      </S.Wrapper>
    </>
  );
}
