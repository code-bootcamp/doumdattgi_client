import { gql, useQuery } from "@apollo/client";

export const FETCH_ONE_REQUEST = gql`
  query fetchOneRequest($request_id: String!) {
    fetchOneRequest(request_id: $request_id) {
      request_isAccept
      request_title
      request_content
      request_price
      seller_nickname
      seller_id
      buyer_nickname
      buyer_id
    }
  }
`;

export const useQueryFetchOneRequest = (id: string) => {
  const Query = useQuery(FETCH_ONE_REQUEST, {
    variables: { request_id: id }
  });

  return Query;
};
