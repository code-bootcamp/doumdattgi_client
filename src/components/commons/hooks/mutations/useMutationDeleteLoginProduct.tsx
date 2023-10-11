import { gql, useMutation } from "@apollo/client";
import { IMutation } from "../../../../commons/types/generated/types";

export const DELETE_LOGIN_PRODUCT = gql`
  mutation deleteLoginProduct($product_id: String!) {
    deleteLoginProduct(product_id: $product_id)
  }
`;

export const useMutationDeleteLoginProduct = () => {
  const Mutation =
    useMutation<Pick<IMutation, "deleteLoginProduct">>(DELETE_LOGIN_PRODUCT);

  return Mutation;
};
