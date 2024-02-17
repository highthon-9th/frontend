import { ChangeEvent } from "react";
import { styled } from "styled-components";

interface IFTextInputProps {
  inputInfo?: string;
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const TextInput = ({ inputInfo, name, onChange }: IFTextInputProps) => {
  return (
    <Container>
      {inputInfo && <InputInfo>{inputInfo}</InputInfo>}
      <Input name={name} onChange={onChange} />
    </Container>
  );
};

export default TextInput;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  row-gap: 7px;
`;

const InputInfo = styled.label`
  font-size: 14px;
`;

const Input = styled.input`
  width: 358px;
  height: 51px;

  padding-left: 8px;
  border-radius: 5px;
  outline: none;
  border: 1px solid #70757d;
  &:focus {
    border: 1px solid #2dd790;
  }
`;
