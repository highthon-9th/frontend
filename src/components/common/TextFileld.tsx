import styled from "styled-components";
import ImgFile from "../../assets/ImgFile";
import InputArrow from "../../assets/InputArrow";
import { ChangeEvent } from "react";

interface IFTextField {
  className?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const TextField = ({ onChange, className }: IFTextField) => {
  return (
    <StyledWrapper className={className}>
      <ImgFile />
      <CustomInput placeholder="메세지 보내기.." onChange={onChange} />
      <InputArrow className="arrow-icon" />
    </StyledWrapper>
  );
};

export default TextField;

const StyledWrapper = styled.div`
  width: 100%;
  height: 53px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 19px 0px 16px;
  background-color: #fff;

  svg {
    display: block;
  }
`;

const CustomInput = styled.input`
  width: calc(100% - 60px);
  border: none;
  font-size: 17px;
  font-weight: 400;
  color: #333;
  outline: none;

  &::placeholder {
    font-size: 17px;
    font-weight: 400;
    color: #70757d;
  }
`;
