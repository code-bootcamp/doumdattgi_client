import { ChangeEvent, useState } from "react";
import { useMutationSendTokenSMS } from "../../mutations/useMutationSentTokenSMS";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaPasswordRecover, schemaPhone } from "../../../../../commons/libraries/schema";
import { useMutationCheckValidTokenFindPwdBySMS } from "../../mutations/useMutationCheckValidTokenFindPwdBySMS";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { userPhoneState } from "../../../../../commons/stores";
import { useMutationResetPassword } from "../../mutations/useMutationResetPassword";

export const useAccountRecovery = () => {
  const [isValidateOpen, setIsValidateOpen] = useState(false);

  const [sendTokenSMS] = useMutationSendTokenSMS();
  const [findPwdBySMS] = useMutationCheckValidTokenFindPwdBySMS();

  const router = useRouter()

  const [userPhone, setUserPhone] = useRecoilState(userPhoneState)

  const { register, handleSubmit, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(isValidateOpen ? schemaPasswordRecover : schemaPhone)
  });


  const onClickAuthPhone = async data => {
    try {
      await sendTokenSMS({
        variables: {
          user_phone: data.user_phone
        }
      });
      alert("인증번호가 전송되었습니다.");
      setIsValidateOpen(true);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onClickValidate = async data => {
    try {
      const result = await findPwdBySMS({
        variables: {
          user_phone: data.user_phone,
          user_token: data.user_token
        }
      });
      setUserPhone(data.user_phone)
      if(result?.data?.checkValidTokenFindPwdBySMS){
        void router.push("/recoveryResult/password")
      }
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };



  return {
    onClickAuthPhone,
    isValidateOpen,
    register,
    handleSubmit,
    formState,
    onClickValidate
  };
};
