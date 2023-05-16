import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 580px;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 50px;
  border-radius: 20px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  margin: 0 auto;
`;

export const Title = styled.div`
  width: 400px;
  font-size: 36px;
  text-align: center;
  margin-bottom: 50px;
  text-align: left;
`;

export const IndexTitle = styled.div`
  width: 100%;
  margin: 20px 0px 10px 0px;
`;

export const Error = styled.div`
  width: 100%;
  height: 20px;
  font-size: 13px;
  margin-top: 5px;
  color: red;
`;

export const FindingBox = styled.div`
  width: 400px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  cursor: pointer;
  margin-top: 10px;
`;

export const Finding = styled.a`
  color: black;
  text-decoration: none;
`;

export const SocialLogin = styled.div`
  width: 100%;
  margin: 80px 0px;
  text-align: center;
`;

export const SocialLoginButton = styled.img`
  width: 50px;
  height: 50px;
  margin: 20px 10px;
  cursor: pointer;
`;

export const Join = styled.a`
  color: black;
  margin-left: 10px;
`;
