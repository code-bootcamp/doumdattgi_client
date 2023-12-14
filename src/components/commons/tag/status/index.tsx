import styled from "@emotion/styled";

const Wating = styled.span`
  display: inline-block;
  font-size: 0.88rem;
  padding: 5px 8px;
  border-radius: 50px;
  border: 1px solid #0958d9;
  background: #e6f4ff;
  color: #0958d9;
`;
const End = styled.span`
  display: inline-block;
  font-size: 0.88rem;
  padding: 5px 8px;
  border-radius: 50px;
  border: 1px solid #cf1322;
  background: #fff1f0;
  color: #cf1322;
`;

interface IProps {
  status: boolean;
}

export default function StatusTag(props: IProps) {
  return (
    <>
      {props.status && <Wating>모집중</Wating>}
      {!props.status && <End>종료</End>}
    </>
  );
}
