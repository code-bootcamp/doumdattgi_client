import { useRouter } from "next/router";

export default function RoutingPage(): JSX.Element {
  const router = useRouter();

  return (
    <>
      <div>다이나믹 라우팅 페이지 입니다.</div>
      <div>페이지 번호는 {router.query.id} 입니다.</div>
    </>
  );
}
