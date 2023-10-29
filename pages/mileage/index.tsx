import { LoginCheck } from "../../src/commons/libraries/loginCheck";
import MileageList from "../../src/components/commons/parts/list/mileage";

function Mileage(): JSX.Element {
  return <MileageList />;
}

export default LoginCheck(Mileage);