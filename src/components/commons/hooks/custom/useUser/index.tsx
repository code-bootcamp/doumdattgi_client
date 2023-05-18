import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../../commons/stores/index";
import { LOGIN_USER } from "../../mutations/useMutationLoginUser";
import { useEffect, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { CREATE_USER, LOGOUT } from "../../mutations/useMutationCreateUser";
import { FETCH_USER_LOGGED_IN } from "../../queries";
import { IQuery } from "../../../../../commons/types/generated/types";

interface IFormData {
  email: string;
  password: string;
  nickName: string;
  phoneNumber: number;
  name: string;
}

interface IFormLoginData {
  email: string;
  password: string;
}

interface IUseUserReturn {
  onClickValidation: () => void;
  onClickSignUp: (data: IFormData) => void;
  onClickLogin: (data: IFormLoginData) => void;
  onClickLogout: () => void;
  onClickEditAvatar: () => void;
  isOn: boolean;
  sec: number;
  isActive: boolean;
  // data?: {
  //   id?: string;
  //   email?: string;
  //   passsword?: string;
  //   name?: string;
  //   nickname?: string;
  //   phone?: string;
  //   profileImage?: string;
  //   introduce?: string;
  //   portfolio?: string;
  //   workRate?: number;
  //   point?: number;
  // };
  isAvatarEdit: boolean;
}

export const useUser = () => {
  const router = useRouter();

  const [, setAccessToken] = useRecoilState(accessTokenState);
  const [createUser] = useMutation(CREATE_USER);
  const [loginUser] = useMutation(LOGIN_USER);
  const [logout] = useMutation(LOGOUT);
  const { data } =
    useQuery<Pick<IQuery, "fetchLoginUser">>(FETCH_USER_LOGGED_IN);
  const [isOn, setIsOn] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [sec, setSec] = useState(0);
  const [isAvatarEdit, setIsAvatarEdit] = useState(false);

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
  const onClickSignUp = async (data: IFormData) => {
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
      if (error instanceof Error) alert(error.message);
    }
  };

  // =============== 로그인 ===============
  const onClickLogin = async (data: IFormLoginData) => {
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
      if (error instanceof Error) alert(error.message);
    }
  };

  // 로그아웃
  const onClickLogout = async () => {
    try {
      await logout();
      localStorage.removeItem("accessToken");
      alert("정상적으로 로그아웃 되었습니다.");
      router.reload();
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  // 프로필 이미지
  const onClickEditAvatar = () => {
    setIsAvatarEdit(prev => !prev);
  };

  return {
    onClickValidation,
    onClickSignUp,
    onClickLogin,
    onClickLogout,
    onClickEditAvatar,
    isOn,
    sec,
    isActive,
    data,
    isAvatarEdit
  };
};
