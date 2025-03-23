import React from "react";
import appStyles from "./App.module.css";
import AppHeader from "../AppHeader/AppHeader";
import Main from "../Main/Main";

function App() {
  return (
    <div className={appStyles.app}>
      <AppHeader />
      <Main />
    </div>
  );
}

export default App;
