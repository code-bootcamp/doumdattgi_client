import styled from "@emotion/styled";
import { UseFormRegisterReturn } from "react-hook-form";

interface IInputProps {
  type?: "text" | "password";
  register?: UseFormRegisterReturn;
  placeholder?: string;
}

export const Input = styled.input`
  width: 100%;
  height: 42px;
  border-radius: 6px;
  border: 1px solid #dbdbdb;
  padding-left: 10px;
  margin: 5px 0px;
  font-size: 0.88rem;
`;

export default function InputHeight42px(props: IInputProps): JSX.Element {
  return (
    <Input
      type={props.type ?? "text"}
      placeholder={props.placeholder}
      {...props.register}
    />
  );
}
