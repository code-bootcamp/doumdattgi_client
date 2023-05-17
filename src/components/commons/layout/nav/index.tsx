import Link from "next/link";
import * as S from "./styles";

export default function Nav() {
  return (
    <S.Wrapper>
      <S.Container>
        <S.NavListBox>
          <S.NavList>
            <Link href={"/"}>
              <S.NavItem>IT・프로그래밍</S.NavItem>
            </Link>
          </S.NavList>
          <S.NavList>
            <Link href={"/"}>
              <S.NavItem>디자인</S.NavItem>
            </Link>
          </S.NavList>
          <S.NavList>
            <Link href={"/"}>
              <S.NavItem>번역・통역</S.NavItem>
            </Link>
          </S.NavList>
          <S.NavList>
            <Link href={"/"}>
              <S.NavItem>영상・방송</S.NavItem>
            </Link>
          </S.NavList>
          <S.NavList>
            <Link href={"/"}>
              <S.NavItem>마케팅</S.NavItem>
            </Link>
          </S.NavList>
          <S.NavList>
            <Link href={"/"}>
              <S.NavItem>문서・레포트</S.NavItem>
            </Link>
          </S.NavList>
        </S.NavListBox>
        <Link href={"/"}>
          <S.NavItem>#구해요</S.NavItem>
        </Link>
      </S.Container>
    </S.Wrapper>
  );
}
