import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import fontSize from "tui-editor-plugin-font-size";
import "tui-editor-plugin-font-size/dist/tui-editor-plugin-font-size.css";
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import '@toast-ui/editor/dist/i18n/ko-kr';
import { memo } from 'react';

function ToastEditor (props: any) {
	
	return (
		<Editor
			placeholder='상품을 설명해주세요.'
			previewStyle="vertical"
			height="600px"
			initialEditType="wysiwyg"
			useCommandShortcut={true}
			onChange={props.onChangeValue}
			ref={props.editorRef}
			plugins={[colorSyntax, fontSize]}
			autofocus={false}
			language="ko-KR"
			initialValue={props.data}
		></Editor>
	);
}
export default ToastEditor
