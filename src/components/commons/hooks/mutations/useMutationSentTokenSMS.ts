import { gql, useMutation } from "@apollo/client";

export const SEND_TOKEN_SMS = gql`
  mutation sendTokenSMS($user_phone: String!) {
    sendTokenSMS(user_phone: $user_phone)
  }
`;

export const useMutationSendTokenSMS = () => {
  const mutation = useMutation(SEND_TOKEN_SMS);

  return mutation;
};