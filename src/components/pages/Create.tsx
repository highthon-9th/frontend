import styled from "styled-components";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import CreateInput from "../common/CreateInput/CreateInput";
import CreateView from "../common/CreateView";

export interface IFPostInfo {
  writerId: string;
  content: string;
  imageUrl: string;
  generation: number;
}

const Create = () => {
  const [searchParam] = useSearchParams();
  const [postInfo, setPostInfo] = useState<IFPostInfo>({
    writerId: localStorage.getItem("userId") ?? "",
    content: "",
    imageUrl: "",
    generation: Number(searchParam.get("time")),
  });

  return (
    <StyledWrapper>
      {searchParam.get("createQuery") === "create" && (
        <CreateInput postInfo={postInfo} setPostInfo={setPostInfo} />
      )}
      {searchParam.get("createQuery") === "view" && (
        <CreateView postInfo={postInfo} />
      )}
    </StyledWrapper>
  );
};

export default Create;

const StyledWrapper = styled.div``;
