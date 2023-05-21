import { gql, useMutation } from "@apollo/client";

export const LOGOUT = gql`
  mutation {
    logout
  }
`;

export const useMutationLogout = () => {
  const Mutation = useMutation(LOGOUT);

  return Mutation;
};
