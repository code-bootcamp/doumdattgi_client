import { Modal } from "antd";
import { Dispatch, SetStateAction } from "react";
import DaumPostcodeEmbed from "react-daum-postcode";

interface Address {
  isModalOpen?: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  address?: string;
  zonecode?: string;
  onCompleteAddressSearch?: (data: {
    zonecode: string;
    address: string;
  }) => void;
}

export default function AddressModal(props: Address) {
  const handleOk = () => {
    props.setIsModalOpen(false);
  };

  const handleCancel = () => {
    props.setIsModalOpen(false);
  };

  return (
    <>
      {props.isModalOpen && (
        <Modal open={props.isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <DaumPostcodeEmbed onComplete={props.onCompleteAddressSearch} />
        </Modal>
      )}
    </>
  );
}
