import { LoginCheck } from "../../../src/commons/libraries/loginCheck";
import Mileage from "../../../src/components/units/myPage/mileage";

function MileagePage(): JSX.Element {
  return <Mileage />;
}

export default LoginCheck(MileagePage)