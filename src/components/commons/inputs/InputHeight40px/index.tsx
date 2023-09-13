import styled from "@emotion/styled";
import { UseFormRegisterReturn } from "react-hook-form";
//
interface IInputProps {
  type?: "text" | "password" | "number";
  register?: UseFormRegisterReturn;
  placeholder?: string;
  value?: string;
  disabled?: boolean;
  defaultValue?: string;
}

export const Input = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 6px;
  border: 1px solid #dbdbdb;
  padding-left: 10px;
  font-size: 14px;
`;

export default function InputHeight40px(props: IInputProps): JSX.Element {
  return (
    <Input
      type={props.type ?? "text"}
      placeholder={props.placeholder}
      {...props.register}
      value={props.value}
      defaultValue={props.defaultValue}
      disabled={props.disabled}
    />
  );
}
