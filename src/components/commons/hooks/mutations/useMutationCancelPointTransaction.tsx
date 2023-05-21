import { gql, useMutation } from "@apollo/client";

export const CANCEL_PAYMENT = gql`
  mutation cancelPayment($payment_impUid: String!, $payment_type: String!) {
    cancelPointTransaction(
      payment_impUid: $payment_impUid
      payment_type: $payment_type
    ) {
      payment_id
      payment_amount
      payment_status
    }
  }
`;

export const useMutationCancelPayment = () => {
  const Mutation = useMutation(CANCEL_PAYMENT);

  return Mutation;
};
