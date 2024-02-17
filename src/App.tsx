import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Provider from "./components/provider";
import Router from "./components/router";

function App() {
  return (
    <Provider>
      <Router />
    </Provider>
  );
}

export default App;
