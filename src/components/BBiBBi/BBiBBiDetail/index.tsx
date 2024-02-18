import React from "react";
import { styled } from "styled-components";
import TopNavigation from "../../common/TopNavigation";
import { useNavigate, useParams } from "react-router-dom";
import { useGetTimeCapsuleById } from "../../../query/time-capsule";
import dayjs from "dayjs";
const BBiBBiDetail = () => {
  const query = useParams();
  const { data } = useGetTimeCapsuleById(Number(query.id));

  const navigate = useNavigate();
  const handlePrev = () => {
    navigate("/bbibbi");
  };
  return (
    <>
      <TopNavigation prevPage={handlePrev} />
      <Container>
        <BBiBBiDate>
          {dayjs(data?.closeAt).format("YYYY년 MM월 DD일")}
        </BBiBBiDate>
        <Title>{data?.title} </Title>
        <Content>{data?.content}</Content>
        {data?.imageList[0] && <Iamge1 src={data?.imageList[0]} />}
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
