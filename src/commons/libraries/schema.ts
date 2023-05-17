import * as yup from "yup";

export const schemaLogin = yup.object({
  password: yup
    .string()
    .min(8, "영문 + 숫자 조합 8 ~ 16자리의 비밀번호를 입력해주세요.")
    .max(16, "영문 + 숫자 조합 8 ~ 16자리의 비밀번호를 입력해주세요.")
    .matches(
      /^[a-zA-Z0-9]{8,16}$/,
      "영문 + 숫자 조합 8 ~ 16자리의 비밀번호를 입력해주세요."
    )
    .required("비밀번호를 입력해주세요."),
  email: yup
    .string()
    .matches(/^[^@\s]+@[^@\s]+\.[^@\s]+$/, "이메일 주소를 확인해주세요.")
    .required("이메일을 입력해주세요.")
});

export const schemaSignUp = yup.object({
  email: yup
    .string()
    .matches(/^[^@\s]+@[^@\s]+\.[^@\s]+$/, "이메일 아이디를 입력해주세요.")
    .required("이메일을 입력해주세요."),
  password: yup
    .string()
    .min(8, "영문 + 숫자 조합 8 ~ 16자리의 비밀번호를 입력해주세요.")
    .max(16, "영문 + 숫자 조합 8 ~ 16자리의 비밀번호를 입력해주세요.")
    .matches(
      /^[a-zA-Z0-9]{8,16}$/,
      "영문 + 숫자 조합 8 ~ 16자리의 비밀번호를 입력해주세요."
    )
    .required("비밀번호를 입력해주세요."),
  passwordCheck: yup
    .string()
    .required("비밀번호를 입력해주세요.")
    .oneOf([yup.ref("password")])
    .matches(
      /^[a-zA-Z0-9]{8,16}$/,
      "영문 + 숫자 조합 8 ~ 16자리의 비밀번호를 입력해주세요."
    )
    .required(),
  nickName: yup
    .string()
    .required("닉네임을 입력해주세요."),
  phoneNumber: yup
    .string()
    .required("휴대폰 번호를 입력해주세요.")
    .matches(
      /^01([0|1|6|7|8|9])([0-9]{3,4})([0-9]{4})$/,
      "올바른 휴대폰 번호를 입력해주세요."
    ),
  name: yup.string().required("성함을 입력해주세요.")
});
