import styled from "@emotion/styled";

interface IButtonProps {
  isActive?: boolean;
  title?: string;
  onClick?: () => void;
}

export const Button = styled.button`
  width: 100%;
  height: 50px;
  border-radius: 6px;
  border: none;
  color: white;
  background-color: #111;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
`;

export default function ButtonHeight50px(props: IButtonProps): JSX.Element {
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