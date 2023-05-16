import * as S from "./style";
import { Avatar, Dropdown, Space } from "antd";
import { CaretDownOutlined, UserOutlined } from "@ant-design/icons";
import Link from "next/link";

export default function Header(): JSX.Element {
  const items = [
    { label: <Link href={"/mypage/profile"}>내 프로필</Link> },
    { label: <Link href={"/mypage/profile"}>포인트</Link> },
    {
      type: "divider"
    },
    { label: <Link href={"/mypage/profile"}>신청자</Link> },
    { label: <Link href={"/mypage/profile"}>작업자</Link> },
    { label: <Link href={"/mypage/settings"}>설정</Link> },
    {
      type: "divider"
    },
    { label: <Link href={"/mypage/profile"}>로그아웃</Link> }
  ];
  return (
    <>
      <S.Wrapper>
        <S.Container>
          <S.Logo>LOGO</S.Logo>
          <S.HeaderBox>
            <S.SearchBox>
              <S.SearchIcon />
              <S.SearchInput />
            </S.SearchBox>
            <S.ShuffleBtn>
              <S.ShuffleIcon src="/shuffle.png" />
            </S.ShuffleBtn>
            {false && (
              <S.LoginBox>
                <Link href={"/login"}>
                  <S.LoginBtn>로그인</S.LoginBtn>
                </Link>
                <Link href={"/signup"}>
                  <S.SignUpBtn>회원가입</S.SignUpBtn>
                </Link>
              </S.LoginBox>
            )}
            {true && (
              <S.UserBox>
                <S.ShuffleBtn>
                  <S.ShuffleIcon src="/chat.png" />
                </S.ShuffleBtn>
                <Dropdown
                  menu={{ items }}
                  trigger={["click"]}
                  placement="bottomRight"
                  arrow={{ pointAtCenter: true }}
                >
                  <Space>
                    <Avatar size={44} style={{ cursor: "pointer", marginLeft: "14px" }} />
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