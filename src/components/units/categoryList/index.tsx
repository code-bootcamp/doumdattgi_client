import MetaTag from "../../../commons/libraries/metaTag";
import SideCategory from "../../commons/parts/list/category";
import ProductList from "../../commons/parts/list/list";
import * as S from "./styles";

export default function ListUnit() {
  return (
    <>
      <MetaTag
        title={"검색 | 도움닫기"}
        description={"도움닫기에서 나만의 포트폴리오를 쌓아보세요."}
        imgsrc={`https://storage.googleapis.com/doumdattgi-storage/mainIcon.png`}
        keywords={"나만의 포트폴리오"}
        url={"https://doumdattgi.com"}
      />
      <S.Wrapper>
        <S.Container>
          <SideCategory />
          <ProductList isAll={false} />
        </S.Container>
      </S.Wrapper>
    </>
  );
}
