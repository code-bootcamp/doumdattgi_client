import { gql, useQuery } from "@apollo/client";

export const FETCH_COMMENTS = gql`
  query fetchComments($request_id: String!) {
    fetchComments(request_id: $request_id) {
      comment_comment_id
      r_request_id
      comment_comment_text
      comment_comment_sellerOrBuyer
      comment_comment_createdAt
    }
  }
`;

export const useQueryFetchComments = (id) => {
  const query = useQuery(FETCH_COMMENTS, {
    variables: {
        request_id: id
    }
  });

  return query
};
