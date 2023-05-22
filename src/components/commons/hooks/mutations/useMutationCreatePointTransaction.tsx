import { gql, useMutation } from "@apollo/client";

export const CREATE_PAYMENT = gql`
  mutation createPayment(
    $payment_impUid: String!
    $payment_amount: Int!
    $payment_type: String!
  ) {
    createPayment(
      payment_impUid: $payment_impUid
      payment_amount: $payment_amount
      payment_type: $payment_type
    ) {
      payment_id
      payment_amount
      payment_type
      payment_createdAt
    }
  }
`;

export const useMutationcreatePayment = () => {
  const Mutation = useMutation(CREATE_PAYMENT);

  return Mutation;
};
