import { Modal } from "antd";
import * as S from "./refund.styles";
import { useMutationCancelPayment } from "../../../hooks/mutations/useMutationCancelPointTransaction";
import { refetchAtom } from "../../../../../commons/stores";
import { useRecoilValue } from "recoil";
import { IPropsRefund } from "./refund.types";
import { useRouter } from "next/router";

export default function RefundPoint(props: IPropsRefund) {
  const router = useRouter();
  const refetches = useRecoilValue(refetchAtom);

  const [CancelPayment] = useMutationCancelPayment();

  const cancelRefund = () => {
    props.setIsRefund(false);
  };


  const GotoRefund = async () => {
    try {
      const result = await CancelPayment({
        variables: {
          payment_impUid: props.refundInfo[0],
          payment_type: props.refundInfo[1]
        }
      });
      alert("환불성공");

      router.reload();

      props.setIsRefund(false);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <Modal
      open={props.isRefund}
      onCancel={cancelRefund}
      footer={null}
    >
      <S.Page>
        <S.Title>포인트 환불하기</S.Title>
        <S.RefundText>
          환불 신청 시 즉시 직접 환불 처리되며 환불 신청 금액만큼 포인트가 차감됩니다.
        </S.RefundText>
        <S.RefundBtn onClick={GotoRefund}>환불하기</S.RefundBtn>
      </S.Page>
    </Modal>
  );
}
