import { useEffect, useState } from "react";
import Login from "../../src/components/units/login";

export default function LoginPage(): JSX.Element {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  useEffect(() => {
    const resizeListener = () => {
      setInnerWidth(window.innerWidth);
    };
    window.addEventListener("resize", resizeListener);
  });

  console.log("innerWidth", innerWidth);
  return (
    <>
      <div>{`현재 넓이는:${innerWidth}px 입니다`}</div>
      <Login />
    </>
  );
}
