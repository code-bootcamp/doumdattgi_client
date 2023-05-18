import { Carousel } from "antd";
import { useRef } from "react";
import { ArrowStyle, ArrowStyle2, contentStyle } from "./carousel.styles";

export default function MainCarousel() {
  const carouselRef = useRef(null);

  const handlePrevClick = () => {
    carouselRef.current?.prev();
  };

  const handleNextClick = () => {
    carouselRef.current?.next();
  };

  const PrevArrow = () => (
    <div onClick={handlePrevClick} style={ArrowStyle}>
      {"<"}
    </div>
  );
  const NextArrow = () => (
    <div onClick={handleNextClick} style={ArrowStyle2}>
      {">"}
    </div>
  );

  return (
    <Carousel
      style={{ display: "flex" }}
      className="MainCarousel"
      autoplay
      arrows={true}
      prevArrow={<PrevArrow />}
      nextArrow={<NextArrow />}
      ref={carouselRef}
    >
      <div>
        <img src="/IUad1.png" style={contentStyle} />
      </div>
      <div>
        <img src="/IUad2.png" style={contentStyle} />
      </div>
      <div>
        <img src="/IUad3.png" style={contentStyle} />
      </div>
    </Carousel>
  );
}
