import tabsStyles from "./tabs.module.css";
import React from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

export default function Tabs({}) {
  const [current, setCurrent] = React.useState("buns");
  const clickTab = (evt) => {
    setCurrent(evt);
    document.getElementById(evt).scrollIntoView();
  };
  return (
    <div className={tabsStyles.tabs}>
      <Tab value="buns" active={current === "buns"} onClick={clickTab}>
        Булки
      </Tab>
      <Tab value="sauces" active={current === "sauces"} onClick={clickTab}>
        Соусы
      </Tab>
      <Tab value="main" active={current === "main"} onClick={clickTab}>
        Начинки
      </Tab>
    </div>
  );
}
