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
    .required("이메일을 입력해주세요.")
    .email("올바른 이메일을 입력해주세요.")
});

export const schemaEmail = yup.object({
  email: yup
    .string()
    .required("이메일을 인증해주세요.")
    .email("올바른 이메일을 입력해주세요.")
});
export const schemaToken = yup.object({
  email: yup.string().required("이메일을 인증해주세요."),
  token: yup.string().required("인증번호를 입력해주세요.")
});

export const schemaSignUp = yup.object({
  email: yup
    .string()
    .required("이메일을 입력해주세요.")
    .email("올바른 이메일을 입력해주세요."),
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
    .oneOf([yup.ref("password"), undefined], "비밀번호가 일치하지 않습니다.")
    .required("비밀번호 확인을 입력해주세요."),
  nickname: yup.string().required("닉네임을 입력해주세요."),
  phone: yup
    .string()
    .required("휴대폰 번호를 입력해주세요.")
    .matches(
      /^01([0|1|6|7|8|9])([0-9]{3,4})([0-9]{4})$/,
      "올바른 휴대폰 번호를 입력해주세요."
    ),
  name: yup
    .string()
    .required("성함을 입력해주세요.")
    .min(2, "2 ~ 8자리 이내의 성함을 입력해주세요.")
    .max(8, "2 ~ 8자리 이내의 성함을 입력해주세요.")
});

export const schemaCreate = yup.object({
  product_title: yup.string().required("게시글 제목을 작성해주세요."),
  product_category: yup.string().required("카테고리를 선택해주세요."),
  product_sub_category: yup.string().required("상세 카테고리를 선택해주세요."),
  product_summary: yup.string().required("게시글에 대해 간략하게 설명해주세요."),
  product_minAmount: yup.string().required("최소 신청 금액을 입력해주세요."),
  product_main_text: yup.string().required("게시글 내용을 작성해주세요."),
  product_workDay: yup.string().required("연락 가능 시간을 선택해주세요."),
  product_startTime: yup.number().required("연락 가능 시간을 선택해주세요."),
  product_endTime: yup.number().required("연락 가능 시간을 선택해주세요."),
  product_thumbnailImage: yup.array().required("이미지를 첨부해주세요."),
});

export const schemaSeekCreate = yup.object({
  product_title: yup.string().required("게시글 제목을 작성해주세요."),
  product_category: yup.string().required("카테고리를 선택해주세요."),
  product_sub_category: yup.string().required("상세 카테고리를 선택해주세요."),
  product_main_text: yup.string().required("게시글 내용을 작성해주세요."),
  product_possibleAmount: yup.string().required("신청 가능 금액을 작성해주세요."),
  product_date: yup.string().required("필요한 날짜를 작성해주세요."),
  product_postNum: yup.string(),
  product_roadAddress: yup.string(),
  product_detailAddress: yup.string(),
})

export const schemaCreateRequest = yup.object({
  request_title: yup.string().required("의뢰 제안서 제목을 작성해주세요."),
  request_content: yup.string().required("의뢰 내용을 작성해주세요."),
  request_price: yup.string().required("금액을 입력해주세요"),
  request_dueDate: yup.string().required("작업물이 필요한 날짜를 정해주세요")
});

export const schemaPhone = yup.object({
  user_phone: yup
    .string()
    .required("휴대폰 번호를 입력해주세요.")
    .matches(
      /^01([0|1|6|7|8|9])([0-9]{3,4})([0-9]{4})$/,
      "올바른 휴대폰 번호를 입력해주세요."
    )
});

export const schemaPasswordRecover = yup.object({
  user_phone: yup
    .string()
    .required("휴대폰 번호를 입력해주세요.")
    .matches(
      /^01([0|1|6|7|8|9])([0-9]{3,4})([0-9]{4})$/,
      "올바른 휴대폰 번호를 입력해주세요."
    ),
  user_token: yup.string().required("인증번호를 입력해주세요.")
});

export const schemaPasswordEdit = yup.object({
  prevPassword: yup.string().required("기존 비밀번호를 입력해주세요."),
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
    .oneOf([yup.ref("password"), undefined], "비밀번호가 일치하지 않습니다.")
    .required("비밀번호 확인을 입력해주세요.")
});

export const schemaPasswordReset = yup.object({
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
    .oneOf([yup.ref("password"), undefined], "비밀번호가 일치하지 않습니다.")
    .required("비밀번호 확인을 입력해주세요.")
});

export const schemaCreateComment = yup.object({
  text: yup.string().required("내용을 입력해주세요.")
});
