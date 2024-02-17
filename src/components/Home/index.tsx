import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import Logo from "../../assets/Logo";

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
      <Logo />
      <Wrap>
        <AuthBlackButton onClick={() => navigate("/signup")}>
          무료로 회원가입
        </AuthBlackButton>
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <PathLoginText>
            이미 아이디가 있나요?{" "}
            <span
              onClick={() => navigate("/signin")}
              style={{
                color: "#EB7927",
                borderBottom: "1px solid #EB7927",
                cursor: "pointer",
              }}
            >
              로그인
            </span>
          </PathLoginText>
        </div>
      </Wrap>
    </Container>
  );
};

export default Auth;

const PathLoginText = styled.span`
  font-size: 14px;
  color: #70757d;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  row-gap: 12px;
`;
const Wrap = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;

  gap: 12px;
  bottom: 50px;
`;
