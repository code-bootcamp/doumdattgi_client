import * as S from "./index.styles";

export default function PayList() {
  return (
    <S.TransferList>
      {new Array(5).fill(1).map((_, idx) => (
        <S.TransactionInfo key={idx}>
          <S.PayInfo>
            <S.Company>카카오페이</S.Company>
            <S.Date>2023. 05. 12 12:08</S.Date>
          </S.PayInfo>
          <S.TransactInfo>
            <S.Point>100,000 P</S.Point>
            <S.Amount>100,000 원</S.Amount>
          </S.TransactInfo>
        </S.TransactionInfo>
      ))}
    </S.TransferList>
  );
}
