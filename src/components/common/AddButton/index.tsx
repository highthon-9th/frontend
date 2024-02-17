import React from "react";
import { styled } from "styled-components";
import AddIcon from "../../../assets/AddIcon";

interface Props {
  navigate: () => void;
}

const AddButton = ({ navigate }: Props) => {
  return (
    <Box onClick={navigate}>
      <AddIcon />
    </Box>
  );
};

export default AddButton;

const Box = styled.div`
  position: absolute;
  cursor: pointer;

  background-color: #ff8127;
  bottom: 92px;
  right: 16px;
  width: 58px;
  height: 58px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
