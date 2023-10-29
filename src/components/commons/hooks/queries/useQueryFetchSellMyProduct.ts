import { gql, useQuery } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchMyProductArgs,
  IQueryFetchSellMyProductArgs
} from "../../../../commons/types/generated/types";

export const FETCH_SELL_MY_PRODUCT = gql`
  query fetchSellMyProduct($page: Float!, $pageSize: Float!) {
    fetchSellMyProduct(page: $page, pageSize: $pageSize) {
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
        mileage_createdAt
      }
    }
  }
`;

export const useQueryFetchSellMyProduct = () => {
  const Query = useQuery<
    Pick<IQuery, "fetchSellMyProduct">,
    IQueryFetchSellMyProductArgs
  >(FETCH_SELL_MY_PRODUCT, {
    variables: {
      page: 1,
      pageSize: 0
    }
  });

  return Query;
};
