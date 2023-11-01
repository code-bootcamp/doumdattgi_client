import * as S from "./styles";
import ProductList from "../../../commons/parts/list/list";

export default function SubCategorys() {
  return (
    <S.Wrapper>
      <S.Container>
        <ProductList isAll={true} />
      </S.Container>
    </S.Wrapper>
  );
}
