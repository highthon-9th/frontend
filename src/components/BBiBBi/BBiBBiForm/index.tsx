import React, {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useState,
} from "react";
import { styled } from "styled-components";
import TopNavigation from "../../common/TopNavigation";
import { useNavigate } from "react-router-dom";
import TextInput from "../../common/TextInput";
import { AuthBlackButton } from "../../Home";
import { IFTimeCapsule } from "../../pages/BbiBbi";
import { instance } from "../../../libs/instance";
import { useMutation } from "react-query";

export const CreateTimeCapsule = async (postInfo: any) => {
  const { data } = await instance.post("/time-capsule", postInfo);
  return data;
};

interface IFBBiBBiForm {
  timeCapsule: IFTimeCapsule;
}

const BBiBBiForm = ({ timeCapsule }: IFBBiBBiForm) => {
  const navigate = useNavigate();
  const mutation = useMutation(CreateTimeCapsule);

  const [timeText, setTimeText] = useState({
    year: "",
    month: "",
    day: "",
  });
  const handleBackPage = () => {
    navigate("/bbibbiform?timeCapsuleQuery=create");
  };

  const handleChangeTime = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTimeText((prev) => ({ ...prev, [name]: value }));
  };

  const handlePostTimeCapsule = () => {
    mutation.mutate({
      ...timeCapsule,
      closeAt: new Date(`${timeText.year}-${timeText.month}-${timeText.day}`),
    });
  };

  return (
    <>
      <TopNavigation prevPage={handleBackPage} />
      <Container>
        <Title>
          삐삐를 열어볼 날짜를 <br /> 선택해주세요
        </Title>

        <InputContainer>
          <TextInput
            inputInfo="연도"
            placeholder="yyyy 형식으로 입력해주세요"
            onChange={handleChangeTime}
            name="year"
            length={4}
          />
          <TextInput
            inputInfo="월"
            placeholder="mm 형식으로 입력해주세요"
            onChange={handleChangeTime}
            name="month"
            length={2}
          />
          <TextInput
            inputInfo="일"
            placeholder="dd 형식으로 입려해주세요"
            onChange={handleChangeTime}
            name="day"
            length={2}
          />
        </InputContainer>
        <AuthBlackButton
          onClick={handlePostTimeCapsule}
          style={{ marginTop: "276px" }}
        >
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
  padding: 32px 15px 0px;
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
