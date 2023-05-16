import { useMutationCreateUser } from "../../mutations/useMutationCreateUser";
import { useRouter } from "next/router";
import { Modal } from "antd";
// import { useMutationAuthEmail } from "../../mutations/useMutationAuthEmail";
// import { useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../../commons/stores/index";
import { useMutationLoginUser } from "../../mutations/useMutationLoginUser";

interface IFormData {
  email: string;
  password: string;
  nickname: string;
  phone: number;
  name: string;
}

interface IFormLoginData {
  email: string;
  password: string;
}

export const useUser = () => {
  const router = useRouter();

  // const [email, setEmail] = useState("");
  const [, setAccessToken] = useRecoilState(accessTokenState);

  const [createUser] = useMutationCreateUser();
  const [loginUser] = useMutationLoginUser();
  // const [authEmail] = useMutationAuthEmail();

  // 회원가입
  const onClickSignUp = async (data: IFormData): Promise<void> => {
    try {
      await createUser({
        variables: {
          createUserInput: {
            email: data.email,
            password: data.password,
            nickname: data.nickname,
            phone: data.phone,
            name: data.name
          }
        }
      });
      void router.push("/");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  // 로그인 기능
  const onClickLogin = async (data: IFormLoginData): Promise<void> => {
    try {
      const result = await loginUser({
        variables: {
          email: data.email,
          password: data.password
        }
      });
      const accessToken = result.data?.loginUser.accessToken;
      console.log(accessToken);

      if (accessToken === undefined) {
        alert("로그인에 실패하였습니다. 다시 시도해주세요");
        return;
      }
      setAccessToken(accessToken);

      void router.push("/");
      localStorage.setItem("accessToken", accessToken);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const onClickAuth = async (data: any): Promise<void> => {};
  return {
    onClickSignUp,
    onClickAuth,
    onClickLogin
  };
};
