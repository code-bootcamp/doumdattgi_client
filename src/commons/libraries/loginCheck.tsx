import { useRouter } from "next/router";
import { useEffect } from "react";
import { getAccessToken } from "../libraries/getAccessToken";

export const LoginCheck = Component => props => {
  const router = useRouter();

  // 2. 로그인 체크 (refreshToken 이후)
  useEffect(() => {
    void getAccessToken().then(newAccessToken => {
      if (newAccessToken === undefined) {
        alert("로그인 후 이용 가능합니다.");
        void router.push("/login");
      }
    });
  }, []);

  return <Component {...props} />;
};
