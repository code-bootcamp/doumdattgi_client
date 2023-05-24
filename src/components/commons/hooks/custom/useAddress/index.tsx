import { useState } from "react";
import { Modal } from "antd";
import DaumPostcodeEmbed from "react-daum-postcode";

interface Address {
  address: string;
  zonecode: string;
}

export default function AddressModal (props) {


  const handleOk = () => {
    props.setIsModalOpen(false);
  };

  const handleCancel = () => {
    props.setIsModalOpen(false);
  };

  const onCompleteAddressSearch = (data: Address): void => {
    props.setAddress(data.address);
    props.setZipcode(data.zonecode);
    props.setIsModalOpen(prev => !prev);
  };
  return (
    <>
      {props.isModalOpen && (
        <Modal open={props.isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <DaumPostcodeEmbed onComplete={onCompleteAddressSearch} />
        </Modal>
      )}
    </>
  );
}
