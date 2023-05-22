import { gql, useQuery } from "@apollo/client";

export const FETCH_SELLER_WORK = gql`
  query {
    fetchSellerWork {
      request_id
      request_isAccept
      request_createAt
      request_title
      seller_id
      seller_nickname
      seller_profileImage
    }
  }
`;

export const useQueryFetchSellerWork = () => {
  const Query = useQuery(FETCH_SELLER_WORK);

  return Query;
};
