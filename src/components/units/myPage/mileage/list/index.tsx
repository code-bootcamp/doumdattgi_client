import * as S from "../styles";
import Tag from "../../../../commons/tag";
import { useMoveToPage } from "../../../../commons/hooks/custom/useMoveToPage";
import { fallback } from "../../../../../commons/libraries/fallback";
import { CategoryObj } from "../../../../../commons/libraries/translate";
import { useQueryFetchMileageProductHistory } from "../../../../commons/hooks/queries/useQueryfetchMileageProductHistory";

export default function MileageList(): JSX.Element {
  const { data } = useQueryFetchMileageProductHistory();
  const { onClickMoveToPage } = useMoveToPage();

  console.log(data);

  // 무한 스크롤 로직
  // const onLoadMore = () => {
  //   if (data === undefined) return;

  //   fetchMore({
  //     variables: {
  //       page: Math.ceil((data?.fetchMileageProductHistory.length ?? 5) / 5) + 1
  //     },
  //     updateQuery: (prev, { fetchMoreResult }) => {
  //       if (fetchMoreResult.fetchMileageProductHistory === undefined) {
  //         return { fetchMyProduct: [...prev.fetchMileageProductHistory] };
  //       }

  //       return {
  //         fetchMyProduct: [
  //           ...prev.fetchMileageProductHistory,
  //           ...fetchMoreResult.fetchMileageProductHistory
  //         ]
  //       };
  //     }
  //   });
  // };

  return (
    <>
      {data?.fetchMileageProductHistory.length === 0 ? (
        <S.ListNone>아직 서비스 이용권을 사용한 게시물이 없습니당</S.ListNone>
      ) : (
        <>
          {data?.fetchMileageProductHistory.map(el => (
            <S.RightListBox onClick={onClickMoveToPage(`/${el.product_id}`)}>
              <S.ListImage
                onError={e => {
                  const target = e.target as HTMLImageElement;
                  target.src = fallback;
                }}
                src={
                  el.images === undefined || el.images === null
                    ? ""
                    : el.images[0]?.image_url
                }
              />
              <S.RightDetailBox>
                <S.ListCategory>
                  {CategoryObj[el.product_category]}
                </S.ListCategory>
                <S.ListTitle>{el.product_title}</S.ListTitle>
                <Tag data={el.product_workDay} />
                <S.DivideLine />
                <S.Remarks>{el.product_summary}</S.Remarks>
              </S.RightDetailBox>
            </S.RightListBox>
          ))}
        </>
      )}
    </>
  );
}
