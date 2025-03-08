import tabsStyles from "./tabs.module.css";
import React from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

export default function Tabs({ ref, activeTab, setActiveTab }) {
  // const clickTab = (evt) => {
  //   setActiveTab(evt);
  //   document.getElementById(evt).scrollIntoView();
  // };
  return (
    <div className={tabsStyles.tabs} ref={ref}>
      <div>
        <Tab value="buns" active={activeTab === "buns"}>
          Булки
        </Tab>
      </div>

      <Tab value="sauces" active={activeTab === "sauces"}>
        Соусы
      </Tab>
      <Tab value="main" active={activeTab === "main"}>
        Начинки
      </Tab>
    </div>
  );
}
Tabs.propTypes = {
  ref: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({ current: PropTypes.instanceOf(Element) })]),
  activeTab: PropTypes.oneOf(["buns", "sauces", "main"]).isRequired,
  setActiveTab: PropTypes.func,
};
