import { gql, useMutation } from "@apollo/client";

export const CREATE_POINT_TRANSACTION = gql`
  mutation createPointTransaction(
    $impUid: String!
    $amount: Int!
    $paymentType: String!
  ) {
    createPointTransaction(
      impUid: $impUid
      amount: $amount
      paymentType: $paymentType
    ) {
      id
      amount
      paymentType
      createdAt
    }
  }
`;

export const useMutationcreatePointTransaction = () => {
  const Mutation = useMutation(CREATE_POINT_TRANSACTION);

  return Mutation;
};
