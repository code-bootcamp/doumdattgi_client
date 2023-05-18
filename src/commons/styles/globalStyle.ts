import { css } from "@emotion/react";

export const globalStyle = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: "Arita-dotum";
    font-size: 16px;
    font-weight: 400;
    color: #111;
    letter-spacing: -0.03em;
  }

//   /* 결제 모달창 CSS */
//   .ChargeModal .ant-space {
//     width: 384px;
//     height: 34px;
//     border: none;
//     border-bottom: 2px solid black;
//     padding: 0px 5px;
//     display: flex;
//     flex-direction: row;
//     justify-content: space-between;
//     color: black;
//   }

//   /* 결제 드랍박스 CSS */
//   .ChargeBox .ant-space-item {
//     color: #828282;
//   }

//   .ChargeDrop .ant-dropdown-menu {
//     border-radius: 6px;
//     box-shadow: 0px 6px 10px rgba(80, 80, 80, 0.25);
//   }

//   .ChargeDrop .ant-dropdown-menu-item {
//     height: 50px;
//   }

//   .ChargeDrop a::after {
//     border-bottom: 1px solid rgba(5, 5, 5, 0.1);
//   }

//   .setTimeBtn .ant-space {
//     width: 80px;
//     display: flex;
//     flex-direction: row;
//     justify-content: space-between;

   .ant-dropdown-menu-item {
     width: 120px;
   }
   .ant-upload .ant-upload-select {
    width: 130px;
    height: 130px;
   }
   &:where(.css-dev-only-do-not-override-15rg2km).ant-upload-wrapper.ant-upload-picture-card-wrapper .ant-upload.ant-upload-select, :where(.css-dev-only-do-not-override-15rg2km).ant-upload-wrapper.ant-upload-picture-circle-wrapper .ant-upload.ant-upload-select {
    width: 130px;
    height: 130px;
   }
   &:where(.css-dev-only-do-not-override-15rg2km).ant-upload-wrapper.ant-upload-picture-card-wrapper .ant-upload-list.ant-upload-list-picture-card .ant-upload-list-item-container, :where(.css-dev-only-do-not-override-15rg2km).ant-upload-wrapper.ant-upload-picture-circle-wrapper .ant-upload-list.ant-upload-list-picture-card .ant-upload-list-item-container, :where(.css-dev-only-do-not-override-15rg2km).ant-upload-wrapper.ant-upload-picture-card-wrapper .ant-upload-list.ant-upload-list-picture-circle .ant-upload-list-item-container, :where(.css-dev-only-do-not-override-15rg2km).ant-upload-wrapper.ant-upload-picture-circle-wrapper .ant-upload-list.ant-upload-list-picture-circle .ant-upload-list-item-container {
    width: 130px;
    height: 130px;
   }

  @font-face {
    font-family: "Arita-dotum";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/Arita-dotum-Medium.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
`;
