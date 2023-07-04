import SideCategory from "../../commons/parts/list/category";
import ProductList from "../../commons/parts/list/list";
import * as S from "./styles";

export default function ListUnit() {
  return (
    <S.Wrapper>
      <S.Container>
        <SideCategory />
        <ProductList isAll={false} />
      </S.Container>
    </S.Wrapper>
  );
}
