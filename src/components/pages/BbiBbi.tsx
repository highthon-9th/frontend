import { useState } from "react";
import styled from "styled-components";
import CreateBbiBbi from "../common/CreateBbiBbi";
import { useSearchParams } from "react-router-dom";
import BBiBBiForm from "../BBiBBi/BBiBBiForm";

export interface IFTimeCapsule {
  userId: number;
  title: string;
  content: string;
  imageList: string[];
}

const BbiBbi = () => {
  const [searchParam] = useSearchParams();
  const [timeCapsule, setTimeCapsule] = useState<IFTimeCapsule>({
    title: "",
    content: "",
    imageList: [],
    userId: Number(localStorage.getItem("userId")),
  });

  return (
    <StyledWrapper>
      {searchParam.get("timeCapsuleQuery") === "create" && (
        <CreateBbiBbi
          timeCapsule={timeCapsule}
          setTimeCapsule={setTimeCapsule}
        />
      )}
      {searchParam.get("timeCapsuleQuery") === "time" && (
        <BBiBBiForm timeCapsule={timeCapsule} />
      )}
    </StyledWrapper>
  );
};

export default BbiBbi;

const StyledWrapper = styled.div``;
