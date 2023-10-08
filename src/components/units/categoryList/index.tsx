import SideCategory from "../../commons/parts/list/category";
import ProductList from "../../commons/parts/list/list";
import * as S from "./styles";
import CardBox from "../../commons/parts/cardBox/col6";
import { useQueryFetchRandomMileageProduct } from "../../commons/hooks/queries/useQueryfetchRandomMileageProduct";

export default function ListUnit() {
  const { data } = useQueryFetchRandomMileageProduct();

  return (
    <S.Wrapper>
      <S.Container>
        <SideCategory />
      </S.Container>
      <S.Container_Right>
        <S.Upper>
          <S.TitleSection>
            <S.Title>특별한 서비스들</S.Title>
            <S.SubTitle>마일리지 전용 영역</S.SubTitle>
          </S.TitleSection>
          <S.CardboxWrap>
            {data?.fetchRandomMileageProduct.map((el, idx) => (
              <CardBox key={el.product_id} data={el} idx={idx} />
            ))}
          </S.CardboxWrap>
        </S.Upper>
        <ProductList isAll={false} />
      </S.Container_Right>
    </S.Wrapper>
  );
}
