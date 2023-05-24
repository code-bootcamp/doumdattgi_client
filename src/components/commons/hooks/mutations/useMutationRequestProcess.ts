import { gql, useMutation } from "@apollo/client";

export const REQUEST_PROCESS = gql`
  mutation requestProcess($process: String!, $request_id: String!) {
    requestProcess(process: $process, request_id: $request_id)
  }
`;

export const useMutationRequestProcess = () => {
  const Mutation = useMutation(REQUEST_PROCESS);

  return Mutation;
};
