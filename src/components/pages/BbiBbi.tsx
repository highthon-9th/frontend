import { useState } from "react";
import styled from "styled-components";
import CreateBbiBbi from "../common/CreateBbiBbi";
import { useSearchParams } from "react-router-dom";

export interface IFTimeCapsule {
  userId: number;
  title: string;
  content: string;
  closeAt: Date;
  imageList: string[];
}

const BbiBbi = () => {
  const [searchParam] = useSearchParams();
  const [timeCapsule, setTimeCapsule] = useState<IFTimeCapsule>({
    title: "",
    content: "",
    closeAt: new Date(),
    imageList: [],
    userId: 0,
  });

  return (
    <StyledWrapper>
      {searchParam.get("timeCapsuleQuery") === "create" && (
        <CreateBbiBbi
          timeCapsule={timeCapsule}
          setTimeCapsule={setTimeCapsule}
        />
      )}
    </StyledWrapper>
  );
};

export default BbiBbi;

const StyledWrapper = styled.div``;
