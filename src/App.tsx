import React from "react";
import { Routes } from "./Routes";
import { ResetCSS } from "./utils/ResetCSS";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <div id="root">
      <ResetCSS />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
};

export default App;
