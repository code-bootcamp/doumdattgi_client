# 도움닫기

<div style="display:flex; justify-content:center">
<img src="https://github.com/code-bootcamp/doumdattgi_client/assets/124991681/ac243c4b-370e-4b0a-9d27-6e8632f0db61" alt="Logo">
</div>
<br><br><br><br><br>

## 배포주소

https://https://doumdattgi.com

<br><br><br>

## 개발기간

<br>

> 2023.05.01 ~ 2023.10.27

<br><br><br>

## 개발 팀원 소개

<br>
일단 공백
<br><br>

<br><br><br>

## 프로젝트 소개

<br>

> 매년마다 이슈가 되는 취업난 문제, 이제는 익숙할정도로 한국 사회의 고질적인 문제로 자리 잡았습니다.<br>
> 기업들의 중고신입 선호 확산으로 인해 실무경험의 기회가 없는 무(無) 경험 초년생들은 개인의 능력을 쌓을 기회조차 쉽게 얻지 못하고 있습니다.<br>
> <span style=color:green>**도움닫기**</span>는 이런 경험이 없거나 부족한 사람들에게 실제로 일할 수 있는 기회와 개인의 능력을 증명해 볼 수 있는 환경을 제공하며 <span style=color:green>**사회의 첫 발을 내딛는 이들이 좀 더 높은 곳으로 도약하여 새로운 시작을 할 수 있도록 하는 성장지원 플랫폼**</span>입니다.

<br><br><br><br><br>

## 시작 가이드

<br>

**Requirements**

<br>

> - Node.js v18.17.1
> - npm 9.6.7

<br><br><br>

**Installation**

<br>

```shell
$ git clone https://github.com/code-bootcamp/doumdattgi_client.git
$ cd doumdattgi_client
$ npm install
```

<br><br><br><br><br><br>

## ⚙️ 기술 스택

<br><br>

<div style="display:flex; flex-direction:column; align-items:center;">
<div><img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
<img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">
</div>
<div>
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
<img src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white">
<img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white">
<img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
</div>
<div>
<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
<img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">
<img src="https://img.shields.io/badge/graphql-E10098?style=for-the-badge&logo=graphql&logoColor=white">
<img src="https://img.shields.io/badge/apollographql-311C87?style=for-the-badge&logo=apollographql&logoColor=white">
</div>
<div>
<img src="https://img.shields.io/badge/fontawesome-339AF0?style=for-the-badge&logo=fontawesome&logoColor=white">
<img src="https://img.shields.io/badge/reacthookform-EC5990?style=for-the-badge&logo=reacthookform&logoColor=white">
</div>
</div>

<br><br><br><br><br><br>

## 🖥️ 화면 구성

<br><br>

<table style="width:100%">
        <tr style="text-align:center"> 
            <td>메인 페이지</td>
            <td>로그인 페이지</td>
        </tr>
        <tr>
            <td>
            <img src=https://github.com/code-bootcamp/doumdattgi_client/assets/124991681/fb1e5fc3-774d-498c-9d3f-d55eaa1b7712 style="width:340px" >
            </td>
            <td>
                <img src=https://github.com/code-bootcamp/doumdattgi_client/assets/124991681/fb7c0095-f82d-4c7d-a0ac-9d65bd9b3ed6 style="width:340px">
            </td>
        </tr>
    </table>

<br><br><br><br><br><br>

## 💡 주요 기능

<br><br>
🎯 **로그인 및 회원가입 기능**

- 가입된 정보 입력으로 로그인 가능
- 소셜 로그인 기능
- 이메일 인증을 통한 회원가입 기능
  <br><br>

🎯 **상품 목록 조회 기능**

- 카테고리별로 등록된 게시글 목록 조회 가능
- 게시글 클릭 시 등록자 연락처, 판매정보, 작업 시간 등 조회 가능
  <br><br>

🎯 **게시글 작성기능**

- 카테고리 및 태그, 작업가능 시간을 선택하여 글 작성 가능
- 게시글에 이미지 첨부 가능
- 글 작성 시 지도를 이용해 현 위치 지정 가능
  <br><br>

🎯 **결제 기능**

- 개인 결제를 통해 사이트에서 통용되는 포인트 충전 가능 (결제방식은 이니시스, 카카오페이 중 택1)
  <br><br>

🎯 **거래 기능**

- 구매자가 의뢰 요청을 보내면 판매자가 요청을 수락하거나 거절 가능
- 의뢰 수락 후 맡은 의뢰가 끝나면 판매자는 구매자에게 완료 상태 전달 가능
- 완료를 받은 구매자는 의뢰를 종료하고 예정된 거래금액을 판매자에게 전달 가능
  <br>
- 구매자는 의뢰 수락, 완료를 현 진행상태를 통해 확인 가능

<br><br><br>

## 파일 구조

<br><br>

```bash
📦src
 ┣ 📂commons
 ┃ ┣ 📂libraries
 ┃ ┃ ┣ 📜asyncFunc.ts
 ┃ ┃ ┣ 📜breakPoints.ts
 ┃ ┃ ┣ 📜category.ts
 ┃ ┃ ┣ 📜fallback.ts
 ┃ ┃ ┣ 📜getAccessToken.ts
 ┃ ┃ ┣ 📜getCouponType.ts
 ┃ ┃ ┣ 📜getDate.ts
 ┃ ┃ ┣ 📜loginCheck.tsx
 ┃ ┃ ┣ 📜schema.ts
 ┃ ┃ ┗ 📜translate.ts
 ┃ ┣ 📂stores
 ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📂styles
 ┃ ┃ ┗ 📜globalStyle.ts
 ┃ ┣ 📂types
 ┃ ┃ ┗ 📂generated
 ┃ ┃ ┃ ┗ 📜types.ts
 ┃ ┗ 📜.DS_Store
 ┣ 📂components
 ┃ ┣ 📂commons
 ┃ ┃ ┣ 📂apollo
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📂buttons
 ┃ ┃ ┃ ┣ 📂ButtonHeight40px
 ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┣ 📂ButtonHeight42px
 ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┣ 📂ButtonHeight50px
 ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┣ 📂ButtonHeight60px
 ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┗ 📂ButtonHeight70px
 ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📂hooks
 ┃ ┃ ┃ ┣ 📂custom
 ┃ ┃ ┃ ┃ ┣ 📂useAccountRecovery
 ┃ ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┃ ┣ 📂useAddress
 ┃ ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┃ ┣ 📂useCoupon
 ┃ ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┃ ┣ 📂useCreateProduct
 ┃ ┃ ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┃ ┃ ┣ 📜index.types.ts
 ┃ ┃ ┃ ┃ ┃ ┗ 📜index2.tsx
 ┃ ┃ ┃ ┃ ┣ 📂useDropbox
 ┃ ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┃ ┣ 📂useModal
 ┃ ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┃ ┣ 📂useMoveToPage
 ┃ ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┃ ┣ 📂useMyProduct
 ┃ ┃ ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┃ ┃ ┃ ┣ 📂useNav
 ┃ ┃ ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┃ ┃ ┃ ┣ 📂usePayment
 ┃ ┃ ┃ ┃ ┃ ┗ 📂Pay
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┃ ┣ 📂useRequestAcceptRefuse
 ┃ ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┃ ┣ 📂useRequestProcess
 ┃ ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┃ ┣ 📂useResetAccount
 ┃ ┃ ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┃ ┃ ┃ ┣ 📂useResize
 ┃ ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┃ ┣ 📂useSendRequest
 ┃ ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┃ ┣ 📂useSettings
 ┃ ┃ ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┃ ┃ ┃ ┣ 📂useUser
 ┃ ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┃ ┗ 📂usemoveSubcategory
 ┃ ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┣ 📂mutations
 ┃ ┃ ┃ ┃ ┣ 📜useMutationCancelPointTransaction.tsx
 ┃ ┃ ┃ ┃ ┣ 📜useMutationCheckValidTokenEMAIL.ts
 ┃ ┃ ┃ ┃ ┣ 📜useMutationCheckValidTokenFindEmailBySMS.ts
 ┃ ┃ ┃ ┃ ┣ 📜useMutationCheckValidTokenFindPwdBySMS.ts
 ┃ ┃ ┃ ┃ ┣ 📜useMutationCreateComment.ts
 ┃ ┃ ┃ ┃ ┣ 📜useMutationCreatePick.tsx
 ┃ ┃ ┃ ┃ ┣ 📜useMutationCreatePointTransaction.tsx
 ┃ ┃ ┃ ┃ ┣ 📜useMutationCreateProduct.ts
 ┃ ┃ ┃ ┃ ┣ 📜useMutationCreateUser.tsx
 ┃ ┃ ┃ ┃ ┣ 📜useMutationDeleteLoginProduct.tsx
 ┃ ┃ ┃ ┃ ┣ 📜useMutationLoginUser.tsx
 ┃ ┃ ┃ ┃ ┣ 📜useMutationLogout.ts
 ┃ ┃ ┃ ┃ ┣ 📜useMutationPurchaseCoupon.tsx
 ┃ ┃ ┃ ┃ ┣ 📜useMutationRequestAcceptRefuse.ts
 ┃ ┃ ┃ ┃ ┣ 📜useMutationRequestProcess.ts
 ┃ ┃ ┃ ┃ ┣ 📜useMutationResetPassword.ts
 ┃ ┃ ┃ ┃ ┣ 📜useMutationResetPasswordSettingPage.ts
 ┃ ┃ ┃ ┃ ┣ 📜useMutationSendRequest.tsx
 ┃ ┃ ┃ ┃ ┣ 📜useMutationSendTokenEmail.ts
 ┃ ┃ ┃ ┃ ┣ 📜useMutationSentTokenSMS.ts
 ┃ ┃ ┃ ┃ ┣ 📜useMutationUpdateNicknameIntroduce.tsx
 ┃ ┃ ┃ ┃ ┣ 📜useMutationUpdateProduct.ts
 ┃ ┃ ┃ ┃ ┣ 📜useMutationUpdateProfileImage.ts
 ┃ ┃ ┃ ┃ ┣ 📜useMutationUpdateUserInfo.tsx
 ┃ ┃ ┃ ┃ ┗ 📜useMutationUploadFile.ts
 ┃ ┃ ┃ ┗ 📂queries
 ┃ ┃ ┃ ┃ ┣ 📜useQueryFetchAllProducts.tsx
 ┃ ┃ ┃ ┃ ┣ 📜useQueryFetchBuyerRequest.ts
 ┃ ┃ ┃ ┃ ┣ 📜useQueryFetchCategoryProduct.tsx
 ┃ ┃ ┃ ┃ ┣ 📜useQueryFetchComments.ts
 ┃ ┃ ┃ ┃ ┣ 📜useQueryFetchDetailProduct.tsx
 ┃ ┃ ┃ ┃ ┣ 📜useQueryFetchLoginUser.ts
 ┃ ┃ ┃ ┃ ┣ 📜useQueryFetchNewbieProduct.tsx
 ┃ ┃ ┃ ┃ ┣ 📜useQueryFetchOneRequest.ts
 ┃ ┃ ┃ ┃ ┣ 📜useQueryFetchPickOrNot.ts
 ┃ ┃ ┃ ┃ ┣ 📜useQueryFetchPickUserProduct.ts
 ┃ ┃ ┃ ┃ ┣ 📜useQueryFetchProducts.tsx
 ┃ ┃ ┃ ┃ ┣ 📜useQueryFetchRandomProduct.tsx
 ┃ ┃ ┃ ┃ ┣ 📜useQueryFetchSearchProduct.tsx
 ┃ ┃ ┃ ┃ ┣ 📜useQueryFetchSellCategoryProducts.tsx
 ┃ ┃ ┃ ┃ ┣ 📜useQueryFetchSellMyProduct.ts
 ┃ ┃ ┃ ┃ ┣ 📜useQueryFetchSellProduct.tsx
 ┃ ┃ ┃ ┃ ┣ 📜useQueryFetchSellerWork.ts
 ┃ ┃ ┃ ┃ ┣ 📜useQueryFetchSubCategoryProduct.tsx
 ┃ ┃ ┃ ┃ ┣ 📜useQueryFetchUserPaymentInfo.ts
 ┃ ┃ ┃ ┃ ┣ 📜useQueryfetchLikeCategoryProduct.tsx
 ┃ ┃ ┃ ┃ ┣ 📜useQueryfetchMileageHistory.ts
 ┃ ┃ ┃ ┃ ┣ 📜useQueryfetchMileageProductHistory.ts
 ┃ ┃ ┃ ┃ ┣ 📜useQueryfetchMyNotCouponProduct.ts
 ┃ ┃ ┃ ┃ ┣ 📜useQueryfetchMyProduct.ts
 ┃ ┃ ┃ ┃ ┣ 📜useQueryfetchRandomMileageProduct.ts
 ┃ ┃ ┃ ┃ ┗ 📜useQueryfetchUserSlot.ts
 ┃ ┃ ┣ 📂inputs
 ┃ ┃ ┃ ┣ 📂InputHeight38px
 ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┣ 📂InputHeight40px
 ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┣ 📂InputHeight42px
 ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┣ 📂InputHeight46px
 ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┣ 📂InputHeight50px
 ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┗ 📂TextArea
 ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📂layout
 ┃ ┃ ┃ ┣ 📂footer
 ┃ ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┃ ┗ 📜style.ts
 ┃ ┃ ┃ ┣ 📂header
 ┃ ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┃ ┣ 📜index.types.ts
 ┃ ┃ ┃ ┃ ┗ 📜style.ts
 ┃ ┃ ┃ ┣ 📂header2
 ┃ ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┃ ┗ 📜style.ts
 ┃ ┃ ┃ ┣ 📂nav
 ┃ ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┃ ┗ 📜styles.ts
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📂parts
 ┃ ┃ ┃ ┣ 📂Dropboxs
 ┃ ┃ ┃ ┃ ┣ 📂Point
 ┃ ┃ ┃ ┃ ┃ ┣ 📜index.styles.ts
 ┃ ┃ ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┃ ┃ ┗ 📜index.types.ts
 ┃ ┃ ┃ ┃ ┗ 📂write
 ┃ ┃ ┃ ┃ ┃ ┣ 📜index.styles.ts
 ┃ ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┣ 📂Modals
 ┃ ┃ ┃ ┃ ┣ 📂Charge
 ┃ ┃ ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┃ ┃ ┗ 📜index.types.ts
 ┃ ┃ ┃ ┃ ┗ 📂Refund
 ┃ ┃ ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┃ ┃ ┣ 📜refund.styles.ts
 ┃ ┃ ┃ ┃ ┃ ┗ 📜refund.types.ts
 ┃ ┃ ┃ ┣ 📂Point
 ┃ ┃ ┃ ┃ ┣ 📂paylist
 ┃ ┃ ┃ ┃ ┃ ┣ 📂paylistState
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜paylistState.styles.ts
 ┃ ┃ ┃ ┃ ┃ ┣ 📜index.styles.ts
 ┃ ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┃ ┗ 📜.DS_Store
 ┃ ┃ ┃ ┣ 📂Timepicker
 ┃ ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┃ ┗ 📜index2.tsx
 ┃ ┃ ┃ ┣ 📂Toasteditor
 ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┣ 📂avatarUpload
 ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┣ 📂cardBox
 ┃ ┃ ┃ ┃ ┣ 📂col3
 ┃ ┃ ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┃ ┃ ┗ 📜style.ts
 ┃ ┃ ┃ ┃ ┣ 📂col4
 ┃ ┃ ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┃ ┃ ┗ 📜style.ts
 ┃ ┃ ┃ ┃ ┣ 📂col5
 ┃ ┃ ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┃ ┃ ┗ 📜style.ts
 ┃ ┃ ┃ ┃ ┣ 📂col6
 ┃ ┃ ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┃ ┃ ┗ 📜style.ts
 ┃ ┃ ┃ ┃ ┗ 📂list
 ┃ ┃ ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┃ ┃ ┗ 📜style.ts
 ┃ ┃ ┃ ┣ 📂categorySelect
 ┃ ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┃ ┣ 📜index.types.ts
 ┃ ┃ ┃ ┃ ┗ 📜index2.tsx
 ┃ ┃ ┃ ┣ 📂commentDrawer
 ┃ ┃ ┃ ┃ ┣ 📜index.styles.ts
 ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┣ 📂countUp
 ┃ ┃ ┃ ┃ ┗ 📜intex.tsx
 ┃ ┃ ┃ ┣ 📂editor
 ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┣ 📂imageUpload
 ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┣ 📂list
 ┃ ┃ ┃ ┃ ┣ 📂category
 ┃ ┃ ┃ ┃ ┃ ┣ 📜index.styles.ts
 ┃ ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┃ ┣ 📂list
 ┃ ┃ ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┃ ┃ ┗ 📜style.ts
 ┃ ┃ ┃ ┃ ┣ 📂mileage
 ┃ ┃ ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┃ ┃ ┗ 📜style.ts
 ┃ ┃ ┃ ┃ ┗ 📂subCategoryList
 ┃ ┃ ┃ ┃ ┃ ┣ 📜index.styles.ts
 ┃ ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┣ 📂main
 ┃ ┃ ┃ ┃ ┣ 📂carousel
 ┃ ┃ ┃ ┃ ┃ ┣ 📜carousel.styles.ts
 ┃ ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┃ ┗ 📂previewContents
 ┃ ┃ ┃ ┃ ┃ ┣ 📜index.styles.ts
 ┃ ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┣ 📂map
 ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┣ 📂slider
 ┃ ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┃ ┗ 📜styles.ts
 ┃ ┃ ┃ ┣ 📂tab
 ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┣ 📂workDay
 ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┗ 📜.DS_Store
 ┃ ┃ ┣ 📂tag
 ┃ ┃ ┃ ┣ 📂category
 ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┗ 📂status
 ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┗ 📜.DS_Store
 ┃ ┣ 📂units
 ┃ ┃ ┣ 📂accountRecovery
 ┃ ┃ ┃ ┣ 📜accountRecovery.styles.ts
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📂categoryList
 ┃ ┃ ┃ ┣ 📂AllList
 ┃ ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┃ ┗ 📜styles.ts
 ┃ ┃ ┃ ┣ 📂subCategoryList
 ┃ ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┃ ┗ 📜styles.ts
 ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┗ 📜styles.ts
 ┃ ┃ ┣ 📂chat
 ┃ ┃ ┃ ┣ 📜index.styles.ts
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📂comment
 ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┗ 📜styles.ts
 ┃ ┃ ┣ 📂create
 ┃ ┃ ┃ ┣ 📜index.styles.ts
 ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┣ 📜index.types.ts
 ┃ ┃ ┃ ┗ 📜index2.tsx
 ┃ ┃ ┣ 📂detail
 ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┗ 📜styles.ts
 ┃ ┃ ┣ 📂landing
 ┃ ┃ ┃ ┣ 📜landing.tsx
 ┃ ┃ ┃ ┣ 📜landingFirst.tsx
 ┃ ┃ ┃ ┣ 📜landingSecond.tsx
 ┃ ┃ ┃ ┣ 📜landingThird.tsx
 ┃ ┃ ┃ ┗ 📜styles.ts
 ┃ ┃ ┣ 📂login
 ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┗ 📜login.styles.ts
 ┃ ┃ ┣ 📂main
 ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┗ 📜main.styles.ts
 ┃ ┃ ┣ 📂myPage
 ┃ ┃ ┃ ┣ 📂mileage
 ┃ ┃ ┃ ┃ ┣ 📂history
 ┃ ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┃ ┣ 📂list
 ┃ ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┃ ┣ 📂use
 ┃ ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┃ ┗ 📜styles.ts
 ┃ ┃ ┃ ┣ 📂point
 ┃ ┃ ┃ ┃ ┣ 📜index.styles.ts
 ┃ ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┃ ┗ 📜index.types.ts
 ┃ ┃ ┃ ┣ 📂profile
 ┃ ┃ ┃ ┃ ┣ 📂myFavorite
 ┃ ┃ ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┃ ┃ ┗ 📜styles.ts
 ┃ ┃ ┃ ┃ ┣ 📂myProduct
 ┃ ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┃ ┣ 📜product.styles.ts
 ┃ ┃ ┃ ┃ ┗ 📜styles.ts
 ┃ ┃ ┃ ┣ 📂progressBuyer
 ┃ ┃ ┃ ┃ ┣ 📂all
 ┃ ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┃ ┣ 📂done
 ┃ ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┃ ┣ 📂progress
 ┃ ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┃ ┣ 📂refuse
 ┃ ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┃ ┣ 📂waiting
 ┃ ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┃ ┗ 📜progress.styles.ts
 ┃ ┃ ┃ ┣ 📂progressSeller
 ┃ ┃ ┃ ┃ ┣ 📂all
 ┃ ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┃ ┣ 📂done
 ┃ ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┃ ┣ 📂progress
 ┃ ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┃ ┣ 📂refuse
 ┃ ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┃ ┣ 📂waiting
 ┃ ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┃ ┗ 📜progress.styles.ts
 ┃ ┃ ┃ ┗ 📂setting
 ┃ ┃ ┃ ┃ ┣ 📂bottom
 ┃ ┃ ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┃ ┃ ┗ 📜styles.ts
 ┃ ┃ ┃ ┃ ┣ 📂top
 ┃ ┃ ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┃ ┃ ┗ 📜styles.ts
 ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📂recoveryResult
 ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┗ 📜recoveryResult.styles.ts
 ┃ ┃ ┣ 📂request
 ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┣ 📜index.types.ts
 ┃ ┃ ┃ ┗ 📜styles.ts
 ┃ ┃ ┣ 📂searchedListPage
 ┃ ┃ ┃ ┣ 📜index.styles.ts
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📂seek
 ┃ ┃ ┃ ┣ 📂create
 ┃ ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┃ ┣ 📜index.types.ts
 ┃ ┃ ┃ ┃ ┗ 📜style.ts
 ┃ ┃ ┃ ┣ 📂detail
 ┃ ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┃ ┗ 📜style.ts
 ┃ ┃ ┃ ┗ 📂list
 ┃ ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┃ ┗ 📜style.ts
 ┃ ┃ ┣ 📂signUp
 ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┗ 📜signup.style.ts
 ┃ ┃ ┗ 📂workAgreement
 ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┣ 📜index2.tsx
 ┃ ┃ ┃ ┗ 📜workAgreement.styles.ts
 ┃ ┗ 📜.DS_Store
 ┗ 📜.DS_Store
```
