import { gql, useMutation } from "@apollo/client";

export const AUTH_EMAIL = gql`
  mutation authEmail($email: string) {
    authEmail(email: $email) {
      email
    }
  }
`;

export const useMutationAuthEmail = () => {
  const mutation = useMutation(AUTH_EMAIL);

  return mutation;
};
