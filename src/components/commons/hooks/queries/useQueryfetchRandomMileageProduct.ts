import { gql, useQuery } from "@apollo/client";
import { IQuery } from "../../../../commons/types/generated/types";

export const FETCH_RANDOM_MILEAGE_PRODUCT = gql`
  query {
    fetchRandomMileageProduct(category: "") {
      product_id
      product_title
      product_workDay
      product_category
      product_sub_category
      user {
        user_nickname
        user_profileImage
      }
      images {
        image_url
      }
    }
  }
`;

export const useQueryFetchRandomMileageProduct = () => {
  const Query = useQuery<Pick<IQuery, "fetchRandomMileageProduct">>(
    FETCH_RANDOM_MILEAGE_PRODUCT
  );

  return Query;
};
