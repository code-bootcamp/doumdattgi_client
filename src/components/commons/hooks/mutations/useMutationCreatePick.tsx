import { gql, useMutation } from "@apollo/client";

export const CREATE_PICK = gql`
  mutation createPick($product_id: String!) {
    createPick(product_id: $product_id)
  }
`;

export const useMutationcreatePick = () => {
  const Mutation = useMutation(CREATE_PICK);

  return Mutation;
};
