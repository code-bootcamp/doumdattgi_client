import UseModal from "../../../../components/commons/hooks/custom/useModal/index";
import ChargeModal from "../../../commons/parts/Modals/Charge/index";
import * as S from "./index.styles";

export default function PaymentPresenter(): JSX.Element {
  const { clickModal, openModal, setOpenModal } = UseModal();

  console.log(openModal);

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
        <S.TransferList>
          {new Array(5).fill(1).map((_, idx) => (
            <S.TransactionInfo key={idx}>
              <S.PayInfo>
                <S.Company>카카오페이</S.Company>
                <S.Date>2023. 05. 12 12:08</S.Date>
              </S.PayInfo>
              <S.TransactInfo>
                <S.Point>100,000 P</S.Point>
                <S.Amount>100,000 원</S.Amount>
              </S.TransactInfo>
            </S.TransactionInfo>
          ))}
        </S.TransferList>
      </S.Wrapper>
    </>
  );
}
