import { gql, useQuery } from "@apollo/client";

export const FETCH_SELLER_WORK = gql`
  query {
    fetchSellerWork {
      request_id
      product
      seller_id
      seller_nickname
      seller_profileImage
      buyer_id
      buyer_nickname
      buyer_profileImage
      request_isAccept
      request_price
      request_createAt
      request_startAt
      request_sendAt
      request_completedAt
      request_title
      request_content
    }
  }
`;

export const useQueryFetchSellerWork = () => {
  const Query = useQuery(FETCH_SELLER_WORK);

  return Query;
};
