import SliderComponent from "react-slick";
import styled from "@emotion/styled";
import { Image } from "antd";
import { fallback } from "../../../../../commons/libraries/fallback";
import { mq } from "../../../../../commons/libraries/breakPoints";

const StyledSlider = styled(SliderComponent)`
  .slick-list {
    height: 360px;

    ${mq[7]}{
      height: auto;
    }
  }
  .slick-arrow {
    z-index: 997;
    width: 80px;
    height: 80px;
  }
  .slick-prev:before,
  .slick-next:before {
    content: "";
    display: block;
    width: 80px;
    height: 80px;
    background: rgba(238, 238, 238, 0.5);
    border-radius: 50%;
  }
  .slick-prev {
    left: -40px;
  }
  .slick-prev:before {
    background-image: url("/prev.png");
    background-repeat: no-repeat;
    background-position: center;
  }
  .slick-next {
    right: -40px;
  }
  .slick-next:before {
    background-image: url("/next.png");
    background-repeat: no-repeat;
    background-position: center;
  }

  // 캐러셀 도트
  .slick-dots {
    bottom: 20px;
  }
  .slick-dots li button:before {
    content: "";
    display: block;
    width: 12px;
    height: 12px;
    background: #88b04b;
    border-radius: 50%;
  }
  .slick-dots li.slick-active button:before {
    opacity: 1;
  }

  ${mq[0]} {
    .slick-prev {
      left: 20px;
    }
    .slick-next {
      right: 20px;
    }
  }
  ${mq[2]} {
    .slick-prev:before,
    .slick-next:before {
      width: 60px;
      height: 60px;
    }
    .slick-prev {
      left: 20px;
    }
    .slick-next {
      right: 20px;
    }
  }
  ${mq[5]} {
    .slick-prev:before,
    .slick-next:before {
      width: 60px;
      height: 60px;
    }
    .slick-prev {
      left: 20px;
    }
    .slick-next {
      right: 20px;
    }
  }
`;

const FullBanner = styled.div`
  ${mq[7]} {
    display: none;
  }
`;
const MobileBanner = styled.div`
  display: none;

  ${mq[7]} {
    display: block;
  }
`;

const Slide = styled.div`
  border-radius: 10px;
  overflow: hidden;
  &.mobile {
    /* aspect-ratio: 4 / 3; */
  }

  ${mq[2]} {
    border-radius: 0;
  }
`;

export default function Slider() {
  const settings = {
    arrows: true,
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <>
      <FullBanner>
        <StyledSlider {...settings}>
          {["/banner1.png", "/banner2.png", "/banner3.png"].map(el => (
            <Slide key={el}>
              <Image
                src={`${el}`}
                alt=""
                fallback={fallback}
                width={1200}
                height={360}
                preview={false}
              />
            </Slide>
          ))}
        </StyledSlider>
      </FullBanner>
      <MobileBanner className="mobile">
        <StyledSlider className="mobile" {...settings}>
          {[
            "/mobileBanner1.png",
            "/mobileBanner2.png",
            "/mobileBanner3.png"
          ].map(el => (
            <Slide key={el} className="mobile">
              <Image
                src={`${el}`}
                alt=""
                fallback={fallback}
                width={"100%"}
                preview={false}
              />
            </Slide>
          ))}
        </StyledSlider>
      </MobileBanner>
    </>
  );
}
