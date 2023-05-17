import { gql, useMutation } from "@apollo/client";

export const CREATE_USER = gql`
  mutation createUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      email
    }
  }
`;

export const LOGOUT = gql`
  mutation {
    logout
  }
`
