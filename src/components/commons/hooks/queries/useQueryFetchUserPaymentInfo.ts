import { gql, useQuery } from "@apollo/client";

export const FETCH_USER_PAYMENT_INFO = gql`
  query {
    fetchUserPaymentInfo {
      impUid
      amount
      status
      paymentType
      createdAt
    }
  }
`;

export const useQueryFetchUserPaymentInfo = () => {
  const Query = useQuery(FETCH_USER_PAYMENT_INFO);

  return Query;
};
