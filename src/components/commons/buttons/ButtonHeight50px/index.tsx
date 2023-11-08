import styled from "@emotion/styled";

interface IButtonProps {
  isActive?: boolean;
  title?: string;
  isYou?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | undefined
  disabled?: boolean
}

export default function ButtonHeight50px(props: IButtonProps): JSX.Element {
  const Button = styled.button`
    width: 100%;
    height: 50px;
    border-radius: 6px;
    border: none;
    color: ${(props: IButtonProps) =>
      props.isActive ? "#fff" : "#aaa"};
    background-color: ${(props: IButtonProps) =>
      props.isActive ? "#88b04b" : "#eee"};
    cursor: pointer;
    font-size: 1rem;
    font-weight: 600;
  `;

  return (
    <Button
      onClick={props.onClick}
      isYou={props.isYou}
      isActive={props.isActive}
      type={props.type}
      disabled={props.disabled}
    >
      {props.title}
    </Button>
  );
}
