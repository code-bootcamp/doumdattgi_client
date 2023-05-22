import { gql, useQuery } from "@apollo/client";
import { IQuery } from "../../../../commons/types/generated/types";

export const FETCH_PRODUCTS = gql`
  query fetchProducts($page: Float!, $pageSize: Float!) {
    fetchProducts(page: $page, pageSize: $pageSize) {
      product_product_id
      product_product_title
      product_product_category
      product_product_workDay
      u_user_nickname
      i_image_url
    }
  }
`;

export const useQueryFetchProducts = (page: number, pageSize: number) => {
  const Query = useQuery<Pick<IQuery, "fetchProducts">>(FETCH_PRODUCTS, {
    variables: {
      page: page,
      pageSize: pageSize
    }
  });

  return Query;
};
