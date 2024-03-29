import { styled } from "styled-components";
import TopNavigation from "../../common/TopNavigation";
import { useNavigate } from "react-router-dom";
import TextInput from "../../common/TextInput";
import { AuthBlackButton } from "../../Home";
import { useSignup } from "../../../hooks/Auth/useSignup";
import Success from "./success";
const SuccessContainer = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;
const SuccessTextBox = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  row-gap: 24px;
`;

const WelcomeText = styled.p`
  font-weight: bold;
  font-size: 30px;
  line-height: 10px;
`;
const SuccessText = styled.p`
  font-size: 18px;
`;
const Signup = () => {
  const navigate = useNavigate();
  const { onChangeSignupData, onSubmitSignupData, success } = useSignup();
  return (
    <>
      {success ? (
        <Success />
      ) : (
        <>
          <TopNavigation prevPage={() => navigate("/")} onClick={() => {}} />
          <Container>
            <Wrap>
              <Title>아이디를 입력해주세요</Title>
              <TextInput
                name="name"
                onChange={onChangeSignupData}
                inputInfo="이름"
              />
              <TextInput
                name="email"
                onChange={onChangeSignupData}
                inputInfo="아이디"
              />
              <TextInput
                name="password"
                onChange={onChangeSignupData}
                inputInfo="비밀번호"
              />
            </Wrap>
            <AuthBlackButton
              onClick={onSubmitSignupData}
              style={{ marginTop: "300px" }}
            >
              완료하기
            </AuthBlackButton>
          </Container>
        </>
      )}
    </>
  );
};

export default Signup;

export const Container = styled.div`
  width: 100%;
  margin-top: 32px;
  padding-left: 16px;
`;

export const Title = styled.h1`
  font-weight: bold;
  font-size: 24px;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;

  row-gap: 24px;
`;
