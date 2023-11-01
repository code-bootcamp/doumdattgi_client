import type { DrawerProps } from "antd";
import { Button, Drawer, Space } from "antd";
import { useState } from "react";
import Comment from "../../../units/comment";
import { Arrow } from "./index.styles";
import * as S from "./index.styles";
import { IQuery } from "../../../../commons/types/generated/types";

interface IProps {
  data?: Pick<IQuery, "fetchOneRequest"> | undefined;
}

export const useDrawer = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return {
    open,
    showDrawer,
    onClose
  };
};

export default function CommentDrawer(props: IProps) {
  const { onClose, open, showDrawer } = useDrawer();

  return (
    <>
      <Space
        style={{
          position: "fixed"
        }}
      >
        <S.ButtonWrap onClick={showDrawer}>
          <span>MESSAGE</span>
          <svg width="13px" height="10px" viewBox="0 0 13 10">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
        </S.ButtonWrap>
      </Space>
      <Drawer
        placement="left"
        contentWrapperStyle={{
          width: "400px"
        }}
        closable={false}
        onClose={onClose}
        open={open}
      >
        <Comment data={props.data} />
      </Drawer>
    </>
  );
}
