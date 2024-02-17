import styled from "styled-components";
import TopNavigation from "../TopNavigation";
import { useNavigate } from "react-router-dom";
import { IFPostInfo } from "../../pages/Create";
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import TextField from "../TextFileld";

interface IFCreateInputProps {
  postInfo: IFPostInfo;
  setPostInfo: Dispatch<SetStateAction<IFPostInfo>>;
}

const CreateInput = ({ postInfo, setPostInfo }: IFCreateInputProps) => {
  const [imageURL, setImageURL] = useState<string>("");
  const navigate = useNavigate();

  const userName = localStorage.getItem("userName");

  const postInfoIsValid = Boolean(postInfo.content);

  const handleChangePostContent = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setPostInfo((prev) => ({ ...prev, content: e.target.value }));
  };

  const handleViewPost = () => {
    navigate("/create?createQuery=view");
  };

  const handleDeleteImage = () => {
    setImageURL("");
  };

  const handleBackPage = () => {
    navigate("/select-time");
  };

  useEffect(() => {
    setPostInfo((prev) => ({ ...prev, imageUrl: imageURL }));
  }, [imageURL]);

  return (
    <StyledWrapper>
      <TopNavigation
        prevPage={handleBackPage}
        onClick={handleViewPost}
        configText={
          <CustomConfirmText data-is-select={postInfoIsValid}>
            다음으로
          </CustomConfirmText>
        }
      />
      <div className="container">
        <CustomInput
          onChange={handleChangePostContent}
          placeholder={`${userName}님의 이야기를 들려주세요!`}
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

export default CreateInput;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .container {
    width: calc(100% - 40px);
    margin-top: 24px;

    > div {
      position: relative;
      > img {
        width: 100%;
        border-radius: 10px;
      }

      > button {
        width: 20px;
        height: 20px;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 12px;
        right: 12px;
        background-color: #d9d9d9;
        border-radius: 100px;
      }
    }
  }
`;

const CustomInput = styled.textarea`
  width: 100%;
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
