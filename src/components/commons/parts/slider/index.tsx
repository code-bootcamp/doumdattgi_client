import styled from "@emotion/styled";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Image } from "antd";
import { fallback } from "../../../../commons/libraries/fallback";
import * as S from "./styles";

const Slide = styled.div``;

const arr = ["/집가고싶다.jpg", "/그거이번주까지야.jpg", "/하루종일 폰만.jpg"]

export default function SliderComponent(props: any) {
  const settings = {
    customPaging: function (i: any) {
      const imgsrc = arr[i];
      return (
        <Image
          src={imgsrc}
        //   src={`https://storage.googleapis.com/${imgsrc}`}
          fallback={fallback}
          width={80}
          height={80}
          preview={false}
          style={{borderRadius: "3px", border: "1px solid #E0E1EA"}}
        />
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <>
      <S.Wrapper {...settings}>
        {arr.map(el => (
          <Slide key={el}>
            <Image
              src={el}
            //   src={`https://storage.googleapis.com/${el}`}
              alt=""
              fallback={fallback}
              width={680}
              height={680}
            />
          </Slide>
        ))}
      </S.Wrapper>
    </>
  );
}
