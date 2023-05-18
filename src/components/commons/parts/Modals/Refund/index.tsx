import { Modal } from "antd";
import * as S from "./refund.styles";
import { useMutationCancelPointTransaction } from "../../../hooks/mutations/useMutationCancelPointTransaction";
import { refetchAtom } from "../../../../../commons/stores";
import { useRecoilValue } from "recoil";
import { IPropsRefund } from "./refund.types";

export default function RefundPoint(props: IPropsRefund) {
  const refetch = useRecoilValue(refetchAtom);

  const [cancelPointTransaction] = useMutationCancelPointTransaction();

  const cancelRefund = () => {
    props.setIsRefund(false);
  };

  const GotoRefund = async () => {
    try {
      const result = await cancelPointTransaction({
        variables: {
          impUid: props.refundInfo[0],
          paymentType: props.refundInfo[1]
        }
      });
      alert("환불성공");
      props.setIsRefund(false);
      refetch();
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };

  return (
    <Modal
      className="RefundModal"
      open={props.isRefund}
      onCancel={cancelRefund}
      footer={null}
    >
      <S.Page>
        <S.Title>정말로 환불하시겠습니까?</S.Title>
        <S.RefundBtn onClick={GotoRefund}>환불하기</S.RefundBtn>
      </S.Page>
    </Modal>
  );
}
