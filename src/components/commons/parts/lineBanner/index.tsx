import { Checkbox, ConfigProvider } from "antd";
import * as S from "./style";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";

export default function LineBanner() {
  const [appCookies, setAppCookies] = useCookies();
  const [isChecked, setIsChecked] = useState(false);
  const [isOpened, setIsOpened] = useState(true);
  const [hasCookie, setHasCookie] = useState(true);

  const onChange = (e: CheckboxChangeEvent) => {
    setIsChecked(e.target.checked);
  };

  const getExpiredDate = (days: number) => {
    const date = new Date();
    date.setDate(date.getDate() + days);
    return date;
  };
  const closeBannerUntilExpires = () => {
    if (isChecked) {
      if (!appCookies) return;

      const expires = getExpiredDate(1);
      setAppCookies("BANNER_EXPIRES", true, { path: "/", expires });
      setIsOpened(false);
    }
    setIsOpened(false);
  };

  useEffect(() => {
    if (appCookies["BANNER_EXPIRES"]) return;
    setHasCookie(false);
  }, []);

  return (
    <>
      {isOpened && !appCookies["BANNER_EXPIRES"] && (
        <S.Wrapper>
          <S.Container>
            <S.Contents>
              <S.Title>
                팀 도움닫기의 포트폴리오 프로젝트 웹사이트입니다.
              </S.Title>
              <S.LinkWrap>
                Github 레포지토리 바로가기:
                <S.Link
                  href="https://github.com/code-bootcamp/doumdattgi_client"
                  target="_blank"
                >
                  FRONTEND
                </S.Link>
                <S.Link
                  href="https://github.com/code-bootcamp/doumdattgi_server"
                  target="_blank"
                >
                  BACKEND
                </S.Link>
              </S.LinkWrap>
            </S.Contents>
            <S.FlexWrap>
              <S.CloseWrap>
                <ConfigProvider
                  theme={{
                    token: {
                      colorPrimary: "#88b04b",
                      controlInteractiveSize: 14
                    }
                  }}
                >
                  <Checkbox onChange={onChange}>
                    <S.CloseText>오늘 하루 더 보지 않기</S.CloseText>
                  </Checkbox>
                </ConfigProvider>
              </S.CloseWrap>
              <S.CloseIcon icon={faXmark} onClick={closeBannerUntilExpires} />
            </S.FlexWrap>
          </S.Container>
        </S.Wrapper>
      )}
    </>
  );
}
