import styled from "@emotion/styled";
import { SearchOutlined } from "@ant-design/icons";
import { mq } from "../../../../commons/libraries/breakPoints";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Wrapper = styled.header`
  width: 100%;
  background-color: #fff;
  padding: 7px 0;
  position: relative;
  z-index: 999;
`;
export const DivideLine = styled.div`
  width: 100%;
  height: 1px;
  border-bottom: 1px solid #e5e5e5;
`;
export const Container = styled.div`
  width: 1140px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;

  ${mq[0]} {
    width: 100%;
    padding: 0 24px;
  }
  ${mq[2]} {
    padding: 0 16px;
  }
`;
export const NavIcon = styled.div<{
  isProfile: boolean;
}>`
  display: none;
  cursor: pointer;

  ${mq[2]} {
    height: 22px;
    width: 28px;
    flex-direction: column;
    justify-content: space-between;
    display: ${props => (props.isProfile ? "none" : "flex")};
    margin-right: 10px;
  }
  ${mq[3]} {
    height: 16px;
    width: 20px;
  }
`;
export const line = styled.div<{
  isOpen: boolean;
}>`
  display: block;
  height: 3px;
  width: 100%;
  border-radius: 10px;
  background: #444;
  transition: transform 0.2s ease-in-out;
  &.line1 {
    transform-origin: 0% 0%;
    transform: ${props => (props.isOpen ? "rotate(45deg)" : "rotate(0)")};
  }
  &.line2 {
    transform: ${props => (props.isOpen ? "scaleY(0)" : "scaleY(1)")};
  }
  &.line3 {
    transform-origin: 0% 100%;
    transform: ${props => (props.isOpen ? "rotate(-45deg)" : "rotate(0)")};
  }
  ${mq[3]} {
    height: 2px;
  }
`;
export const logoWrap = styled.div`
  display: flex;
  align-items: center;
`;
export const Logo = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
`;
export const LogoIcon = styled.img`
  display: block;
  width: 36px;
  height: 36px;
  ${mq[3]} {
    width: 24px;
    height: 24px;
  }
`;
export const LogoTitle = styled.h1`
  font-size: 1.88rem;
  line-height: 30px;
  font-weight: 600;
  margin-left: 5px;
  ${mq[3]} {
    font-size: 1.5rem;
  }
`;
export const HeaderBox = styled.div`
  display: flex;
  align-items: center;
`;
export const SearchWrap = styled.div<{
  isOpen: boolean;
}>`
  ${mq[2]} {
    display: ${props => (props.isOpen ? "block" : "none")};
    width: 100%;
    padding: 24px;
    background: #fff;
    position: absolute;
    top: calc(100% + 1px);
    left: 0;
    z-index: 9999;
    border-bottom: 1px solid #e5e5e5;
  }
`;
export const SearchBox = styled.div<{
  isOpen: boolean;
}>`
  width: 260px;
  position: relative;
  ${mq[2]} {
    /* display: none; */
    width: 100%;
  }
`;

export const SearchBtn = styled.button`
  display: none;
`;

export const SearchIcon = styled(FontAwesomeIcon)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 12px;
`;
export const SearchIcon768 = styled(FontAwesomeIcon)`
  font-size: 1.25em;
`;
export const SearchInput = styled.input`
  width: 100%;
  border: none;
  background-color: #eee;
  font-size: 1rem;
  line-height: 1rem;
  padding: 12px;
  padding-left: 40px;
  border-radius: 6px;
`;
export const ShuffleBtn = styled.div`
  width: 36px;
  height: 36px;
  margin-left: 14px;
  cursor: pointer;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.1s linear;
  &:hover {
    background-color: #f3f3f3;
  }
  &.loupe {
    display: none;
    ${mq[2]} {
      display: flex;
    }
  }
  ${mq[4]} {
    margin-left: 0;
  }
`;
export const ShuffleIcon = styled.img`
  display: block;
  width: 20px;

  ${mq[3]} {
    width: 16px;
  }
`;

export const Avatar = styled.img`
  cursor: pointer;
  margin-left: 14px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
`;

export const LoginBox = styled.div`
  display: flex;
`;
export const UserBox = styled.div`
  display: flex;
  align-items: center;
`;
export const MessageBtn = styled.img`
  display: block;
  margin: 0 14px;
  cursor: pointer;
`;
export const LoginBtn = styled.button`
  font-weight: 600;
  border: none;
  padding: 14px;
  background: none;
  color: #111;
  display: block;
  cursor: pointer;
`;
export const SignUpBtn = styled.button`
  font-weight: 600;
  border: none;
  padding: 14px;
  border-radius: 23px;
  background-color: #111;
  color: #fff;
  display: block;
  cursor: pointer;

  ${mq[4]} {
    padding: 10px;
  }
`;
export const Logout = styled.span`
  display: block;
  width: 100%;
`;
