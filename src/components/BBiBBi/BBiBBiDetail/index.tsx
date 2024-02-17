import React from "react";
import { styled } from "styled-components";
import TopNavigation from "../../common/TopNavigation";
import { useNavigate } from "react-router-dom";

const BBiBBiDetail = () => {
  const navigate = useNavigate();
  const handlePrev = () => {
    navigate("/bbibbi");
  };
  return (
    <>
      <TopNavigation prevPage={handlePrev} />
    </>
  );
};

export default BBiBBiDetail;

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;
