import { styled } from "styled-components";
import BottomNavigation from "../common/BottomNavigation";
import AddButton from "../common/AddButton";
import { useNavigate } from "react-router-dom";
import Toast from "../common/Toast";
import TopNavigation from "../common/TopNavigation";

const BBiBBi = () => {
  const navigate = useNavigate();
  return (
    <>
      <TopNavigation prevPage={() => navigate("/list")} />
      <Container>
        <Title>미래의 나에게 삐삐를 보내보세요</Title>
        <BBiBBiListContainer>
          <BBiBBiItem></BBiBBiItem>
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

const BBiBBiItem = styled.div`
  width: 100%;
  height: 243px;

  display: flex;
  justify-content: center;

  padding-top: 72px;
  border-radius: 10px;
  border: 1px solid black;
`;
