import { gql, useQuery } from "@apollo/client";

export const FETCH_USER_SLOT = gql`
  query {
    fetchUserSlot {
      slot_first
      slot_second
      slot_third
    }
  }
`;

export const useQueryFetchUserSlot = () => {
  const Query = useQuery(FETCH_USER_SLOT);

  return Query;
};
