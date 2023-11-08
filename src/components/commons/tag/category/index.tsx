import styled from "@emotion/styled";
import { Obj, CategoryObj } from "../../../../commons/libraries/translate";

const Wrapper = styled.div`
  padding: 5px 8px;
  border: 1px solid #929aa0;
  border-radius: 14px;
  background-color: #f6f7f9;
  word-break: keep-all;
  text-align: center;
  align-items: center;
`;
// for subcategory overflow
const Wrapper2 = styled.div`
  padding: 5px 8px;
  border: 1px solid #929aa0;
  border-radius: 14px;
  background-color: #f6f7f9;
  word-break: keep-all;
  text-align: center;
  align-items: center;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const Text = styled.span`
  color: #929aa0;
  font-size: 0.88rem;
  font-weight: 600;
  display: block;
  white-space: nowrap;
`;
// for subcategory overflow
const Text2 = styled.span`
  color: #929aa0;
  font-size: 0.88rem;
  font-weight: 600;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap; /* 텍스트가 한 줄로 표시되도록 함 */
`;

interface IProps {
  data: string;
}

export default function Tag(props: IProps) {
  return (
    <>
      {/* worktime */}
      {Obj[props.data] && (
        <Wrapper>
          <Text>{Obj[props.data]}</Text>
        </Wrapper>
      )}
      {/* main category */}
      {CategoryObj[props.data] && (
        <Wrapper>
          <Text>{CategoryObj[props.data]}</Text>
        </Wrapper>
      )}
      {/* subcategory */}
      {!CategoryObj[props.data] && !Obj[props.data] && (
        <Wrapper2>
          <Text2>{props.data}</Text2>
        </Wrapper2>
      )}
    </>
  );
}
