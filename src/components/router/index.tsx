import { Route, Routes } from "react-router-dom";
import Home from "../Home";
import Signin from "../Auth/Signin";
import Signup from "../Auth/Signup";
import List from "../List";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/list" element={<List />} />
    </Routes>
  );
};

export default Router;
