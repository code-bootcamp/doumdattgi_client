import { gql, useQuery } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchMyProductArgs
} from "../../../../commons/types/generated/types";

export const FETCH_MY_PRODUCT = gql`
  query fetchMyProduct($page: Float!, $pageSize: Float!) {
    fetchMyProduct(page: $page, pageSize: $pageSize) {
      product_sellOrBuy
      product_id
      product_title
      product_category
      product_workDay
      images {
        image_url
      }
      user {
        user_id
      }
      product_summary
      mileage {
        mileage_coupon
        mileage_createAt
      }
    }
  }
`;

export const useQueryFetchMyProduct = () => {
  const Query = useQuery<
    Pick<IQuery, "fetchMyProduct">,
    IQueryFetchMyProductArgs
  >(FETCH_MY_PRODUCT, {
    variables: {
      page: 1,
      pageSize: 4
    }
  });

  return Query;
};
