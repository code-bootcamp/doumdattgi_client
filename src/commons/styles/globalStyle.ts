import { css } from "@emotion/react";
import { mq } from "../libraries/breakPoints";

export const globalStyle = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: "Arita-dotum";
    font-size: 16px;
    font-weight: 400;
    letter-spacing: -0.03em;

    ${mq[1]} {
      font-size: 15px;
    }
    ${mq[2]} {
      font-size: 14px;
    }
  }

  a {
    color: #000;
    text-decoration: none;
  }

  input {
    &:focus {
      outline-color: #88b04b;
    }
  }

  /* TimePicker */
  .setTimeBtn .ant-space {
    width: 80px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  /* TimePicker */
  :where(.css-dev-only-do-not-override-15rg2km).ant-picker-dropdown
    .ant-picker-time-panel-column {
    width: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  :where(.css-dev-only-do-not-override-15rg2km).ant-btn.ant-btn-sm {
    padding: 0 26px;
    height: 26px;
  }

  /* 헤더 드롭다운 */
  .header {
    width: 120px;
  }
  /* 마일리지 드롭다운 */
   .mileage .ant-dropdown-menu {
    max-height: 300px;
    overflow: auto;
  }

  /* 마일리지 게시판 선택  */

  .board {
    height: 250px;
    overflow: scroll;
  }

  .board .ant-dropdown-menu {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  .board .ant-dropdown-menu-item {
    height: 50px;
    margin: 0;
  }

  /* 아바타 업로드 */
  &.ant-upload-wrapper.ant-upload-picture-circle-wrapper
    .ant-upload.ant-upload-select,
  &.ant-upload-wrapper.ant-upload-picture-circle-wrapper
    .ant-upload-list.ant-upload-list-picture-circle
    .ant-upload-list-item-container {
    height: 130px;
    width: 130px;
    margin: 0;
  }

  @font-face {
    font-family: "Arita-dotum";
    src: url("/fonts/Arita4.0_T.otf");
    font-weight: 100;
    font-style: normal;
  }
  @font-face {
    font-family: "Arita-dotum";
    src: url("/fonts/Arita4.0_L.otf");
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: "Arita-dotum";
    src: url("/fonts/Arita4.0_M.otf");
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: "Arita-dotum";
    src: url("/fonts/Arita4.0_SB.otf");
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: "Arita-dotum";
    src: url("/fonts/Arita4.0_B.otf");
    font-weight: 700;
    font-style: normal;
  }

  // .Toast UI 툴팁 색상
  .toastui-editor-tooltip .text {
    color: white;
  }
`;
