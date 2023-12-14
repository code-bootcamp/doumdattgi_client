import { useEffect, useState } from "react";
import { useQueryFetchLoginUser } from "../../queries/useQueryFetchLoginUser";
import { useQueryFetchPickUserProduct } from "../../queries/useQueryFetchPickUserProduct";
import { useQueryFetchSellMyProduct } from "../../queries/useQueryFetchSellMyProduct";
import { useQueryFetchMyProduct } from "../../queries/useQueryfetchMyProduct";
import { useQueryFetchUserSlot } from "../../queries/useQueryfetchUserSlot";
import { useUser } from "../useUser";
import { useMoveToPage } from "../useMoveToPage";

export const useMyProduct = () => {
  // 프로필 서랍
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const { data: login } = useQueryFetchLoginUser();
  const { data: slot } = useQueryFetchUserSlot();
  const {
    data: mySellProduct,
    fetchMore: sellFetchMore,
    refetch: sellRefetch
  } = useQueryFetchMyProduct();
  const {
    data: mySeekProduct,
    fetchMore: seekFetchMore,
    refetch: seekRefetch
  } = useQueryFetchSellMyProduct();
  const {
    data: myPick,
    fetchMore: pickFetchMore,
    refetch: pickRefetch
  } = useQueryFetchPickUserProduct();

  const [isPick, setIsPick] = useState(false);
  const [isSeek, setIsSeek] = useState(false);
  const [tab, setTab] = useState(0);

  const { imageSrc, userTitle } = useUser();
  const { onClickMoveToPage } = useMoveToPage();

  useEffect(() => {
    sellRefetch({
      page: 1
    });
    seekRefetch({
      page: 1
    });
    pickRefetch({
      page: 1
    });
  }, []);

  const sellOnLoadMore = () => {
    if (mySellProduct?.fetchMyProduct === undefined) return;
    sellFetchMore({
      variables: {
        page: Math.ceil((mySellProduct?.fetchMyProduct.length ?? 4) / 4) + 1
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult.fetchMyProduct === undefined) {
          return { fetchMyProduct: [...prev.fetchMyProduct] };
        }
        return {
          fetchMyProduct: [
            ...prev.fetchMyProduct,
            ...fetchMoreResult.fetchMyProduct
          ]
        };
      }
    });
  };
  const seekOnLoadMore = () => {
    if (mySeekProduct?.fetchSellMyProduct === undefined) return;
    seekFetchMore({
      variables: {
        page: Math.ceil((mySeekProduct?.fetchSellMyProduct.length ?? 4) / 4) + 1
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult.fetchSellMyProduct === undefined) {
          return { fetchSellMyProduct: [...prev.fetchSellMyProduct] };
        }
        return {
          fetchSellMyProduct: [
            ...prev.fetchSellMyProduct,
            ...fetchMoreResult.fetchSellMyProduct
          ]
        };
      }
    });
  };
  const pickOnLoadMore = () => {
    if (myPick?.fetchPickUserProduct === undefined) return;
    pickFetchMore({
      variables: {
        page: Math.ceil((myPick?.fetchPickUserProduct.length ?? 4) / 4) + 1
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult.fetchPickUserProduct === undefined) {
          return { fetchPickUserProduct: [...prev.fetchPickUserProduct] };
        }
        return {
          fetchPickUserProduct: [
            ...prev.fetchPickUserProduct,
            ...fetchMoreResult.fetchPickUserProduct
          ]
        };
      }
    });
  };

  const onClickTabs = (isPick: boolean, isSeek: boolean, idx: number) => () => {
    setIsPick(isPick);
    setIsSeek(isSeek);
    setTab(idx)
  };

  // 슬롯
  const isAble = slot?.fetchUserSlot;

  return {
    login,
    slot,
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
    sellOnLoadMore,
    seekOnLoadMore,
    pickOnLoadMore,

    open,
    showDrawer,
    onClose
  };
};
