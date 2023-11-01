import styled from "@emotion/styled";
import { Obj, CategoryObj } from "../../../../commons/libraries/translate";
import { mq } from "../../../../commons/libraries/breakPoints";

const Wrapper = styled.div`
  display: flex;
  padding: 5px 8px;
  border: 1px solid #929aa0;
  border-radius: 14px;
  background-color: #f6f7f9;
  word-break: keep-all;
  text-align: center;
  align-items: center;
`;
const Text = styled.span`
  color: #929aa0;
  font-size: 0.88em;
  font-weight: 600;
  display: block;
`;

interface IProps {
  data: string;
}

export default function Tag(props: IProps) {
  return (
    <>
      {Obj[props.data] && (
        <Wrapper>
          <Text>{Obj[props.data]}</Text>
        </Wrapper>
      )}
      {CategoryObj[props.data] && (
        <Wrapper>
          <Text>{CategoryObj[props.data]}</Text>
        </Wrapper>
      )}
      {!CategoryObj[props.data] && !Obj[props.data] && (
        <Wrapper>
          <Text>{props.data}</Text>
        </Wrapper>
      )}
    </>
  );
}
