import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
// import { BorderOutlined } from "@ant-design/icons";

interface IEditorProps {
  onChange?: (value: string) => void;
  value?: string;
}

export default function ToastEditor(props: IEditorProps) {
  return (
    <Editor height="504px" onChange={props.onChange}>
      {props.value}
    </Editor>
  );
}
