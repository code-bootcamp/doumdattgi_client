import { gql, useQuery } from "@apollo/client";

export const FETCH_BUYER_REQUEST = gql`
  query {
    fetchBuyerRequest {
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

export const useQueryFetchBuyerRequest = () => {
  const Query = useQuery(FETCH_BUYER_REQUEST);

  return Query;
};
