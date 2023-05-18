import { Space, TimePicker } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { useState } from "react";

export default function WorkingTimePicker() {
  const [time, setTime] = useState("");

  dayjs.extend(customParseFormat);

  const checkValue = (e: any) => {
    if (!e) return;

    const result = Math.abs(e[0]?.$H - e[1]?.$H);
    setTime(String(result));
  };

  console.log(time);

  return (
    <Space direction="vertical">
      <TimePicker.RangePicker
        // format="HH:mm"
        // defaultValue={[dayjs("13", "HH"), dayjs("12", "HH")]}
        showHour={true}
        showMinute={false}
        showSecond={false}
        onChange={checkValue}
        style={{ width: "230px", height: "42px" }}
        // status="warning"
      />
    </Space>
  );
}
