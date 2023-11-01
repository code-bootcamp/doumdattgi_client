import { gql, useQuery } from "@apollo/client";
import type { IQuery } from "../../../../commons/types/generated/types";

export const FETCH_MILEAGE_PRODUCT_HISTORY = gql`
  query {
    fetchMileageProductHistory {
      product_id
      product_category
      product_sub_category
      product_title
      product_summary
      product_workDay
      images {
        image_id
        image_url
        image_isMain
      }
      mileage {
        mileage_id
        mileage_createdAt
        mileage_coupon
      }
      product_startTime
      product_endTime
      product_deletedAt
    }
  }
`;

export const useQueryFetchMileageProductHistory = () => {
  const Query = useQuery<Pick<IQuery, "fetchMileageProductHistory">>(
    FETCH_MILEAGE_PRODUCT_HISTORY
  );

  return Query;
};
