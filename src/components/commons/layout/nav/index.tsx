import Link from "next/link";
import * as S from "./styles";

export default function Nav() {
  return (
    <S.Wrapper>
      <S.Container>
        <S.NavListBox>
          <S.NavList>
            <Link href={"/IT・프로그래밍"}>
              <S.NavItem>IT・프로그래밍</S.NavItem>
            </Link>
          </S.NavList>
          <S.NavList>
            <Link href={"/디자인"}>
              <S.NavItem>디자인</S.NavItem>
            </Link>
          </S.NavList>
          <S.NavList>
            <Link href={"/번역・통역"}>
              <S.NavItem>번역・통역</S.NavItem>
            </Link>
          </S.NavList>
          <S.NavList>
            <Link href={"/영상・방송"}>
              <S.NavItem>영상・방송</S.NavItem>
            </Link>
          </S.NavList>
          <S.NavList>
            <Link href={"/마케팅"}>
              <S.NavItem>마케팅</S.NavItem>
            </Link>
          </S.NavList>
          <S.NavList>
            <Link href={"/문서・레포트"}>
              <S.NavItem>문서・레포트</S.NavItem>
            </Link>
          </S.NavList>
        </S.NavListBox>
        <Link href={"/구해요"}>
          <S.NavItem>#구해요</S.NavItem>
        </Link>
      </S.Container>
    </S.Wrapper>
  );
}
