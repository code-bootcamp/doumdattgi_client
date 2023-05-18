import { gql, useMutation } from "@apollo/client";

export const CANCEL_POINT_TRANSACTION = gql`
  mutation cancelPointTransaction($impUid: String!, $paymentType: String!) {
    cancelPointTransaction(impUid: $impUid, paymentType: $paymentType) {
      id
      amount
      status
    }
  }
`;

export const useMutationCancelPointTransaction = () => {
  const Mutation = useMutation(CANCEL_POINT_TRANSACTION);

  return Mutation;
};
