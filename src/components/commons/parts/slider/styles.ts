import styled from "@emotion/styled";
import Slider from "react-slick";
import { mq } from "../../../../commons/libraries/breakPoints";

export const Wrapper = styled(Slider)`
  .slick-list {
    max-height: 640px;
    border-radius: 6px;
    border: 1px solid #e0e1ea;
  }
  // 캐러셀 화살표
  .slick-arrow {
    z-index: 999;
    width: 48px;
    height: 48px;
    top: 40%;
    transform: none;

    ${mq[3]} {
      top: 38%;
    }
  }
  .slick-prev:before,
  .slick-next:before {
    content: "";
    display: block;
    width: 80px;
    height: 80px;
    background-color: rgba(238, 238, 238, 0.8);
    border-radius: 50%;

    ${mq[3]} {
      width: 40px;
      height: 40px;
    }
  }
  .slick-prev {
    left: -40px;

    ${mq[2]} {
      left: 16px;
    }
    ${mq[3]} {
      left: 10px;
    }
  }
  .slick-prev:before {
    background-image: url("/prev.png");
    background-repeat: no-repeat;
    background-position: center;

    ${mq[3]} {
      background-size: 30px;
    }
  }
  .slick-next {
    right: -6px;

    ${mq[2]} {
      right: 50px;
    }
    ${mq[3]} {
      right: 6px;
    }
  }
  .slick-next:before {
    background-image: url("/next.png");
    background-repeat: no-repeat;
    background-position: center;

    ${mq[3]} {
      background-size: 30px;
    }
  }

  // 썸네일
  .slick-dots.slick-thumb {
    position: relative;
    bottom: 0;
    height: 80px;
    margin-top: 10px;
    right: -50%;
    transform: translateX(-50%);

    li {
      width: 80px;
      height: 80px;
      position: relative;
      border-radius: 6px;
      overflow: hidden;

      ${mq[3]} {
        width: 60px;
        height: 60px;
      }
    }
  }
  li.slick-active::before {
    content: "";
    width: 80px;
    height: 80px;
    display: block;
    position: absolute;
    z-index: 9999;
    top: 0;
    left: 0;
    border: 5px solid #88b04b;
    box-sizing: border-box;
    border-radius: 6px;

    ${mq[3]} {
      width: 60px;
      height: 60px;
      border: 3px solid #88b04b;
      border-radius: 0;
    }
  }

  .slick-slide {
    aspect-ratio: 1 / 1;
  }
`;
