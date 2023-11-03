import { TimePicker } from "antd";
import { useEffect } from "react";
import dayjs from "dayjs";

interface IProduct {
  product_startTime: number;
  product_endTime: number;
}

interface ITimePicker {
  data?: IProduct;
  setStartTime: (startTime: number) => void;
  setEndTime: (endTime: number) => void;
  startTime: number;
  endTime: number;
  onChangeWorkTime?: (_: any, timeString: (string | any[])[]) => void
}

export default function TimePick(props: ITimePicker) {
  useEffect(() => {
    props.setStartTime(Number(props.data?.product_startTime));
    props.setEndTime(Number(props.data?.product_endTime));
  }, [props.data]);

  return (
    <>
      <TimePicker.RangePicker
        onChange={props.onChangeWorkTime}
        showHour={true}
        showMinute={false}
        showSecond={false}
        size="large"
        style={{ marginLeft: "10px" }}
        popupStyle={{ width: "200px" }}
        defaultValue={
          props?.data && [
            dayjs(`${props?.data?.product_startTime}:00`, "HH:mm"),
            dayjs(`${props?.data?.product_endTime}:00`, "HH:mm")
          ]
        }
      />
    </>
  );
}
