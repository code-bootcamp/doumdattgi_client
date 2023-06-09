import { gql } from "@apollo/client";
import { GraphQLClient } from "graphql-request";
// import { IMutation } from "../../../commons/types/generated/types";


const RESTORE_ACCESS_TOKEN = gql`
	mutation restoreAccessToken {
		restoreAccessToken {
			accessToken
		}
	}
`;

export const getAccessToken = async (): Promise<string | undefined> => {
	try {
		const graphQLClient = new GraphQLClient(
			"https://backend-practice.codebootcamp.co.kr/graphql",
			{ credentials: "include" }
		);
		const result = await graphQLClient.request<
			Pick<IMutation, "restoreAccessToken">
		>(RESTORE_ACCESS_TOKEN);
		const newAccessToken = result.restoreAccessToken.accessToken;

		return newAccessToken;
	} catch (error) {
		console.log(error.message);
	}
};
