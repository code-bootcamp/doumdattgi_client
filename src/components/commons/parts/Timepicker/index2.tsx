import { TimePicker } from "antd";
import { useEffect } from "react";
import dayjs from "dayjs";

interface IProduct {
  product_startTime: number;
  product_endTime: number;
}

interface ITimePicker {
  data: IProduct;
  setStartTime: (startTime: number) => void;
  setEndTime: (endTime: number) => void;
}

export default function TimePick(props: ITimePicker) {
  useEffect(() => {
    props.setStartTime(Number(props.data?.product_startTime));
    props.setEndTime(Number(props.data?.product_endTime));
  }, [props.data]);

  const onChange = (_: any, timeString: (string | any[])[]) => {
    const startTime = timeString[0].slice(0, 2);
    const endTime = timeString[1].slice(0, 2);
    props.setStartTime(Number(startTime));
    props.setEndTime(Number(endTime));
  };

  return (
    <>
      <TimePicker.RangePicker
        onChange={onChange}
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
