import { gql, useQuery } from "@apollo/client";
import type { IQuery } from "../../../../commons/types/generated/types";

export const FETCH_MILEAGE_HISTORY = gql`
  query {
    fetchMileageHistory {
      mileage_id
      mileage_status
      mileage_coupon
      payment_amount
      mileage_createdAt
    }
  }
`;

export const useQueryFetchMileageHistory = () => {
  const Query = useQuery<Pick<IQuery, "fetchMileageHistory">>(
    FETCH_MILEAGE_HISTORY
  );

  return Query;
};
