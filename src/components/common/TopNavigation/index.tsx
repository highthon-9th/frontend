import { Container, Text } from "./style";
import LeftArrowIcon from "../../../assets/LeftArrowIcon";
import { ReactNode } from "react";

interface IFTopNavigationProps {
  prevPage: () => void;
  title?: string;
  configText?: ReactNode;
  onClick: () => void;
}

const TopNavigation = ({
  prevPage,
  title,
  configText = "다음으로",
  onClick,
}: IFTopNavigationProps) => {
  return (
    <Container>
      <LeftArrowIcon onClick={prevPage} />
      {title}
      <Text onClick={onClick}>{configText}</Text>
    </Container>
  );
};

export default TopNavigation;
