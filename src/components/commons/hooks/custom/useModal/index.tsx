import { useState } from "react";
import { useRecoilState } from "recoil";
import { ModalCancelState } from "../../../../../commons/stores";

// handleCancle 인자로 받아오는 값의 타입 지정
type SetModalType = (value: boolean) => void;

// return 타입 지정
interface IUseModalProps {
  clickModal: () => void;
  openModal: boolean;
  setOpenModal: (value: boolean) => void;
  handleCancel: () => void;
}
//

export default function UseModal(): IUseModalProps {
  const [openModal, setOpenModal] = useState(false);
  const [isCance, setIsCancel] = useRecoilState(ModalCancelState);

  const clickModal = (): void => {
    setOpenModal(true);
    console.log("hi");
  };

  const handleCancel = () => {
    setIsCancel(false);
  };

  return {
    clickModal,
    openModal,
    setOpenModal,
    handleCancel
  };
}
