// // import React, { useState, useEffect, ChangeEvent } from "react";
// // import { Button, Modal } from "antd";

// // const Timer: React.FC = () => {
// //   const [timer, setTimer] = useState<number>(180);
// //   const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
// //   const [isInputDisabled, setIsInputDisabled] = useState<boolean>(false);
// //   const [verificationCode, setVerificationCode] = useState<string>("");

// //   useEffect(() => {

// //   }, [timer]);

// //   const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
// //     const code: string = event.target.value;
// //     setVerificationCode(code);
// //   };

// //   const showModal = (): void => {
// //     setIsModalOpen(true);
// //     setTimer(2);
// //     setIsInputDisabled(false);
// //   };

// //   const handleOk = (): void => {
// //     setIsModalOpen(false);
// //   };

// //   const handleCancel = (): void => {
// //     setIsModalOpen(false);
// //     setIsInputDisabled(false);
// //   };

// //   const formatTime = (seconds: number): string => {
// //     const minutes: number = Math.floor(seconds / 60);
// //     const remainingSeconds: number = seconds % 60;

// //     const formattedMinutes: string = String(minutes).padStart(2, "0");
// //     const formattedSeconds: string = String(remainingSeconds).padStart(2, "0");

// //     return `${formattedMinutes}:${formattedSeconds}`;
// //   };

// //   const onClickCheck = (): void => {
// //     setIsInputDisabled(true);
// //     setVerificationCode("");
// //   };

// //   return (
// //     <div>
// //       <Button
// //         type="primary"
// //         onClick={showModal}
// //         style={{
// //           width: "100%",
// //           height: "42px",
// //           fontSize: "16px",
// //           color: "#bec3c7",
// //           backgroundColor: "#f6f7f9",
// //           border: "1px solid #dddfe3",
// //           borderRadius: "6px",
// //           margin: "5px 0px 10px 0px"
// //         }}
// //       >
// //         이메일 인증하기
// //       </Button>
// //       <Modal
// //         title="이메일 인증"
// //         visible={isModalOpen}
// //         onOk={handleOk}
// //         onCancel={handleCancel}
// //         style={{ width: "300px" }}
// //       >
// //         <p>남은 시간: {formatTime(timer)}</p>
// //         <div style={{ display: "flex", marginTop: "5px" }}>
// //           <input
// //             type="text"
// //             disabled={isInputDisabled}
// //             value={verificationCode}
// //             onChange={handleInputChange}
// //             maxLength={6}
// //             style={{ width: "100%", height: "37px" }}
// //           />
// //           <button
// //             onClick={onClickCheck}
// //             disabled={isInputDisabled}
// //             style={{
// //               width: "30%",
// //               height: "37px",
// //               marginLeft: "10px",
// //               border: isInputDisabled
// //                 ? "1px solid lightgray"
// //                 : "1px solid black",
// //               borderRadius: "3px"
// //             }}
// //           >
// //             인증번호 확인
// //           </button>
// //         </div>
// //       </Modal>
// //     </div>
// //   );
// // };

// // export default Timer;

// import { useEffect, useState } from "react";
// import { useUser } from "../../hooks/custom/useUser";

// export const timer = () => {
//   const [sec, setSec] = useState(5);

//   const start = () => {
//     const interval = setInterval(() => {
//       setSec(prev => prev - 1);
//       console.log("-1");
//     }, 1000);

//     if (sec === 0) {
//       clearInterval(interval);
//     }

//     return () => clearInterval(interval)
//   };

//   return {
//     sec,
//     start
//   };
// };
