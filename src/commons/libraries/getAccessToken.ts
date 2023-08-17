import { gql } from "@apollo/client";
import { GraphQLClient } from "graphql-request";

const RESTORE_ACCESS_TOKEN = gql`
  mutation {
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

    // 여기서 graphQl 요청에 대한 답이 실패할 경우 에러가 catch 되어 아래쪽 catch 문으로 빠지게되고,
    // result.restoreAccessToken은 result값이 없음으로 당연스레 undefined가 되어 LoginCheck기능이 정상적으로 동작
    // 결과적으로 LoginCheck 기능이 동작하는데 문제는 없으나, getAccessToken 함수 로직은 에러가 발생하는 것으로 보임

    return newAccessToken;
  } catch (error: any) {
    console.log("이거 에러임");
    console.log(error.message);
    console.log("에러");
  }
};
