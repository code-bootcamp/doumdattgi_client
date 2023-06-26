import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchLikeCategoryProductArgs
} from "../../../../commons/types/generated/types";

export const FETCH_LIKE_CATEGORY_PRODUCT = gql`
  query fetchLikeCategoryProduct(
    $product_category: String!
    $page: Float!
    $pageSize: Float!
  ) {
    fetchLikeCategoryProduct(
      product_category: $product_category
      page: $page
      pageSize: $pageSize
    ) {
      product_product_id
      product_product_title
      product_product_category
      product_product_workDay
      u_user_nickname
      image_url
    }
  }
`;

export const useQueryFetchLikeCategoryProduct = (category: string) => {
  const Query = useQuery<
    Pick<IQuery, "fetchLikeCategoryProduct">,
    IQueryFetchLikeCategoryProductArgs
  >(FETCH_LIKE_CATEGORY_PRODUCT, {
    variables: { product_category: category, page: 1, pageSize: 10 }
  });

  return Query;
};
