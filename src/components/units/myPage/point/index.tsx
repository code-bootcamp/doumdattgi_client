import { useRecoilState } from "recoil";
import { ModalCancelState, refetchAtom } from "../../../../commons/stores";
import UseModal from "../../../../components/commons/hooks/custom/useModal/index";
import ChargeModal from "../../../commons/parts/Modals/Charge/index";
import * as S from "./index.styles";
import { MouseEvent, useEffect, useState } from "react";
import PayList from "../../../commons/parts/Point/paylist";
import { useQueryFetchUserPaymentInfo } from "../../../commons/hooks/queries/useQueryFetchUserPaymentInfo";
import RefundPoint from "../../../commons/parts/Modals/Refund";
import { IValueArgs } from "./index.types";
import { useQueryFetchLoginUser } from "../../../commons/hooks/queries/useQueryFetchLoginUser";
import InfiniteScroll from "react-infinite-scroller";
import { useRouter } from "next/router";
import MetaTag from "../../../../commons/libraries/metaTag";

export default function PaymentPresenter(): JSX.Element {
  const router = useRouter();
  //
  const [isCancel, setIsCancel] = useRecoilState(ModalCancelState);
  const [refetches, setRefetch] = useRecoilState(refetchAtom);

  const [isRefund, setIsRefund] = useState(false);
  const [refundInfo, setRefundInfo] = useState(["", ""]);
  const [status, setStatus] = useState([
    { title: "전체", key: 0, isSelected: true },
    { title: "충전 내역", key: 1, isSelected: false },
    { title: "입금 내역", key: 2, isSelected: false },
    { title: "의뢰 요청", key: 3, isSelected: false },
    { title: "의뢰 취소", key: 4, isSelected: false },
    { title: "환불 내역", key: 5, isSelected: false }
  ]);
  const [payState, setPayState] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const { clickModal, openModal, setOpenModal } = UseModal();
  const { data: UserData, refetch: loginRefetch } = useQueryFetchLoginUser();
  const {
    data,
    fetchMore,
    refetch: payRefetch
  } = useQueryFetchUserPaymentInfo(payState);

  const dataArr = data?.fetchPayments ?? [];

  useEffect(() => {
    if (isCancel) {
      setOpenModal(false);
    }
  }, [isCancel]);

  //  결제내역 refetch
  useEffect(() => {
    setRefetch(prev => ({ ...prev, login: loginRefetch, payment: payRefetch }));
    payRefetch({ page: 1, pageSize: 10, payment_status: "" });
  }, [payRefetch, router.asPath]);

  // 총 보유 포인트
  const allAmount = UserData?.fetchLoginUser?.user_point;

  // 환불요청
  const clickRefund = (value: IValueArgs) => () => {
    const Info = [...refundInfo];

    Info[0] = value.payment_impUid;
    Info[1] = value.payment_type;

    setIsRefund(true);
    setRefundInfo(Info);
  };

  const TrnaslatePointSelect: { [key: string]: string } = {
    전체: "",
    "충전 내역": "PAYMENT",
    "입금 내역": "SELL",
    "의뢰 요청": "REQUEST",
    "의뢰 취소": "REFUND",
    "환불 내역": "CANCEL"
  };

  // 포인트 내역 네비게이션 바 선택 체크
  const selectState = async (e: MouseEvent<HTMLLIElement>) => {
    const selectedId = e.currentTarget.id;

    setStatus(prev =>
      prev.map(el => ({ ...el, isSelected: el.title === selectedId }))
    );
    setPayState(TrnaslatePointSelect[selectedId]);

    const state = TrnaslatePointSelect[selectedId];
    await payRefetch({ page: 1, pageSize: 10, payment_status: state });
  };

  // 결제 내역 무한스크롤
  const onLoadMore = () => {
    if (data === undefined || loading) return;
    setLoading(true);

    fetchMore({
      variables: {
        page: Math.ceil((data?.fetchPayments?.length ?? 10) / 10) + 1
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult.fetchPayments === undefined) {
          return {
            fetchPayments: [...prev.fetchPayments]
          };
        }

        return {
          fetchPayments: [
            ...prev.fetchPayments,
            ...fetchMoreResult.fetchPayments
          ]
        };
      }
    });
  };

  return (
    <>
      <MetaTag
        title={"도움닫기 | 나만의 포트폴리오"}
        description={"도움닫기에서 나만의 포트폴리오를 쌓아보세요."}
        imgsrc={`https://storage.googleapis.com/doumdattgi-storage/mainIcon.png`}
        keywords={"나만의 포트폴리오"}
        url={"https://doumdattgi.com"}
      />
      <RefundPoint
        refundInfo={refundInfo}
        setIsRefund={setIsRefund}
        isRefund={isRefund}
      />
      <ChargeModal openModal={openModal} setOpenModal={setOpenModal} />
      <S.Wrapper>
        <S.Container>
          <S.Title>포인트</S.Title>
          <S.SelectBar>
            {status.map(el => (
              <S.selectOption
                isSelect={el.isSelected}
                id={el.title}
                key={el.key}
                onClick={selectState}
              >
                {el.title}
              </S.selectOption>
            ))}
          </S.SelectBar>
        </S.Container>
        <S.Container>
          <S.HoldingBox>
            <S.HoldTitle>보유포인트</S.HoldTitle>
            <S.CurrentHold>
              <S.HoldPoint>{`${
                UserData?.fetchLoginUser.user_point ?? "0"
              } P`}</S.HoldPoint>
              <S.ChargeBtn onClick={clickModal}>포인트 충전</S.ChargeBtn>
            </S.CurrentHold>
          </S.HoldingBox>
          {data?.fetchPayments.length === 0 ? (
            <S.Nothing>내역이 없습니다</S.Nothing>
          ) : (
            <InfiniteScroll loadMore={onLoadMore} pageStart={0} hasMore={true}>
              <>
                {data?.fetchPayments.map(el => (
                  <PayList
                    dataArr={dataArr}
                    clickRefund={clickRefund}
                    el={el}
                    key={el.payment_id}
                    payAmount={el.payment_amount}
                    allAmount={allAmount ?? 0}
                    payment_impUid={""}
                    payment_type={""}
                    payment_createdAt={""}
                    payment_amount={0}
                  />
                ))}
              </>
            </InfiniteScroll>
          )}
        </S.Container>
      </S.Wrapper>
    </>
  );
}
