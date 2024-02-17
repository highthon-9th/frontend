import { styled } from "styled-components";

export const Container = styled.div`
  width: 390px;
  height: 42px;
  background-color: #ffffff;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-left: 16px;
  padding-right: 16px;
`;

export const Text = styled.p<{ section: number }>`
  font-weight: bold;
  color: #c3c3c3;

  color: ${({ section }) => section === 1 && "#42BC86"};
`;
