import styled from "@emotion/styled";
import { Obj, CategoryObj } from "../../../../commons/libraries/translate";

const Wrapper = styled.div`
  display: inline-block;
  padding: 5px 8px;
  border: 1px solid #929aa0;
  border-radius: 14px;
  background-color: #f6f7f9;
`;
const Text = styled.span`
  color: #929aa0;
  font-size: 14px;
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
