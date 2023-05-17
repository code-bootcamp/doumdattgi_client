import Slider from "../../commons/parts/slider";
import * as S from "./styles";

export default function Detail() {
  return (
    <S.Wrapper>
      <S.Container>
        <S.SliderBox>
          <Slider />
        </S.SliderBox>
        <S.DetailWrap></S.DetailWrap>
      </S.Container>
      <S.DivideLine />
      <S.Container>
        <S.DetailContents></S.DetailContents>
        <S.DetailUserWrap></S.DetailUserWrap>
      </S.Container>
      <S.DivideLine />
      <S.Subtitle></S.Subtitle>
      <S.CardBoxWrap></S.CardBoxWrap>
    </S.Wrapper>
  );
}