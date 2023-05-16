import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
  margin-top: 90px;
  margin-bottom: 90px;
`;

export const Head = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
`;

export const SelectToggle = styled.div`
  width: 302px;
  height: 42px;
  display: flex;
  flex-direction: row;
`;

export const Employee = styled.div`
  width: 140px;
  font-size: 24px;
  text-align: center;
  line-height: 1.7;
  border-radius: 6px 0px 0px 6px;
  border: 2px solid #333333;
`;

export const Employer = styled.div`
  width: calc(100% - 140px);
  font-size: 24px;
  text-align: center;
  line-height: 1.7;
  border-radius: 0px 6px 6px 0px;
  border: 2px solid #333333;
`;

export const Title = styled.span`
  font-size: 36px;
`;

export const Body = styled.div``;

export const Body_Top = styled.div`
  margin-top: 30px;
  border-top: 2px solid #333333;
  border-bottom: 1px solid #bbbbbb;
`;

export const InputBox = styled.div`
  height: 60px;
  margin: 50px 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Theme = styled.span`
  width: 170px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  font-size: 24px;
`;

export const Required = styled.span`
  margin-left: 5px;
  font-size: 20px;
  color: #ffc56d;
`;

export const Input01 = styled.input`
  width: 920px;
  height: 60px;
  border-radius: 6px;
  border: 1px solid #cccccc;
`;

export const Body_Middle = styled.div`
  /* height: 1659px; */
`;

export const BoardContent = styled.div`
  height: 504px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 50px;
`;

export const EditorBox = styled.div`
  margin-top: 20px;
  height: 514px;
`;

export const AvailableTime = styled.div`
  height: 86px;
  margin-top: 100px;
`;

export const SetTimeBox = styled.div`
  width: 351px;
  display: flex;
  margin-top: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const AttachedImg = styled.div`
  height: 194px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 50px;
`;

export const BoardAddress = styled.div`
  height: 354px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const AddressBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const SearchBox = styled.div`
  width: 736px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const ZipcodeBox = styled.div`
  width: 278px;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const InputZipcode = styled.input`
  width: 120px;
  height: 60px;
  border-radius: 6px;
  border: 1px solid #cccccc;
`;

export const SearchBtn = styled.button`
  background-color: black;
  width: 138px;
  height: 60px;
  border-radius: 6px;
  font-size: 18px;
  color: #ffffff;
`;

export const InputAddress = styled.input`
  width: 736px;
  height: 60px;
  margin-top: 14px;
  border-radius: 6px;
  border: 1px solid #cccccc;
`;

export const Body_Bottom = styled.div``;

export const BtnBox = styled.div`
  margin-top: 130px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const CancelBtn = styled.button`
  width: 590px;
  height: 70px;
  background-color: #ffffff;
  color: #888888;
  border-radius: 10px;
`;

export const CreateBtn = styled.button`
  width: 590px;
  height: 70px;
  background-color: #111111;
  color: #ffffff;
  border-radius: 10px;
`;
