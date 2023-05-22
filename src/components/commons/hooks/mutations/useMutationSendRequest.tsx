import { gql, useMutation } from "@apollo/client";

export const SEND_REQUEST = gql`
  mutation sendRequest($createRequestInput: CreateRequestInput!) {
    sendRequest(createRequestInput: $createRequestInput) {
      request_id
    }
  }
`;

export const useMutationSendRequest = () => {
  const Mutation = useMutation(SEND_REQUEST);

  return Mutation;
};
