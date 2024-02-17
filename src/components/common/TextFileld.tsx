import styled from "styled-components";
import ImgFile from "../../assets/ImgFile";
import InputArrow from "../../assets/InputArrow";
import { ChangeEvent, Dispatch, SetStateAction, useRef } from "react";
import { instance } from "../../libs/instance";
import { useMutation } from "react-query";

export const CreateImage = async (imgFormData: any) => {
  const { data } = await instance.post("/image", imgFormData);
  return data;
};

interface IFTextField {
  className?: string;
  setImageURL: Dispatch<SetStateAction<string>>;
}

const TextField = ({ className, setImageURL }: IFTextField) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const mutation = useMutation(CreateImage);

  const handleOpenFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleUploadFile = (e: ChangeEvent<HTMLInputElement>) => {
    const formData = new FormData();
    if (!e.target.files?.[0]) return;
    formData.append("file", e.target.files[0]);
    mutation.mutate(formData, {
      onSuccess: (data) => {
        setImageURL(data);
      },
    });
  };

  return (
    <StyledWrapper className={className}>
      <span onClick={handleOpenFileInput}>
        <input
          type="file"
          onChange={handleUploadFile}
          style={{ display: "none" }}
          ref={fileInputRef}
        />
        <ImgFile />
      </span>
      <InputArrow className="arrow-icon" />
    </StyledWrapper>
  );
};

export default TextField;

const StyledWrapper = styled.div`
  position: fixed;
  bottom: 0px;
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
