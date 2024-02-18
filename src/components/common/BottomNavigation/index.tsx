import React from "react";
import { styled } from "styled-components";
import HomeIcon from "../../../assets/HomeIcon";
import BBiBBiIcon from "../../../assets/BBiBBiIcon";
import Profile from "../../../assets/profile.png";
import { useLocation, useNavigate } from "react-router-dom";

const BottomNavigation = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  return (
    <Container>
      <Box onClick={() => navigate("/list")}>
        <HomeIcon isSelect={pathname === "/list" ? true : false} />
        <p>홈</p>
      </Box>
      <Box onClick={() => navigate("/bbibbi")}>
        <BBiBBiIcon isSelect={pathname === "/bbibbi" ? true : false} />
        <p>삐삐</p>
      </Box>
      <Box onClick={() => navigate("/profile")}>
        <img src={Profile} />
        프로필
      </Box>
    </Container>
  );
};

export default BottomNavigation;

const Container = styled.div`
  position: absolute;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 76px;
  z-index: 10;

  background-color: #ffffff;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-left: 32px;
  padding-right: 32px;

  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  border-top: 1px solid #c3c3c3;
`;

const Box = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  flex-direction: column;

  row-gap: 5px;
`;
