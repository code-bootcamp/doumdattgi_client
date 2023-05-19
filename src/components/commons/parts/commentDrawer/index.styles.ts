import styled from "@emotion/styled";

export const Arrow = styled.span`
  @keyframes arrowMove {
    0% {
      /* transform: translateX(0); */
      scale: 1;
    }
    40% {
      /* transform: translateX(10px); */
      scale: 1.2;
    }
    60% {
      /* transform: translateX(15px); */
      scale: 1.3;
    }
  }
  font-size: 30px;
  color: #bdbdbd;
  animation: arrowMove 1s linear infinite;
`;
