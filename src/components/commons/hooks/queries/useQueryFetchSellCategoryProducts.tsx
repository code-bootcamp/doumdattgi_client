import { gql, useQuery } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchProductsArgs,
  IQueryFetchSellCategoryProductsArgs
} from "../../../../commons/types/generated/types";

export const FETCH_SELL_PRODUCTS = gql`
  query fetchSellCategoryProducts(
    $page: Float!
    $pageSize: Float!
    $product_category: String!
  ) {
    fetchSellCategoryProducts(
      page: $page
      pageSize: $pageSize
      product_category: $product_category
    ) {
      product_product_id
      product_product_title
      product_product_category
      product_product_sub_category
      product_product_workDay
      product_product_sellOrBuy
      product_product_possibleAmount
      product_product_date
      u_user_nickname
      u_user_profileImage
      product_product_createdAt
    }
  }
`;

export const useQueryFetchSellCategoryProducts = (category: string) => {
  const Query = useQuery<
    Pick<IQuery, "fetchSellCategoryProducts">,
    IQueryFetchSellCategoryProductsArgs
  >(FETCH_SELL_PRODUCTS, {
    variables: {
      page: 1,
      pageSize: 10,
      product_category: category ?? ""
    }
  });

  return Query;
};
