import { gql, useMutation } from "@apollo/client";

export const RESET_PASSWORD = gql`
  mutation resetPassword($user_phone: String!, $new_password: String!) {
    resetPassword(user_phone: $user_phone, new_password: $new_password) 
  }
`;

export const useMutationResetPassword = () => {
  const Mutation = useMutation(RESET_PASSWORD);

  return Mutation;
};