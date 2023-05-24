import { gql, useQuery } from "@apollo/client";

export const FETCH_BUYER_REQUEST = gql`
  query {
    fetchBuyerRequest {
      request_id
      request_isAccept
      request_createAt
      request_title
      buyer_id
      buyer_nickname
      buyer_profileImage
      seller_nickname
    }
  }
`;

export const useQueryFetchBuyerRequest = () => {
  const Query = useQuery(FETCH_BUYER_REQUEST);

  return Query;
};
