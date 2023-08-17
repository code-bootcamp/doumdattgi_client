import * as S from "./style";
import { Avatar, Dropdown, Space, MenuProps } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useUser } from "../../hooks/custom/useUser";
import { ItemType } from "antd/es/menu/hooks/useItems";
import { useQueryFetchLoginUser } from "../../hooks/queries/useQueryFetchLoginUser";
import { useMoveToPage } from "../../hooks/custom/useMoveToPage";
import { request, gql } from "graphql-request";
import { IQuery } from "../../../../commons/types/generated/types";
import { useRouter } from "next/router";
import { debounce } from "lodash";
import { useForm } from "react-hook-form";
import { IData } from "./index.types";
import { fallback } from "../../../../commons/libraries/fallback";
import { Turn as Hamburger } from "hamburger-react";
import { useNav } from "../../hooks/custom/useNav";
import { useRecoilState } from "recoil";
import { navOpenState, searchOpenState } from "../../../../commons/stores";
import { SearchOutlined } from "@ant-design/icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Header(): JSX.Element {
  const router = useRouter();
  const { register, handleSubmit, setValue } = useForm<IData>();

  const { onClickLogout } = useUser();
  const { onClickMoveToPage } = useMoveToPage();

  const { data } = useQueryFetchLoginUser();

  const items: MenuProps["items"] = [
    { label: <Link href={"/mypage/profile"}>내 프로필</Link> },
    { label: <Link href={"/mypage/point"}>포인트</Link> },
    {
      type: "divider"
    },
    { label: <Link href={"/mypage/progressBuyer"}>의뢰 목록</Link> },
    { label: <Link href={"/mypage/progressSeller"}>작업 목록</Link> },
    { label: <Link href={"/mypage/settings"}>설정</Link> },
    {
      type: "divider"
    },
    { label: <S.Logout onClick={onClickLogout}>로그아웃</S.Logout> }
  ] as ItemType[];

  const clickRandomBoard = async () => {
    const query = gql`
      query {
        fetchRandomProduct {
          product_product_id
          product_product_title
          product_product_category
          u_user_nickname
          i_image_url
        }
      }
    `;

    try {
      const data = await request<Pick<IQuery, "fetchRandomProduct">>(
        "https://doumdattgi-server.com/graphql",
        query
      );

      const num = Math.floor(Math.random() * data?.fetchRandomProduct.length);
      const MovePage = data?.fetchRandomProduct[num].product_product_id;

      router.push(`/${MovePage}`);
    } catch (error) {
      console.error(error);
    }
  };

  const getDebounce = debounce(e => {
    router.push({
      pathname: `/categoryList/all/${e}`
    });
    setValue("keyword", "");
  }, 1000);

  const searchKeyword = (data: IData) => {
    setIsOpen2(prev => !prev);
    getDebounce(data.keyword);
  };

  const [isOpen, setIsOpen] = useRecoilState(navOpenState);
  const [isOpen2, setIsOpen2] = useRecoilState(searchOpenState);
  const onClickNav = () => {
    setIsOpen(prev => !prev);
  };
  const onClickSearch = () => {
    setIsOpen2(prev => !prev);
  };

  return (
    <>
      <S.Wrapper>
        <S.Container>
          <S.logoWrap>
            <S.NavIcon onClick={onClickNav}>
              {/* <Hamburger toggle={setIsOpen} toggled={isOpen} size={30} /> */}
              <S.line className="line1" isOpen={isOpen} />
              <S.line className="line2" isOpen={isOpen} />
              <S.line className="line3" isOpen={isOpen} />
            </S.NavIcon>
            <S.Logo onClick={onClickMoveToPage("/")}>
              <S.LogoIcon src="/logo.svg" />
              <S.LogoTitle>도움닫기</S.LogoTitle>
            </S.Logo>
          </S.logoWrap>
          <S.HeaderBox>
            <form onSubmit={handleSubmit(searchKeyword)}>
              <S.SearchWrap isOpen={isOpen2}>
                <S.SearchBox isOpen={isOpen2}>
                  <S.SearchIcon icon={faSearch} />
                  <S.SearchInput {...register("keyword")} />
                  <S.SearchBtn type="submit"></S.SearchBtn>
                </S.SearchBox>
              </S.SearchWrap>
            </form>
            <S.ShuffleBtn onClick={onClickSearch} className="loupe">
              <S.ShuffleIcon src="/loupe.png" />
            </S.ShuffleBtn>
            <S.ShuffleBtn onClick={clickRandomBoard}>
              <S.ShuffleIcon src="/shuffle.png" />
            </S.ShuffleBtn>
            {!data && (
              <S.LoginBox>
                <S.LoginBtn onClick={onClickMoveToPage("/login")}>
                  로그인
                </S.LoginBtn>
                <Link href={"/signup"}>
                  <S.SignUpBtn>회원가입</S.SignUpBtn>
                </Link>
              </S.LoginBox>
            )}
            {data && (
              <S.UserBox>
                <S.ShuffleBtn>
                  <S.ShuffleIcon src="/chat-bubble.png" />
                </S.ShuffleBtn>
                <Dropdown
                  menu={{ items }}
                  trigger={["click"]}
                  placement="bottomRight"
                  arrow={{ pointAtCenter: true }}
                  overlayClassName={"header"}
                >
                  <Space>
                    <S.Avatar
                      onError={e => {
                        const target = e.target as HTMLImageElement;
                        target.src = fallback;
                      }}
                      src={data?.fetchLoginUser?.user_profileImage ?? fallback}
                    />
                  </Space>
                </Dropdown>
              </S.UserBox>
            )}
          </S.HeaderBox>
        </S.Container>
      </S.Wrapper>
      <S.DivideLine />
    </>
  );
}
