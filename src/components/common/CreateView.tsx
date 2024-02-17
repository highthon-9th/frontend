import styled from "styled-components";
import TopNavigation from "./TopNavigation";
import { instance } from "../../libs/instance";
import { IFPostInfo } from "../pages/Create";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

export const CreatePost = async (postInfo: IFPostInfo) => {
  const { data } = await instance.post("/post", postInfo);
  return data;
};

interface IFCreateView {
  postInfo: IFPostInfo;
}

const CreateView = ({ postInfo }: IFCreateView) => {
  const mutation = useMutation(CreatePost);
  const navigate = useNavigate();

  const handleCreatePost = () => {
    mutation.mutate(postInfo, {
      onSuccess: () => {
        navigate("/list");
      },
    });
  };

  const handleBackInputPage = () => {
    navigate("/create?createQuery=create");
  };

  const handleReSettingTime = () => {
    navigate("/select-time");
  };

  return (
    <StyledWrapper>
      <TopNavigation
        onClick={handleCreatePost}
        configText={<CustomNext>게시하기</CustomNext>}
        prevPage={handleBackInputPage}
      />
      <div className="information-box">
        <p>{postInfo.content}</p>
        {postInfo.imageUrl ? (
          <img src={postInfo.imageUrl} />
        ) : (
          <i>
            <svg
              width="41"
              height="40"
              viewBox="0 0 41 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.8109 15.5294C15.6488 15.5294 17.1386 14.0395 17.1386 12.2017C17.1386 10.3638 15.6488 8.87394 13.8109 8.87394C11.9731 8.87394 10.4832 10.3638 10.4832 12.2017C10.4832 14.0395 11.9731 15.5294 13.8109 15.5294Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M40.4327 4.43697V25.378L40.5 25.4453L40.4327 25.5126V35.4957C40.4327 37.9462 38.4462 39.9327 35.9957 39.9327H29.3403L29.273 40L29.2057 39.9327H4.93697C2.4865 39.9327 0.5 37.9462 0.5 35.4957V4.43697C0.5 1.9865 2.4865 0 4.93697 0H35.9957C38.4462 0 40.4327 1.9865 40.4327 4.43697ZM4.93697 3.32773H35.9957C36.6084 3.32773 37.105 3.82435 37.105 4.43697V22.0503L32.0051 16.9504C30.545 15.4903 28.1975 15.4286 26.6627 16.8099L18.3082 24.329L16.5561 22.577C15.04 21.0609 12.5818 21.0609 11.0657 22.577L3.82773 29.815V4.43697C3.82773 3.82435 4.32435 3.32773 4.93697 3.32773ZM29.6521 19.3035L37.105 26.7564V35.4957C37.105 36.1084 36.6084 36.605 35.9957 36.605H30.5841L20.6645 26.6854L28.8889 19.2834C29.1081 19.0861 29.4435 19.0949 29.6521 19.3035ZM3.82773 34.3865V35.4957C3.82773 36.1084 4.32435 36.605 4.93697 36.605H25.878L14.2031 24.9301C13.9865 24.7135 13.6353 24.7135 13.4187 24.9301L3.89501 34.4538L3.82773 34.3865Z"
                fill="white"
              />
            </svg>
          </i>
        )}
      </div>
      <hr />
      <div className="time-select-box" onClick={handleReSettingTime}>
        <strong>세대선택</strong>
        <div style={{ display: "flex", alignItems: "center" }}>
          <p>{postInfo.generation}</p>
          <svg
            width="14"
            height="13"
            viewBox="0 0 14 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_88_3564)">
              <path
                d="M3 12.0713L11 6.49986L3 0.928432"
                stroke="#C3C3C3"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_88_3564">
                <rect width="14" height="13" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </StyledWrapper>
  );
};

export default CreateView;

const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .information-box {
    width: calc(100% - 30px);
    display: flex;
    justify-content: space-between;
    gap: 20px;

    > p {
      min-width: 100px;
      font-size: 14px;
      font-weight: 500;
      color: #9d9ca1;
      word-wrap: break-word;
    }

    > i {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #e0e0e1;
      border-radius: 10px;
      min-width: 81px;
      height: 81px;
    }

    > img {
      min-width: 81px;
      height: 81px;
      border-radius: 10px;
    }
  }

  > hr {
    width: 100%;
    border-top: 1px solid #d9d9d9;
    margin: 24px;
  }

  .time-select-box {
    width: calc(100% - 30px);
    display: flex;
    align-items: center;
    justify-content: space-between;
    > strong {
      font-size: 16px;
      font-weight: 500;
      color: #333;
    }

    p {
      font-size: 16px;
      font-weight: 500;
      color: #ff8127;
      margin-right: 30px;
    }
  }
`;

const CustomNext = styled.span`
  color: #ff8127;
`;
