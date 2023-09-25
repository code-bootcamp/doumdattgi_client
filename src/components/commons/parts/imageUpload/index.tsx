import { PlusOutlined } from "@ant-design/icons";
import { Modal, Upload, UploadFile } from "antd";
import { RcFile, UploadProps } from "antd/es/upload";
import { useEffect, useState } from "react";
import { UploadRequestOption } from "../../../../../node_modules/rc-upload/lib/interface";

interface IData {
  image_url: string;
}

const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = error => reject(error);
  });

const uploadButton = (
  <div>
    <PlusOutlined />
    <div style={{ marginTop: 8 }}>Upload</div>
  </div>
);

function ImageUpload(props: any): JSX.Element {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");

  // 이미지 수정부분
  useEffect(() => {
    const array = props.data?.map((el: IData) => el.image_url);
    if (array !== undefined) {
      let arr: { url: string }[] = [];
      array.map((el: string) => {
        let obj = { url: `${el}` };
        arr.push(obj);
      });
      props.setFileList(arr);
    }
  }, [props.data]);

  const handleChange: UploadProps["onChange"] = ({ fileList: newFileList }) => {
    props.setFileList(newFileList);
  };

  const handlePreview = async (file: UploadFile) => {
    file.preview = await getBase64(file.originFileObj as RcFile);

    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url!.substring(file.url!.lastIndexOf("/") + 1)
    );
  };

  const handleCancel = () => setPreviewOpen(false);

  const uploadImage = (options: UploadRequestOption) => {
    const { onSuccess, file } = options;
    onSuccess("Ok");
  };

  return (
    <>
      <Upload
        listType="picture-card"
        onChange={props.onChangeThumbnailImage}
        onPreview={handlePreview}
        fileList={props.fileList}
        customRequest={uploadImage}
      >
        {props.fileList?.length >= 8 ? null : uploadButton}
      </Upload>
      <Modal
        open={previewOpen}
        title={previewTitle}
        footer={null}
        onCancel={handleCancel}
      >
        <img alt="example" style={{ width: "100%" }} src={previewImage} />
      </Modal>
    </>
  );
}
export default ImageUpload;
