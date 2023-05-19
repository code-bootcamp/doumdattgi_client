import { gql } from "@apollo/client";

export const CREATE_REQUEST = gql`
  mutation createRequest($createRequestInput: CreateRequestInput!) {
    createRequest(createRequestInput: $createRequestInput) {
      _id
    }
  }
`;
