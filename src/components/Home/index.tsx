import TopNavigation from "../common/TopNavigation";

const Home = () => {
  const onClick = () => {
    console.log("onclick");
  };
  return <TopNavigation onClick={onClick} prevPage={() => {}} />;
};

export default Home;
