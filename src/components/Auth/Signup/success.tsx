import React from "react";
import { styled } from "styled-components";
import { useGetUserDataQuery } from "../../../query/auth/query";

const SuccessContainer = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;
const SuccessTextBox = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  row-gap: 24px;
`;

const WelcomeText = styled.p`
  font-weight: bold;
  font-size: 30px;
  line-height: 10px;
`;
const SuccessText = styled.p`
  font-size: 18px;
`;

const Success = () => {
  const userId = localStorage.getItem("userId");
  const { data } = useGetUserDataQuery(Number(userId));
  localStorage.setItem("userName", data?.name!);

  return (
    <SuccessContainer>
      <SuccessTextBox>
        <SuccessText>회원가입 완료</SuccessText>
        <WelcomeText>{data?.name} 환영합니다!</WelcomeText>
      </SuccessTextBox>
    </SuccessContainer>
  );
};

export default Success;
