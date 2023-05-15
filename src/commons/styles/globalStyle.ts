import { css } from "@emotion/react";

export const globalStyle = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    font-size: 16px;
  }

  @font-face {
    font-family: "Arita-dotum4.0";
    src: url("../public/fonts/Arita4.0_T.otf");
  }

  /* 결제 모달창 CSS */
  .ant-space {
    width: 384px;
    height: 34px;
    border: none;
    border-bottom: 2px solid black;
    padding: 0px 5px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: black;
  }

  /* 결제 드랍박스 CSS */
  .ant-space-item {
    color: #828282;
  }

  svg {
    color: black;
  }

  .ant-dropdown-menu-item {
    height: 50px;
  }

  a::after {
    border-bottom: 1px solid rgba(5, 5, 5, 0.1);
  }
`;
