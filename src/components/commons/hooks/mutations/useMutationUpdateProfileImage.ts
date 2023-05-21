import { gql, useMutation } from "@apollo/client";

export const UPDATE_PROFILE_IMAGE = gql`
  mutation updateProfileImage($user_url: String!) {
    updateProfileImage(user_url: $user_url) {
      user_profileImage
    }
  }
`;

export const useMutationUpdateProfileImage = () => {
  const mutation = useMutation(UPDATE_PROFILE_IMAGE);

  return mutation;
};
