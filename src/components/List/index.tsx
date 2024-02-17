import { useState } from "react";
import { styled } from "styled-components";
import { TIME_DATA_LIST2 } from "../pages/SelectTime";
import YearBox from "../common/YearBox";
import ListItem from "./ListItem";
import BottomNavigation from "../common/BottomNavigation";
import AddButton from "../common/AddButton";
import { useNavigate } from "react-router-dom";

const List = () => {
  const [yearData, setYearData] = useState(2020);
  const navigate = useNavigate();
  return (
    <Container>
      <Box>
        <Wrap>
          {TIME_DATA_LIST2.map((year) => {
            return (
              <>
                <YearBox
                  key={year} // Add a unique key prop
                  year={year}
                  onClick={() => setYearData(year)}
                  isSelect={year === yearData ? true : false}
                />
              </>
            );
          })}
        </Wrap>
      </Box>
      <ListItem date={yearData} />
      <AddButton navigate={() => navigate("/select-time")} />
      <BottomNavigation />
    </Container>
  );
};

export default List;

const Box = styled.div`
  width: 100%;
  overflow-x: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;
const Wrap = styled.div`
  display: flex;
  gap: 8px;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;

  padding: 30px 16px 0 16px;

  display: flex;
  align-items: center;
  flex-direction: column;
`;
