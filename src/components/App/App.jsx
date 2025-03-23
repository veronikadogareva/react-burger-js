import React from "react";
import appStyles from "./App.module.css";
import AppHeader from "../AppHeader/AppHeader";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import Login from "../../pages/Login";

function App() {
  return (
    <div className={appStyles.app}>
      <AppHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
