import styled from "@emotion/styled";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Image } from "antd";
import { fallback } from "../../../../commons/libraries/fallback";
import * as S from "./styles";

export default function SliderComponent(props: any) {
  const Slide = styled.div``;

  // fetch 로 가져온 이미지 배열
  const arr = props.ImgArr;

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
          style={{ borderRadius: "3px", border: "1px solid #E0E1EA" }}
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
          <Slide key={el}>
            <Image
              src={el}
              alt=""
              fallback={fallback}
              width={640}
              height={640}
            />
          </Slide>
        ))}
      </S.Wrapper>
    </>
  );
}
