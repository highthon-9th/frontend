import React, { ChangeEvent } from "react";
import { styled } from "styled-components";
import TopNavigation from "../../common/TopNavigation";
import { useNavigate } from "react-router-dom";
import TextField from "../../common/TextFileld";
import TextInput from "../../common/TextInput";
import { AuthBlackButton } from "../../Home";

const BBiBBiForm = () => {
  const navigate = useNavigate();
  const handleBackPage = () => {
    navigate("/bbibbi");
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
  };

  const handlePrev = () => {};
  return (
    <>
      <TopNavigation prevPage={handlePrev} />
      <Container>
        <Title>삐삐를 열어볼 날짜를 선택해주세요</Title>
        <InputContainer>
          <TextInput inputInfo="연도" onChange={onChange} />
          <TextInput inputInfo="월" onChange={onChange} />
          <TextInput inputInfo="일" onChange={onChange} />
        </InputContainer>
        <AuthBlackButton style={{ marginTop: "276px" }}>
          완료하기
        </AuthBlackButton>
      </Container>
    </>
  );
};

export default BBiBBiForm;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 32px;
  row-gap: 24px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 42px);
  padding-left: 20px;
  padding-top: 32px;
`;

const TitleInput = styled.input`
  width: 100%;
  font-size: 24px;
  color: #70757d;
  outline: none;
  border: none;
  margin-top: 23px;
`;

const ContentInput = styled.textarea`
  width: 100%;

  font-size: 16px;
  color: #70757d;
  outline: none;
  border: none;
  margin-top: 23px;
`;
