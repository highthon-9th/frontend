import React from "react";
import { styled } from "styled-components";
import SuccessIcon from "../../../assets/SuccessIcon";

const Toast = () => {
  return (
    <Container>
      <SuccessIcon />
      <Text>게시물을 업로드했어요!</Text>
    </Container>
  );
};

export default Toast;

const Container = styled.div`
  position: absolute;
  bottom: 106px;
  left: 95px;

  width: 200px;
  height: 52px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #8b95a1;
  border-radius: 30px;
  gap: 10px;
`;

const Text = styled.p`
  font-size: 16px;
  color: #ffffff;
`;
