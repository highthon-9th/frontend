import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TopNavigation from "../common/TopNavigation";
import { useState } from "react";

const TIME_DATA_LIST = [1980, 1985, 1990, 1995, 2000, 2005, 2010, 2015, 2020];

const SelectTime = () => {
  const [selectTime, setSelectTime] = useState<number>(2020);
  const userName = localStorage.getItem("useName");
  const navigate = useNavigate();

  const handleBackPage = () => {
    navigate("/list");
  };

  const handleNextPage = () => {
    navigate(`/create?time=${selectTime}`);
  };

  const handleSelectTime = (time: number) => {
    setSelectTime(time);
  };

  return (
    <StyledWrapper>
      <TopNavigation
        onClick={handleNextPage}
        prevPage={handleBackPage}
        configText={
          <CustomConfirmText data-is-select={selectTime}>
            다음으로
          </CustomConfirmText>
        }
      />
      <section>
        <img src="/happyImg.png" className="happy-img" />
        <h2 id="timePage_title">
          <span>{userName}</span>
          <span>님</span>
        </h2>
        <h2 id="timePage_content">어떤 세대에 대한 이야기를 나눠볼까요?</h2>
      </section>
      <div className="timePage_box">
        {TIME_DATA_LIST.map((time) => {
          return (
            <TimeButton
              key={time}
              onClick={() => {
                handleSelectTime(time);
              }}
              data-is-select={selectTime === time}
            >
              {time}
            </TimeButton>
          );
        })}
      </div>
    </StyledWrapper>
  );
};

export default SelectTime;

const StyledWrapper = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  .happy-img {
    width: 80px;
  }

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: 20px;
  }

  #timePage_mountIcon {
    margin-bottom: 21px;
  }

  #timePage_title {
    font-size: 20px;
    display: flex;
    align-items: center;
  }

  #timePage_title span:first-child {
    color: #2dd790;
  }

  #timePage_title span:last-child {
    color: black;
  }

  #timePage_content {
    font-size: 20px;
  }

  .timePage_box {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    margin-top: 20px;
  }
`;

const TimeButton = styled.button`
  border-style: none;
  width: 106px;
  height: 70px;
  font-size: 20px;
  background-color: #eeeef3;
  color: #707070;
  border-radius: 6px;

  &[data-is-select="true"] {
    background-color: #2dd790;
    color: #fff;
  }
`;

const CustomConfirmText = styled.span`
  &[data-is-select] {
    color: #2dd790;
  }
`;
