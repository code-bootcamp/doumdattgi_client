import SideCategory from "../../commons/parts/list/category";
import ProductList from "../../commons/parts/list/list";
import * as S from "./styles";
import CardBox from "../../commons/parts/cardBox/col6";

export default function ListUnit() {
  console.log("여기는 홈페이지");

  return (
    <S.Wrapper>
      {/* <S.Upper>
        <S.Section>
          <S.Title>특별한 서비스들</S.Title>
          <S.CardboxWrap>여기는 map으로 리스트 돌릴 곳</S.CardboxWrap>
        </S.Section>
      </S.Upper> */}
      <S.Container>
        <SideCategory />
      </S.Container>
      <S.Container_Right>
        <S.Upper>
          <S.Section>
            <S.Title>특별한 서비스들</S.Title>
            <S.CardboxWrap>여기는 map으로 리스트 돌릴 곳</S.CardboxWrap>
          </S.Section>
        </S.Upper>
        <ProductList isAll={false} />
      </S.Container_Right>
    </S.Wrapper>
  );
}
