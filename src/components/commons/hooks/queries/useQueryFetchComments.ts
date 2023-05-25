import { gql, useQuery } from "@apollo/client";

export const FETCH_COMMENTS = gql`
  query fetchComments($request_id: String!) {
    fetchComments(request_id: $request_id) {
      comment_text
      sender_id
      user {
        user_nickname
        user_profileImage
      }
      comment_createdAt
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
