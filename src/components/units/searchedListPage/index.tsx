import * as S from "./index.styles";
import { useQueryfetchSearchProduct } from "../../commons/hooks/queries/useQueryFetchSearchProduct";
import InfiniteScroll from "react-infinite-scroller";
import { useMoveToPage } from "../../commons/hooks/custom/useMoveToPage";
import { CategoryObj, Obj } from "../../../commons/libraries/translate";
import { useRouter } from "next/router";
import CardBox from "../../commons/parts/cardBox/col4";
import { Select } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

export default function SearchedPage() {
  const router = useRouter();

  const [isRecent, setIsRecent] = useState(true);
  const [isLike, setIsLike] = useState(false);

  const keyWord = Array.isArray(router.query.word)
    ? router.query.word[0]
    : router.query.word || "";

  const { data, fetchMore } = useQueryfetchSearchProduct(keyWord);
  const { onClickMoveToPage } = useMoveToPage();

  const RecentOrNot = (value: string) => {
    if (value === "최신순") {
      setIsRecent(true);
      setIsLike(false);
    } else if (value === "인기순") {
      setIsRecent(true);
      setIsLike(true);
    } else if (value === "과거순") {
      setIsRecent(false);
      setIsLike(false);
    }
  };

  //카테고리 순서 지정 (최신순 or 과거순)
  const categoryList = !isRecent
    ? data?.fetchSearchProduct.slice().reverse() || []
    : data?.fetchSearchProduct || [];

  // 카테고리 순서 지정 (인기순)
  const popularList = [...(data?.fetchSearchProduct ?? [])].sort(
    (a, b) => b.pick_count - a.pick_count
  );

  //
  //

  const onLoadMore = () => {
    if (data === undefined) return;

    fetchMore({
      variables: {
        page: Math.ceil((data?.fetchSearchProduct?.length ?? 10) / 10) + 1
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult.fetchSearchProduct === undefined) {
          return {
            fetchSearchProduct: [...prev.fetchSearchProduct]
          };
        }

        return {
          fetchSearchProduct: [
            ...prev.fetchSearchProduct,
            ...fetchMoreResult.fetchSearchProduct
          ]
        };
      }
    });
  };

  return (
    <S.Wrapper>
      <S.Container>
        <S.WrapperRight>
          <S.CategoryTag>{`${keyWord} 검색결과`}</S.CategoryTag>
          <S.RightHeader>
            <div>
              {data?.fetchSearchProduct?.length ?? 0}개의 서비스
            </div>
            <Select
              defaultValue="최신순"
              style={{ width: 100 }}
              bordered={false}
              suffixIcon={<FontAwesomeIcon icon={faAngleDown} />}
              options={[
                { value: "최신순", label: "최신순" },
                { value: "인기순", label: "인기순" },
                { value: "과거순", label: "과거순" }
              ]}
              onChange={RecentOrNot}
            />
          </S.RightHeader>
          <InfiniteScroll loadMore={onLoadMore} pageStart={0} hasMore={true}>
            <S.ContentsBox>
              {!isLike
                ? categoryList.map(el => (
                    <CardBox key={el.product_product_id} data={el} />
                  ))
                : popularList.map(el => (
                    <CardBox key={el.product_product_id} data={el} />
                  ))}
            </S.ContentsBox>
          </InfiniteScroll>
        </S.WrapperRight>
      </S.Container>
    </S.Wrapper>
  );
}
