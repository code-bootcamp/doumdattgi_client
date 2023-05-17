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
  .ant-dropdown-menu-item {
    width: 120px;
  }

  @font-face {
    font-family: "Arita-dotum";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/Arita-dotum-Medium.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
`;
