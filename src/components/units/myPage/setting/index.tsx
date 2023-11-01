import SettingsTop from "./top";
import SettingsBottom from "./bottom";
import MetaTag from "../../../../commons/libraries/metaTag";

export default function Settings() {
  return (
    <>
      <MetaTag
        title={"도움닫기 | 나만의 포트폴리오"}
        description={"도움닫기에서 나만의 포트폴리오를 쌓아보세요."}
        imgsrc={`https://storage.googleapis.com/doumdattgi-storage/mainIcon.png`}
        keywords={"나만의 포트폴리오"}
        url={"https://doumdattgi.com"}
      />
      <SettingsTop />
      <SettingsBottom />
    </>
  );
}
