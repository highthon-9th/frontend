import { Route, Routes } from "react-router-dom";
import Home from "../Home";
import Signin from "../Auth/Signin";
import Signup from "../Auth/Signup";
import List from "../List";
import Test from "../pages/Test";
import SelectTime from "../pages/SelectTime";
import Create from "../pages/Create";
import BbiBbi from "../pages/BbiBbi";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/list" element={<List />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/test" element={<Test />} />
      <Route path="/select-time" element={<SelectTime />} />
      <Route path="/create" element={<Create />} />
      <Route path="/bbibbi" element={<BbiBbi />} />
    </Routes>
  );
};

export default Router;
