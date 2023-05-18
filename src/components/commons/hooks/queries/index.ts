// query

import { gql } from "@apollo/client";

export const FETCH_USER_LOGGED_IN = gql`
    query fetchLoginUser {
        fetchLoginUser {
            id,
            email,
            name,
            nickname,
            phone,
            profileImage
            introduce,
            portfolio,
            workRate,
            point
        }
    }
`