import { useState } from "react";

// handleCancle 인자로 받아오는 값의 타입 지정
type SetModalType = (value: boolean) => void;

// return 타입 지정
interface IUseModalProps {
  clickModal: () => void;
  openModal: boolean;
  setOpenModal: (value: boolean) => void;
  handleCancel: (setModal: SetModalType) => () => void;
}
//

export default function UseModal(): IUseModalProps {
  const [openModal, setOpenModal] = useState(false);

  const clickModal = (): void => {
    setOpenModal(true);
    console.log("hi");
  };

  const handleCancel = (setModal: SetModalType) => (): void => {
    setOpenModal(false);
    setModal(false);
  };

  return {
    clickModal,
    openModal,
    setOpenModal,
    handleCancel
  };
}
