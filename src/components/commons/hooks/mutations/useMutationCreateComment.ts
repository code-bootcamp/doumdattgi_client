import { gql, useMutation } from "@apollo/client";

export const CREATE_COMMENT = gql`
  mutation createComment($createCommentInput: CreateCommentInput!) {
    createComment(createCommentInput: $createCommentInput)
  }
`;

export const useMutationCreateComment = () => {
    const mutation = useMutation(CREATE_COMMENT);

    return mutation;
}