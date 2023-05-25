import type { DrawerProps } from "antd";
import { Button, Drawer, Space } from "antd";
import { useState } from "react";
import Comment from "../../../units/comment";
import { Arrow } from "./index.styles";

export default function CommentDrawer(props) {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<DrawerProps["placement"]>("left");

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  //   const onChange = (e: RadioChangeEvent) => {
  //     setPlacement(e.target.value);
  //   };

  const CommentBtnStyle = {
    width: "60px",
    height: "150px",
    backgroundColor: "#efefef",
    borderRadius: "0px 25px 25px 0px",
    border: "1px solid #bdbdbd"
    // display: "flex",
    // textAlign: "left",
  };

  return (
    <>
      <Space
        style={{
          width: "200px",
          height: "100vh",
          position: "fixed"
        }}
      >
        <Button type="primary" onClick={showDrawer} style={CommentBtnStyle}>
          <Arrow>▶︎</Arrow>
        </Button>
      </Space>
      <Drawer
        placement={placement}
        contentWrapperStyle={{
          width: "38vw"
        }}
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
      >
        <Comment data={props.data} />
      </Drawer>
    </>
  );
}
