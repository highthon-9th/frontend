import { Container, Text } from "./style";
import LeftArrowIcon from "../../../assets/LeftArrowIcon";

interface IFTopNavigationProps {
  section?: number;
  prevPage: () => void;
  nextPage?: () => void;
  title?: string;
  configText?: string;
  onClick?: () => void;
}

const TopNavigation = ({
  prevPage,
  title,
  section,
  configText,
  onClick,
}: IFTopNavigationProps) => {
  return (
    <Container>
      <LeftArrowIcon onClick={prevPage} />
      {title}
      {configText && section && (
        <Text onClick={onClick} section={section}>
          {configText}
        </Text>
      )}
    </Container>
  );
};

export default TopNavigation;
