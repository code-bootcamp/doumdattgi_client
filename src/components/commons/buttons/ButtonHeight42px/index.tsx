import styled from "@emotion/styled";

interface IButtonProps {
  isActive: boolean;
  title: string;
  onClick: () => void;
}

export const Button = styled.button`
  width: 50%;
  height: 42px;
  border-radius: 6px;
  border: none;
  color: white;
  background-color: black;
  margin-left: 10px;
  cursor: pointer;
  font-size: 14px;
`;

export default function ButtonHeight42px(props: IButtonProps): JSX.Element {
  return (
    <Button
      onClick={props.onClick}
      style={{
        backgroundColor: props.isActive ? "steelblue" : ""
      }}
    >
      {props.title}
    </Button>
  );
}
