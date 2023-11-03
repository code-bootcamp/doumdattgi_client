import styled from "@emotion/styled";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Image } from "antd";
import { fallback } from "../../../../commons/libraries/fallback";
import * as S from "./styles";

export default function SliderComponent(props: any) {
  const Slide = styled.div`
    aspect-ratio: 1 / 1;
  `;

  // fetch 로 가져온 이미지 배열
  const arr = props.ImgArr;

  const settings = {
    customPaging: function (i: any) {
      const imgsrc = arr[i];
      return (
        <Image
          src={imgsrc}
          fallback={fallback}
          preview={false}
          style={{ aspectRatio: "1 / 1" }}
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
        {arr?.map((el: string) => (
          <Slide>
            <Image
              src={el}
              fallback={fallback}
              style={{ aspectRatio: "1 / 1" }}
            />
          </Slide>
        ))}
      </S.Wrapper>
    </>
  );
}
