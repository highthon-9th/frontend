import { styled } from "styled-components";
import BottomNavigation from "../common/BottomNavigation";
import AddButton from "../common/AddButton";
import { useNavigate } from "react-router-dom";
import Toast from "../common/Toast";
import TopNavigation from "../common/TopNavigation";
import { useGetTimeCapsule } from "../../query/time-capsule";
import dayjs from "dayjs";

const BBiBBi = () => {
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");
  const { data } = useGetTimeCapsule(Number(userId));

  return (
    <>
      <TopNavigation prevPage={() => navigate("/list")} />
      <Container>
        <Title>미래의 나에게 삐삐를 보내보세요</Title>
        <BBiBBiListContainer>
          {data?.map((data) => (
            <BBiBBiItem
              url={data.thumbnailImage}
              onClick={() => navigate(`/bbibbi/detail/${data.id}`)}
            >
              <CreateTime>
                {dayjs(data.createdAt).format("YYYY년 MM월 DD일")}
              </CreateTime>
              <BBiBBiTitle>{data.title}</BBiBBiTitle>
              <Time>
                남은시간 <br /> 3일 23시간 39분
              </Time>
            </BBiBBiItem>
          ))}
        </BBiBBiListContainer>
        <AddButton
          navigate={() => navigate("/bbibbiform?timeCapsuleQuery=create")}
        />
      </Container>
      <BottomNavigation />
    </>
  );
};

export default BBiBBi;

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 42px);
  padding-left: 20px;
  padding-right: 20px;

  padding-top: 11px;
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 20px;
`;

const BBiBBiListContainer = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;

  row-gap: 12px;
`;

const BBiBBiItem = styled.div<{ url: string }>`
  width: 100%;
  height: 243px;

  background-image: url("../../assets/rectangle.png");

  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 8px;

  padding-top: 72px;
  border-radius: 10px;
  border: 1px solid black;
`;

const CreateTime = styled.p`
  font-size: 14px;
  font-weight: bold;
`;

const BBiBBiTitle = styled.p`
  font-size: 24px;
  line-height: 20px;
  font-weight: bold;
`;

const Time = styled.p`
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;
