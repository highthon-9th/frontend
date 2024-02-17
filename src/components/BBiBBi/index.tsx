import { styled } from "styled-components";
import BottomNavigation from "../common/BottomNavigation";
import AddButton from "../common/AddButton";
import { useNavigate } from "react-router-dom";

const BBiBBi = () => {
  const navigate = useNavigate();
  return (
    <Container>
      BBIBBI
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
