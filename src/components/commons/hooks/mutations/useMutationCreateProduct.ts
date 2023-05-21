import { gql, useMutation } from "@apollo/client";

export const CREATE_PRODUCT = gql`
  mutation createProduct($createProductInput: CreateProductInput!) {
    createProduct(createProductInput: $createProductInput) {
      product_id
    }
  }
`;

export const useMutationCreateProduct = () => {
    const mutation = useMutation(CREATE_PRODUCT);
  
    return mutation;
  };