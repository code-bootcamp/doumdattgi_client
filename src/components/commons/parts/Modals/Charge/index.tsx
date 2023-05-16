import { useEffect } from "react";
import { Modal } from "antd";
import ChargeDropBox from "../../Dropboxs/Point/index";
import { IProps } from "./index.types";
import UseModal from "../../../hooks/custom/useModal/index";

export default function ChargeModal(props: IProps): JSX.Element {
  const { openModal, setOpenModal, handleCancel } = UseModal();

  useEffect(() => {
    if (props.openModal) {
      setOpenModal(true);
    }
  }, [props.openModal]);

  return (
    <Modal
      open={openModal}
      footer={null}
      onCancel={handleCancel(props.setOpenModal)}
    >
      <ChargeDropBox />
    </Modal>
  );
}
