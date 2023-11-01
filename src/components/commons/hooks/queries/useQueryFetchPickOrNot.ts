import { gql, useQuery } from "@apollo/client";
import type { IQuery } from "../../../../commons/types/generated/types";

export const FETCH_PICK_OR_NOT = gql`
  query fetchPickOrNot ($product_id: String!) {
    fetchPickOrNot (
        product_id: $product_id
    )
  }
`;

export const useQueryFetchPickOrNot = (id: string) => {
  const Query = useQuery(FETCH_PICK_OR_NOT, {
    variables: {
        product_id: id
    }
  });

  return Query;
};