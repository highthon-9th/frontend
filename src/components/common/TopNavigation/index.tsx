import { Container, Text } from "./style";
import LeftArrowIcon from "../../../assets/LeftArrowIcon";

interface IFTopNavigationProps {
  section: number;
  prevPage: () => void;
  nextPage: () => void;
  onSubmit: () => void;
  children?: string;
}

const TopNavigation = ({
  nextPage,
  prevPage,
  children,
  section,
  onSubmit,
}: IFTopNavigationProps) => {
  return (
    <Container>
      <LeftArrowIcon onClick={prevPage} />
      {children}
      <Text onClick={section === 0 ? nextPage : onSubmit} section={section}>
        {section === 0 ? "다음으로" : "게시하기"}
      </Text>
    </Container>
  );
};

export default TopNavigation;
