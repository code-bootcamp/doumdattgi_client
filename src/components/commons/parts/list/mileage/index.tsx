import { useMoveToPage } from "../../../hooks/custom/useMoveToPage";
import * as S from "./style";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { fallback } from "../../../../../commons/libraries/fallback";
import Tag from "../../../tag";
import { useQueryFetchMileageProductHistory } from "../../../hooks/queries/useQueryfetchMileageProductHistory";

export default function MileageList(): JSX.Element {
  const { onClickMoveToPage } = useMoveToPage();
  const { data } = useQueryFetchMileageProductHistory();
  console.log(data);

  return (
    <>
      <S.Wrapper>
        <S.Title>특별한 서비스들</S.Title>
        <S.Container>
          <S.ImageBox />
          <S.Category>디자인</S.Category>
          <S.TitleWrapper>
            <S.PostTitle>제목</S.PostTitle>
            <S.Icon icon={faBookmark} className="bookmark" />
          </S.TitleWrapper>
          <S.InfoBox>
            <Tag />
            <S.UserBox>
              <S.Avatar
                onError={e => {
                  const target = e.target as HTMLImageElement;
                  target.src = fallback;
                }}
              />
              <S.UserName>김우렬</S.UserName>
            </S.UserBox>
          </S.InfoBox>
        </S.Container>
      </S.Wrapper>
    </>
  );
}
