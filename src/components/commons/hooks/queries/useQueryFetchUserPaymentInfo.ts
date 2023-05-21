import { gql, useQuery } from "@apollo/client";
import { IQuery } from "../../../../commons/types/generated/types";

export const FETCH_USER_PAYMENT_INFO = gql`
  query {
    fetchUserPaymentInfo {
      payment_id
      payment_impUid
      payment_amount
      payment_status
      payment_type
      payment_createdAt
    }
  }
`;

export const useQueryFetchUserPaymentInfo = () => {
  const Query = useQuery<Pick<IQuery, "fetchUserPaymentInfo">>(
    FETCH_USER_PAYMENT_INFO
  );

  return Query;
};
