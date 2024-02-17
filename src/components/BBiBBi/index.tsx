import { styled } from "styled-components";
import BottomNavigation from "../common/BottomNavigation";
import AddButton from "../common/AddButton";
import { useNavigate } from "react-router-dom";
import Toast from "../common/Toast";

const BBiBBi = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Toast />
      <AddButton navigate={() => navigate("/bbibbiform")} />
      <BottomNavigation />
    </Container>
  );
};

export default BBiBBi;

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;
