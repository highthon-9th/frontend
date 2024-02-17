import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

export const AuthBlackButton = styled.div`
  width: 358px;
  height: 51px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000000;
  color: #ffffff;

  cursor: pointer;
  border-radius: 10px;
`;

export const AuthWhiteButton = styled.div`
  width: 358px;
  height: 51px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000000;
  background-color: #ffffff;
  border: 1px solid #000000;
  cursor: pointer;
  border-radius: 10px;
`;

const Auth = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Wrap>
        <AuthBlackButton onClick={() => navigate("/signup")}>
          무료로 회원가입
        </AuthBlackButton>
        <AuthWhiteButton onClick={() => navigate("/signin")}>
          로그인
        </AuthWhiteButton>
      </Wrap>
    </Container>
  );
};

export default Auth;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  row-gap: 12px;
`;
const Wrap = styled.div`
  display: flex;
  flex-direction: column;

  gap: 12px;
`;
