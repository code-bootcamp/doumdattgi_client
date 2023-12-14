import * as S from "./styles";
import ProfileMyProduct from "./myProduct";
import { fallback } from "../../../../commons/libraries/fallback";
import { useMyProduct } from "../../../commons/hooks/custom/useMyProduct";
import ProfileMyPick from "./myFavorite";
import { Button, Drawer } from "antd";
import { useState } from "react";
import ProfileDrawer from "../../../commons/parts/profileDrawer";
import MetaTag from "../../../../commons/libraries/metaTag";

export default function Profile(): JSX.Element {
  const {
    login,
    imageSrc,
    userTitle,
    onClickMoveToPage,
    isAble,
    onClickTabs,
    mySellProduct,
    mySeekProduct,
    myPick,
    isPick,
    isSeek,
    tab,
    open,
    showDrawer,
    onClose
  } = useMyProduct();

  const tabList = [
    {
      idx: 0,
      content: "내 서비스 목록",
      isSeek: false,
      isPick: false
    },
    {
      idx: 1,
      content: "내 구인글 목록",
      isSeek: true,
      isPick: false
    },
    {
      idx: 2,
      content: "내 북마크 목록",
      isSeek: false,
      isPick: true
    }
  ];

  return (
    <>
      <MetaTag
        title={"도움닫기 | 나만의 포트폴리오"}
        description={"도움닫기에서 나만의 포트폴리오를 쌓아보세요."}
        imgsrc={`https://storage.googleapis.com/doumdattgi-storage/mainIcon.png`}
        keywords={"나만의 포트폴리오"}
        url={"https://doumdattgi.com"}
      />
      <S.ProfileDrawerBox>
        <ProfileDrawer open={open} onClose={onClose} />
      </S.ProfileDrawerBox>
      <S.Wrapper>
        <S.Container>
          <S.WrapperLeft>
            <S.UserBox>
              <S.UserIcon
                onError={e => {
                  const target = e.target as HTMLImageElement;
                  target.src = fallback;
                }}
                src={login?.fetchLoginUser?.user_profileImage ?? fallback}
              />
              <S.UserName>{login?.fetchLoginUser?.user_nickname}</S.UserName>
              <S.UserIntroduce>
                {login?.fetchLoginUser?.user_introduce}
              </S.UserIntroduce>
              <S.ProfileEdit onClick={onClickMoveToPage("/mypage/settings")}>
                프로필 수정하기
              </S.ProfileEdit>
            </S.UserBox>
            <S.DivideLine />
            <S.ContentWrap className="first">
              <S.SubTitle>포트폴리오</S.SubTitle>
              <S.PortfolioLink>
                {login?.fetchLoginUser?.user_portfolio !== ""
                  ? login?.fetchLoginUser?.user_portfolio
                  : "나를 소개하는 포트폴리오 주소를 올려보세요."}
              </S.PortfolioLink>
            </S.ContentWrap>
            <S.ContentWrap>
              <S.SubTitle>슬롯</S.SubTitle>
              <S.SlotBox>
                {isAble?.slot_first === false ? (
                  <S.Slot>가능</S.Slot>
                ) : (
                  <S.SlotDisable>닫힘</S.SlotDisable>
                )}
                {isAble?.slot_second === false ? (
                  <S.Slot>가능</S.Slot>
                ) : (
                  <S.SlotDisable>닫힘</S.SlotDisable>
                )}
                {isAble?.slot_third === false ? (
                  <S.Slot>가능</S.Slot>
                ) : (
                  <S.SlotDisable>닫힘</S.SlotDisable>
                )}
              </S.SlotBox>
            </S.ContentWrap>
            <S.ContentWrap>
              <S.SubTitle>통계</S.SubTitle>
              <S.StatisticsWrap>
                <S.StatisticsBox>
                  <S.StatisticsNum>
                    {login?.fetchLoginUser?.user_workRate ?? "0"}건
                  </S.StatisticsNum>
                  <S.StatisticsTitle>총 작업 수</S.StatisticsTitle>
                </S.StatisticsBox>
                <S.StatisticsBox>
                  <S.TierIcon
                    onError={e => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/noimage.png";
                    }}
                    src={imageSrc}
                  />
                  <S.StatisticsTitle>{userTitle}</S.StatisticsTitle>
                </S.StatisticsBox>
              </S.StatisticsWrap>
            </S.ContentWrap>
          </S.WrapperLeft>
          <S.WrapperRight>
            <S.MobileTitleWrap>
              <S.MobileTitleBox>
                <S.NavIcon onClick={showDrawer}>
                  <S.line className="line1" isOpen={open} />
                  <S.line className="line2" isOpen={open} />
                  <S.line className="line3" isOpen={open} />
                </S.NavIcon>
                <S.ProfileTitle>내 프로필</S.ProfileTitle>
              </S.MobileTitleBox>
              <S.CreateLink
                className="mobile"
                onClick={onClickMoveToPage(isSeek ? "/seek/create" : "/create")}
              >
                <S.CreateIcon src="/pencil.png" />
                <S.CreateText>
                  {isSeek ? "새 구인글 올리기" : "새 서비스 만들기"}
                </S.CreateText>
              </S.CreateLink>
            </S.MobileTitleWrap>
            <S.RightTitleBox>
              <div>
                {tabList.map(el => (
                  <S.ListBtn
                    onClick={onClickTabs(el.isPick, el.isSeek, el.idx)}
                    className={el.idx === tab ? "selected" : ""}
                  >
                    {el.content}
                  </S.ListBtn>
                ))}
              </div>
              <S.CreateLink
                onClick={onClickMoveToPage(isSeek ? "/seek/create" : "/create")}
              >
                <S.CreateIcon src="/pencil.png" />
                <S.CreateText>
                  {isSeek ? "새 구인글 올리기" : "새 서비스 만들기"}
                </S.CreateText>
              </S.CreateLink>
            </S.RightTitleBox>
            {isPick && <ProfileMyPick data={myPick?.fetchPickUserProduct} />}
            {!isPick && (
              <ProfileMyProduct
                data={
                  isSeek
                    ? mySeekProduct?.fetchSellMyProduct
                    : mySellProduct?.fetchMyProduct
                }
                isSeek={isSeek}
              />
            )}
          </S.WrapperRight>
        </S.Container>
      </S.Wrapper>
    </>
  );
}
