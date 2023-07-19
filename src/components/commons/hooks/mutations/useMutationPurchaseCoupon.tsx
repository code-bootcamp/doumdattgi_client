import { gql, useMutation } from "@apollo/client";
import type {
  IMutation,
  IMutationPurchaseCouponArgs
} from "../../../../commons/types/generated/types";

export const PURCHASE_COUPON = gql`
  mutation purchaseCoupon($coupon: String!, $productId: String!) {
    purchaseCoupon(coupon: $coupon, productId: $productId)
  }
`;

export const useMutationPurchaseCoupon = () => {
  const Mutation = useMutation<
    Pick<IMutation, "purchaseCoupon">,
    IMutationPurchaseCouponArgs
  >(PURCHASE_COUPON);

  return Mutation;
};
