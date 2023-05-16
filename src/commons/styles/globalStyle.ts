import { css } from "@emotion/react";

export const globalStyle = css`

//   /* 결제 모달창 CSS */
//   .ant-space {
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
//   .ant-space-item {
//     color: #828282;
//   }

//   svg {
//     color: black;
//   }

//   .ant-dropdown-menu-item {
//     height: 50px;
//   }

//   a::after {
//     border-bottom: 1px solid rgba(5, 5, 5, 0.1);
//   }
// `;

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        font-family: 'Arita-dotum';
        font-size: 16px;
        font-weight: 400;
        color: #111;
        letter-spacing: -0.03em;
    }
    .ant-dropdown-menu-item {
        width: 120px;
    }

    @font-face {
        font-family: 'Arita-dotum';
        src: url("/arita-dotum(OTF)-Light.otf") format('otf');
        font-weight: 300;
    }
    @font-face {
        font-family: 'Arita-dotum';
        src: url("/arita-dotum(OTF)-Thin.otf") format('otf');
        font-weight: 100;
    }
    @font-face {
        font-family: 'Arita-dotum';
        src: url("/arita-dotum(OTF)-Medium.otf") format('otf');
        font-weight: 500;
    }
    @font-face {
        font-family: 'Arita-dotum';
        src: url("/arita-dotum(OTF)-SemiBold.otf") format('otf');
        font-weight: 600;
    }
    @font-face {
        font-family: 'Arita-dotum';
        src: url("/arita-dotum(OTF)-Bold.otf") format('otf');
        font-weight: 700;
    }
`
