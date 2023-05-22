import { gql, useMutation } from "@apollo/client";

export const REQUEST_START = gql`
  mutation requestStart($process: String!, $request_id: String!) {
    requestStart(process: $process, request_id: $request_id) {
    } 
  }
`;

export const useMutationRequestStart = () => {
  const Mutation = useMutation(REQUEST_START);

  return Mutation;
};
