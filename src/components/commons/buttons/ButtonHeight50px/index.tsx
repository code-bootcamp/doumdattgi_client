import styled from "@emotion/styled";

interface IButtonProps {
  isActive?: boolean;
  title?: string;
  isYou?: boolean;
  onClick?: () => void;
}

// export const Button = styled.button`
//   width: 100%;
//   height: 50px;
//   border-radius: 6px;
//   border: none;
//   color: white;
//   background-color: ${props => (props.isYou ? "gold" : "#111;")};
//   cursor: pointer;
//   font-size: 16px;
//   font-weight: 600;
// `;

export default function ButtonHeight50px(props: IButtonProps): JSX.Element {
  console.log(props);

  const Button = styled.button`
    width: 100%;
    height: 50px;
    border-radius: 6px;
    border: none;
    color: white;
    background-color: ${(props: IButtonProps) =>
      props.isYou ? "gold" : "black"};
    cursor: pointer;
    font-size: 16px;
    font-weight: 600;
  `;

  return (
    <Button
      onClick={props.onClick}
      isYou={props.isYou}
      // style={{
      //   backgroundColor: props.isActive ? "steelblue" : ""
      // }}
    >
      {props.title}
    </Button>
  );
}
