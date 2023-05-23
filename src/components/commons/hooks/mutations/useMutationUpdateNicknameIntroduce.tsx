import { gql, useMutation } from "@apollo/client";

export const UPDATE_NICKNAME_INTRODUCDE = gql`
  mutation updateNicknameIntroduce(
    $updateNicknameIntroduceInput: UpdateNicknameIntroduceInput!
  ) {
    updateNicknameIntroduce(
      updateNicknameIntroduceInput: $updateNicknameIntroduceInput
    ) {
      user_id
      user_email
      user_name
      user_nickname
      user_introduce
    }
  }
`;

export const useMutationUpdateNicknameIntroduce = () => {
  const Mutation = useMutation(UPDATE_NICKNAME_INTRODUCDE);

  return Mutation;
};
