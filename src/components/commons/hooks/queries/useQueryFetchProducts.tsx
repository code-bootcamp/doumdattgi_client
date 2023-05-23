import { gql, useQuery } from "@apollo/client";
import { IQuery } from "../../../../commons/types/generated/types";

export const FETCH_ALL_PRODUCTS = gql`
  query fetchAllProducts {
    fetchAllProducts {
      product_product_id
      product_product_title
      product_product_category
      product_product_workDay
      u_user_nickname
      u_user_profileImage
      i_image_url
    }
  }
`;

export const useQueryFetchProducts = () => {
  const Query = useQuery<Pick<IQuery, "fetchAllProducts">>(
    FETCH_ALL_PRODUCTS,
    {}
  );

  return Query;
};
