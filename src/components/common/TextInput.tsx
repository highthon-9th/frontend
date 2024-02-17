import { ChangeEvent } from "react";
import { useState } from "react";
import { styled } from "styled-components";

interface IFTextInputProps {
  inputInfo?: string;
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const TextInput = ({ inputInfo, name, onChange }: IFTextInputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <Container>
      {inputInfo && <InputInfo isFocused={isFocused}>{inputInfo}</InputInfo>}
      <Input
        name={name}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </Container>
  );
};

export default TextInput;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 7px;
`;

const InputInfo = styled.label<{ isFocused: boolean }>`
  font-size: 14px;
  color: ${(props) => (props.isFocused ? "#FF8127" : "#70757d")};
`;

const Input = styled.input`
  width: 358px;
  height: 51px;
  padding-left: 8px;
  border-radius: 5px;
  outline: none;
  border: 1px solid #70757d;
  &:focus {
    border: 1px solid #ff8127;
  }
`;
