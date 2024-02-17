import { useState } from "react";
import TopNavigation from "../common/TopNavigation";

const Home = () => {
  const [section, setSection] = useState(0);

  const nextPage = () => {
    setSection(1);
  };

  const prevPage = () => {
    setSection(0);
  };
  const onSubmit = () => {
    console.log("제출 하기 함수");
  };
  return (
    <TopNavigation
      section={section}
      nextPage={nextPage}
      prevPage={prevPage}
      onSubmit={onSubmit}
    />
  );
};

export default Home;
