import { gql, useMutation } from "@apollo/client";

export const UPDATE_PRODUCT = gql`
  mutation updateProduct(
    $updateProductInput: UpdateProductInput!
    $product_id: String!
  ) {
    updateProduct(
      updateProductInput: $updateProductInput
      product_id: $product_id
    )
  }
`;

export const useMutationUpdateProduct = () => {
  const mutation = useMutation(UPDATE_PRODUCT);

  return mutation;
};
