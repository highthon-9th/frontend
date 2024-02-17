import { Container, Text } from "./style";
import LeftArrowIcon from "../../../assets/LeftArrowIcon";
import { ReactNode } from "react";

interface IFTopNavigationProps {
  prevPage: () => void;
  title?: string;
  configText?: ReactNode;
  onClick?: () => void;
}

const TopNavigation = ({
  prevPage,
  title,
  configText,
  onClick,
}: IFTopNavigationProps) => {
  return (
    <Container>
      <LeftArrowIcon onClick={prevPage} />
      {title}
      {configText && <Text onClick={onClick}>{configText}</Text>}
    </Container>
  );
};

export default TopNavigation;
