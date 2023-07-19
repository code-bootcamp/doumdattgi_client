import { gql, useQuery } from "@apollo/client";
import type { IQuery } from "../../../../commons/types/generated/types";

export const FETCH_MY_NOT_COUPON_PRODUCT = gql`
  query {
    fetchMyNotCouponProduct {
      product_id
      product_title
    }
  }
`;

export const useQueryFetchMyNotCouponProduct = () => {
  const Query = useQuery<Pick<IQuery, "fetchMyNotCouponProduct">>(
    FETCH_MY_NOT_COUPON_PRODUCT
  );

  return Query;
};
