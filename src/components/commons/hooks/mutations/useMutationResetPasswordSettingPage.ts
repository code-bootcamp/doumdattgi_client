import { gql, useMutation } from "@apollo/client";

export const RESET_PASSWORD_SETTING = gql`
  mutation resetPasswordSettingPage(
    $password: String!
    $new_password: String!
  ) {
    resetPasswordSettingPage(password: $password, new_password: $new_password)
  }
`;

export const useMutationResetPasswordSettingPage = () => {
  const mutation = useMutation(RESET_PASSWORD_SETTING);

  return mutation;
};
