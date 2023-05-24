import { gql, useQuery } from "@apollo/client";
import { IQuery } from "../../../../commons/types/generated/types";

export const FETCH_PAYMENTS = gql`
  query fetchPayments($page: Float!, $pageSize: Float!) {
    fetchPayments(page: $page, pageSize: $pageSize) {
      payment_payment_id
      payment_payment_impUid
      payment_payment_amount
      payment_payment_status
      payment_payment_type
      payment_payment_createdAt
    }
  }
`;

export const useQueryFetchUserPaymentInfo = () => {
  const Query = useQuery<Pick<IQuery, "fetchPayments">>(FETCH_PAYMENTS, {
    variables: { page: 1, pageSize: 10 }
  });

  return Query;
};
