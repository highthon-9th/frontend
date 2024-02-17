import React from "react";
import { styled } from "styled-components";
import TopNavigation from "../../common/TopNavigation";
import { useNavigate } from "react-router-dom";

const BBiBBiDetail = () => {
  const navigate = useNavigate();
  const handlePrev = () => {
    navigate("/bbibbi");
  };
  return (
    <>
      <TopNavigation prevPage={handlePrev} />
      <Container>
        <BBiBBiDate>2023년 1월13일</BBiBBiDate>
        <Title>안녕? 과거에 나에게 </Title>
        <Content>
          안녕..?이 삐삐를 보고 있을 때 쯤에는 대학교에 들어가서 여자친구를
          사귀고 행복한 연애를 하고 있겠지..?🥲 여자 친구는 어때?😚 내
          여자친구니까 엄청 예쁘지?? 😁
        </Content>
        <Iamge1 />
      </Container>
    </>
  );
};

export default BBiBBiDetail;

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 42px);

  display: flex;
  flex-direction: column;

  padding-left: 16px;
  margin-top: 14px;
`;

const BBiBBiDate = styled.p`
  font-size: 12px;
  color: #ff8127;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;

  margin-top: 6px;
`;

const Content = styled.p`
  margin-top: 24px;
  line-height: 25px;
`;

const Iamge1 = styled.img`
  width: 100%;
  height: 40%;
`;
