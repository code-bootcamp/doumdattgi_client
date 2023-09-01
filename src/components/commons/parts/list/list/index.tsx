import * as S from "./style";
import { useRouter } from "next/router";
import Link from "next/link";
import { faAngleDown, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Select } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useQueryfetchSubCategoryProduct } from "../../../hooks/queries/useQueryFetchSubCategoryProduct";
import { useMoveToPage } from "../../../hooks/custom/useMoveToPage";
import { CategoryObj } from "../../../../../commons/libraries/translate";
import CardBox from "../../cardBox/col4";
import { useQueryFetchCategoryProduct } from "../../../hooks/queries/useQueryFetchCategoryProduct";
import ListCardBox from "../../cardBox/list";
import { useEffect, useState } from "react";
import { IFetchProductOutput } from "../../../../../commons/types/generated/types";
import { useQueryFetchLikeCategoryProduct } from "../../../hooks/queries/useQueryfetchLikeCategoryProduct";

interface IPropsList {
  isAll: boolean;
}

export default function ProductList(props: IPropsList) {
  const router = useRouter();
  const { onClickMoveToPage } = useMoveToPage();

  const [isRecent, setIsRecent] = useState(true);
  const [isLike, setIsLike] = useState(false);

  // router가 들어가는 값 타입지정 (타입이 배열일 가능성)
  const category = Array.isArray(router.query.data)
    ? router.query.data[0]
    : router.query.data || "";

  const { data, fetchMore, refetch } = useQueryFetchCategoryProduct(category);
  const { data: data2, refetch: refetch2 } =
    useQueryFetchLikeCategoryProduct(category);

  // 인기순, 아니냐에 따라 refetch 분리
  useEffect(() => {
    if (isLike) {
      refetch2({
        product_category: category,
        page: 1,
        pageSize: 10
      });
    }
  }, [isLike]);

  // 카테고리 최신순, 과거순 정렬
  const categoryList = !isRecent
    ? data?.fetchCategoryProduct.slice().reverse() || []
    : data?.fetchCategoryProduct || [];

  const LikeList = data2?.fetchLikeCategoryProduct ?? [];

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

  // 조회용 카테고리 Key값
  const CategoryTitle =
    data?.fetchCategoryProduct?.[0]?.product_product_category;

  // 무한 스크롤 로직
  const onLoadMore = () => {
    if (data === undefined) return;

    fetchMore({
      variables: {
        page: Math.ceil((data?.fetchCategoryProduct?.length ?? 10) / 10) + 1
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult.fetchCategoryProduct === undefined) {
          return {
            fetchCategoryProduct: [...prev.fetchCategoryProduct]
          };
        }

        return {
          fetchCategoryProduct: [
            ...prev.fetchCategoryProduct,
            ...fetchMoreResult.fetchCategoryProduct
          ]
        };
      }
    });
  };

  console.log(categoryList);
  console.log(LikeList);

  return (
    <S.Container isAll={props.isAll}>
      <S.CategoryBox>
        <Link href="/categoryList/all">
          <S.CategoryTag>홈</S.CategoryTag>
        </Link>
        {!props.isAll && (
          <>
            <S.AngleRight icon={faAngleRight} />
            <S.CategoryTag>
              {CategoryObj[CategoryTitle ?? category]}
            </S.CategoryTag>
            {/* <S.AngleRight icon={faAngleRight} /> */}
          </>
        )}

        {/* <S.CategoryTag>{Sub}</S.CategoryTag> */}
      </S.CategoryBox>
      <S.LengthBox>
        <S.LengthText>
          {data?.fetchCategoryProduct?.length ?? 0}개의 서비스
        </S.LengthText>
        <Select
          defaultValue="최신순"
          style={{ width: 100 }}
          suffixIcon={<FontAwesomeIcon icon={faAngleDown} />}
          bordered={false}
          options={[
            { value: "최신순", label: "최신순" },
            { value: "인기순", label: "인기순" },
            { value: "과거순", label: "과거순" }
          ]}
          onChange={RecentOrNot}
        />
      </S.LengthBox>
      <S.ContentsBox loadMore={onLoadMore} pageStart={0} hasMore={true}>
        <>
          {!isLike
            ? categoryList?.map(el => (
                <ListCardBox
                  key={el.product_product_id}
                  data={el}
                  isLike={false}
                />
              ))
            : LikeList?.map(el => (
                <ListCardBox
                  key={el.product_product_id}
                  data2={el}
                  isLike={true}
                />
              ))}
        </>
      </S.ContentsBox>
    </S.Container>
  );
}
