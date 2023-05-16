import { useRouter } from "next/router";
import Header from "./header";
import Nav from "./nav";

const HIDDEN_HEADER = ["/signup/", "/login/"];

export default function Layout(props) {
  const router = useRouter();
  const isActive = HIDDEN_HEADER.includes(router.asPath);
  return (
    <>
      {!isActive && (
        <>
          <Header />
          <Nav/>
        </>
      )}

      {props.children}
    </>
  );
}
