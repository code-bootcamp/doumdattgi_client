import { gql, useMutation } from "@apollo/client";

export const REQUEST_ACCEPT_REFUSE = gql`
  mutation RequestAcceptRefuse($acceptRefuse: String!, $request_id: String!) {
    requestAcceptRefuse(acceptRefuse: $acceptRefuse, request_id: $request_id) {
      request_id
    }
  }
`;

export const useMutationRequestAcceptRefuse = () => {
  const Mutation = useMutation(REQUEST_ACCEPT_REFUSE);

  return Mutation;
};
