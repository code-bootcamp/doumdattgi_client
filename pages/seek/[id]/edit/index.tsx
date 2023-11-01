import { LoginCheck } from "../../../../src/commons/libraries/loginCheck";
import SeekCreate from "../../../../src/components/units/seek/create";

function SeekEditPage() {
  return <SeekCreate isEdit={true} sellOrBuy={false} />;
}

export default LoginCheck(SeekEditPage);
