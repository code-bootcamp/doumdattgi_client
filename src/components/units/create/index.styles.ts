import styled from "@emotion/styled";

interface IIsToggle {
  isToggle: boolean;
}

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
  border-right: none;
  background-color: ${(props: IIsToggle) =>
    props.isToggle ? "black" : "white"};
  color: ${props => (props.isToggle ? "white" : "black")};
  cursor: pointer;
`;

export const Employer = styled.div`
  width: calc(100% - 140px);
  font-size: 24px;
  text-align: center;
  line-height: 1.7;
  border-radius: 0px 6px 6px 0px;
  border: 2px solid #333333;
  border-left: none;
  background-color: ${(props: IIsToggle) =>
    props.isToggle ? "white" : "black"};
  color: ${props => (props.isToggle ? "black" : "white")};
  cursor: pointer;
`;

export const DivideLine = styled.div`
  border-left: 2px solid #333333;
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
  margin: 30px 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Theme = styled.span`
  width: 280px;
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
  height: 38px;
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

export const Image = styled.div`
  width: 100%;
  display: flex;
`;

export const MapBox = styled.div`
  width: 440px;
  height: 300px;
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
  justify-content: space-between;
  padding-top: 120px;
`;

export const ZipcodeBox = styled.div`
  width: 278px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const InputZipcode = styled.input`
  width: 120px;
  height: 60px;
  border-radius: 6px;
  border: 1px solid #cccccc;
`;

export const SearchBtn = styled.button`
  background-color: black;
  width: 250px;
  height: 38px;
  border-radius: 6px;
  border: none;
  font-size: 14px;
  color: #ffffff;
  margin-left: 10px;
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

export const Between = styled.div`
  width: 10px;
`;
