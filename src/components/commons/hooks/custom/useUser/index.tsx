import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../../commons/stores/index";
import { LOGIN_USER } from "../../mutations/useMutationLoginUser";
import { useEffect, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { CREATE_USER, LOGOUT } from "../../mutations/useMutationCreateUser";
import { FETCH_USER_LOGGED_IN } from "../../queries";

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

  const [, setAccessToken] = useRecoilState(accessTokenState);
  const [createUser] = useMutation(CREATE_USER);
  const [loginUser] = useMutation(LOGIN_USER);
  const [logout] = useMutation(LOGOUT);
  const { data } = useQuery(FETCH_USER_LOGGED_IN)
  const [isOn, setIsOn] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [sec, setSec] = useState(0);

  // =============== 타이머 ===============
  useEffect(() => {
    setIsActive(true);
    const interval = setInterval(() => {
      setSec(prev => prev - 1);
      console.log(isActive);
    }, 1000);

    if (sec === 0) {
      setIsActive(false);
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [sec]);

  // =============== 인증번호 ===============
  const onClickValidation = () => {
    setIsOn(true);
    setSec(6);
  };

  // =============== 회원가입 ===============
  const onClickSignUp = async data => {
    console.log(
      data.email,
      data.password,
      data.nickName,
      data.phoneNumber,
      data.name
    );
    try {
      const result = await createUser({
        variables: {
          createUserInput: {
            email: data.email,
            password: data.password,
            nickname: data.nickName,
            phone: data.phoneNumber,
            name: data.name
          }
        }
      });
      alert(`${data.name}님 환영합니다.`);
      void router.push("/login/");
    } catch (error) {
      alert(error.message);
    }
  };

  // =============== 로그인 ===============
  const onClickLogin = async data => {
    try {
      const result = await loginUser({
        variables: {
          email: data.email,
          password: data.password
        }
      });
      alert("로그인에 성공하였습니다.");

      // 받아온 액세스 토큰을 글로벌 스테이트에 저장하기
      const accessToken = result.data?.login;
      setAccessToken(accessToken);
      localStorage.setItem("accessToken", accessToken);

      if (accessToken === undefined) {
        alert("다시 시도해 주세요.");
        return;
      }

      // 로그인 성공 페이지로 이동하기
      const storage = globalThis?.sessionStorage;
      const link = storage.getItem("prevPath") || "/";
      void router.push(link);
      
    } catch (error) {
      alert(error.message);
    }
  };

  const onClickLogout = async () => {
    try {
      await logout();
      localStorage.removeItem("accessToken");
      alert("정상적으로 로그아웃 되었습니다.");
      router.reload();
    } catch (error) {
      alert(error.message);
    }
  };


  return {
    onClickValidation,
    onClickSignUp,
    onClickLogin,
    onClickLogout,
    isOn,
    sec,
    isActive,
    data
  };
};
