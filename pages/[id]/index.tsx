import { useRouter } from "next/router";
import { LoginCheck } from "../../src/commons/libraries/loginCheck";
import Detail from "../../src/components/units/detail";
import { useQueryFetchDetailProduct } from "../../src/components/commons/hooks/queries/useQueryFetchDetailProduct";

function RoutingPage(): JSX.Element {
  return <Detail />;
}

export default LoginCheck(RoutingPage);
