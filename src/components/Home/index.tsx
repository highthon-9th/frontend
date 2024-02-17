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
  const onClick = () => {
    console.log("onclick");
  };
  return (
    <TopNavigation
      section={section}
      nextPage={nextPage}
      prevPage={prevPage}
      onClick={onClick}
    />
  );
};

export default Home;
