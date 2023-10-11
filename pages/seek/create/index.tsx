import { LoginCheck } from "../../../src/commons/libraries/loginCheck";
import SeekCreate from "../../../src/components/units/seek/create";

function SeekCreatePage() {
  return <SeekCreate isEdit={false} sellOrBuy={false} />;
}

export default LoginCheck(SeekCreatePage);
