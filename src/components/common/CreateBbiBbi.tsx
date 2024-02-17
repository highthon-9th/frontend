import styled from "styled-components";
import TopNavigation from "./TopNavigation";
import TextField from "./TextFileld";
import { IFTimeCapsule } from "../pages/BbiBbi";
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";

interface IFCreateBbiBbiProps {
  timeCapsule: IFTimeCapsule;
  setTimeCapsule: Dispatch<SetStateAction<IFTimeCapsule>>;
}

const CreateBbiBbi = ({ setTimeCapsule, timeCapsule }: IFCreateBbiBbiProps) => {
  const [imageURL, setImageURL] = useState<string>("");
  const navigate = useNavigate();

  const userName = localStorage.getItem("userName");

  const postInfoIsValid = Boolean(timeCapsule.content && timeCapsule.title);

  const handleChangePostContent = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTimeCapsule((prev) => ({ ...prev, content: e.target.value }));
  };

  const handleChangePostTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTimeCapsule((prev) => ({ ...prev, title: e.target.value }));
  };

  const handleViewPost = () => {
    navigate("/bbibbi?timeCapsuleQuery=time");
  };

  const handleDeleteImage = () => {
    setImageURL("");
  };

  const handleBackPage = () => {
    navigate("/select-time");
  };

  useEffect(() => {
    setTimeCapsule((prev) => ({ ...prev, imageList: [imageURL] }));
  }, [imageURL]);

  return (
    <StyledWrapper>
      <TopNavigation
        prevPage={handleBackPage}
        onClick={handleViewPost}
        configText={
          <CustomConfirmText data-is-select={postInfoIsValid}>
            게시하기
          </CustomConfirmText>
        }
      />
      <div className="container">
        <TitleInput
          placeholder="제목을 입력해주세요"
          onChange={handleChangePostTitle}
        />
        <CustomInput
          onChange={handleChangePostContent}
          placeholder="미래의 나에게 삐삐를 남겨보세요"
        />
        {imageURL && (
          <div>
            <button onClick={handleDeleteImage}>
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 1.00714L8.99286 0L5 3.99286L1.00714 0L0 1.00714L3.99286 5L0 8.99286L1.00714 10L5 6.00714L8.99286 10L10 8.99286L6.00714 5L10 1.00714Z"
                  fill="#70757D"
                />
              </svg>
            </button>
            <img src={imageURL} alt="이미지" />
          </div>
        )}
      </div>
      <TextField setImageURL={setImageURL} />
    </StyledWrapper>
  );
};

export default CreateBbiBbi;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .container {
    width: calc(100% - 40px);
  }
`;

const TitleInput = styled.input`
  width: calc(100% - 40px);
  font-size: 24px;
  font-family: 600;
  color: #333;
  border: none;
  outline: none;
  margin-bottom: 24px;

  &::placeholder {
    font-size: 24px;
    font-family: 600;
    color: #70757d;
  }
`;

const CustomInput = styled.textarea`
  width: calc(100% - 20px);
  height: 300px;
  font-size: 20px;
  font-weight: 500;
  color: #333;
  border: none;
  outline: none;
  &::placeholder {
    font-size: 20px;
    font-weight: 500;
    color: #9d9ca1;
  }
`;

const CustomConfirmText = styled.span`
  &[data-is-select="true"] {
    color: #2dd790;
  }
`;
