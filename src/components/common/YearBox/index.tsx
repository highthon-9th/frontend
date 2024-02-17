import { css, styled } from "styled-components";

interface IFYearBoxProps {
  onClick: () => void;
  isSelect: boolean;
}

const YearBox = ({ onClick, isSelect }: IFYearBoxProps) => {
  return (
    <Box onClick={onClick} isSelect={isSelect}>
      YearBox
    </Box>
  );
};

export default YearBox;

const Box = styled.div<{ isSelect: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 67px;
  height: 35px;

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
          border: none;
        `}
`;
