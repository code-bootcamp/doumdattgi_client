import { useRouter } from "next/router";
import { useMutationResetPassword } from "../../mutations/useMutationResetPassword";
import { useRecoilState } from "recoil";
import { userPhoneState } from "../../../../../commons/stores";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaPasswordReset } from "../../../../../commons/libraries/schema";

interface IDate {
  password: string;
}

export const useResetAccount = () => {
  const [resetPassword] = useMutationResetPassword();
  const router = useRouter();

  const [userPhone, setUserPhone] = useRecoilState(userPhoneState);

  const { register, handleSubmit, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schemaPasswordReset)
  });

  const onClickEditPassword = async (data: IDate) => {
    try {
      await resetPassword({
        variables: {
          user_phone: userPhone,
          new_password: data.password
        }
      });
      console.log(data);
      alert("정상적으로 비밀번호가 변경되었습니다.");
      router.push("/login");
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return {
    onClickEditPassword,
    register,
    handleSubmit,
    formState
  };
};
