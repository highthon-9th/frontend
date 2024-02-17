import { css, styled } from "styled-components";

interface IFYearBoxProps {
  onClick: () => void;
  isSelect: boolean;
  year: number;
}

const YearBox = ({ onClick, isSelect, year }: IFYearBoxProps) => {
  return (
    <Box onClick={onClick} isSelect={isSelect}>
      {year}
    </Box>
  );
};

export default YearBox;

const Box = styled.div<{ isSelect: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;

  min-width: 67px;
  height: 35px;
  border-radius: 30px;

  cursor: pointer;
  ${({ isSelect }) =>
    isSelect
      ? css`
          background-color: #2dd790;
          color: #ffffff;
          border: none;
        `
      : css`
          background-color: #ffffff;
          color: #2dd790;
          border: 1px solid #c3c3c3;
        `}
`;
