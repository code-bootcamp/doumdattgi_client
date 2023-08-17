import Link from "next/link";
import * as S from "./styles";
import { useRouter } from "next/router";
import { useNav } from "../../hooks/custom/useNav";
import { useRecoilState } from "recoil";
import { navOpenState } from "../../../../commons/stores";

export default function Nav() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useRecoilState(navOpenState);

  const clickCategory = (data: string) => () => {
    setIsOpen(prev => !prev);
    router.push({
      pathname: "/categoryList",
      query: { data }
    });
  };

  const onClickSeek = () => {
    setIsOpen(prev => !prev);
    router.push("/seek");
  };

  return (
    <S.Wrapper isOpen={isOpen}>
      <S.Container>
        <S.NavListBox>
          <S.NavList onClick={clickCategory("IT")}>
            <S.NavItem>IT・프로그래밍</S.NavItem>
          </S.NavList>
          <S.NavList onClick={clickCategory("DESIGN")}>
            <S.NavItem>디자인</S.NavItem>
          </S.NavList>
          <S.NavList onClick={clickCategory("TRANSLATE")}>
            <S.NavItem>번역・통역</S.NavItem>
          </S.NavList>
          <S.NavList onClick={clickCategory("VIDEO")}>
            <S.NavItem>영상・방송</S.NavItem>
          </S.NavList>
          <S.NavList onClick={clickCategory("MARKETING")}>
            <S.NavItem>마케팅</S.NavItem>
          </S.NavList>
          <S.NavList onClick={clickCategory("DOCUMENT")}>
            <S.NavItem>문서・레포트</S.NavItem>
          </S.NavList>
        </S.NavListBox>
        <S.NavItem onClick={onClickSeek}>구해요</S.NavItem>
      </S.Container>
    </S.Wrapper>
  );
}
