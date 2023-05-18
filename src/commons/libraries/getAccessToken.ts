import { gql } from "@apollo/client";
import { GraphQLClient } from "graphql-request";



const RESTORE_ACCESS_TOKEN = gql`
	mutation restoreAccessToken {
		restoreAccessToken
	}
`;

export const getAccessToken = async (): Promise<string | undefined> => {
	try {
		const graphQLClient = new GraphQLClient(
			"https://doumdattgi-server.com/graphql",
			{ credentials: "include" }
		);
		const result: any = await graphQLClient.request(RESTORE_ACCESS_TOKEN);
		const newAccessToken = result.restoreAccessToken;

		console.log(result, newAccessToken)

		return newAccessToken;
	} catch (error: any) {
		console.log(error.message);
	}
};
