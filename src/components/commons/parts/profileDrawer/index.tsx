import type { DrawerProps } from "antd";
import { Drawer, Space } from "antd";
import { useState } from "react";
import * as S from "./style";
import { fallback } from "../../../../commons/libraries/fallback";
import { useMyProduct } from "../../hooks/custom/useMyProduct";

export default function ProfileDrawer() {
  const { login, imageSrc, userTitle, onClickMoveToPage, isAble } =
    useMyProduct();

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Space>
        <S.NavIcon onClick={showDrawer}>
          <S.line className="line1" isOpen={open} />
          <S.line className="line2" isOpen={open} />
          <S.line className="line3" isOpen={open} />
        </S.NavIcon>
      </Space>
      <Drawer
        placement="left"
        closable={false}
        onClose={onClose}
        open={open}
        contentWrapperStyle={{
          width: "360px"
        }}
      >
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
      </Drawer>
    </>
  );
}