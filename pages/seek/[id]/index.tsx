import { LoginCheck } from "../../../src/commons/libraries/loginCheck";
import SeekDetail from "../../../src/components/units/seek/detail";

function SeekDetailPage() {
  return <SeekDetail />;
}

export default LoginCheck(SeekDetailPage);
