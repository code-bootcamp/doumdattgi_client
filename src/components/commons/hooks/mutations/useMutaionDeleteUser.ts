import { gql, useMutation } from "@apollo/client";
import type { IMutation } from "../../../../commons/types/generated/types";

export const DELETE_USER = gql`
  mutation {
    logout
  }
`;

export const useMutationDeleteUser = () => {
  const Mutation = useMutation(DELETE_USER);

  return Mutation;
};
