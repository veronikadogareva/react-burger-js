import tabsStyles from "./tabs.module.css";
import React from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { TTubs } from "../../utils/types";

type TTabsProps = {
  ref?: React.Ref<HTMLDivElement>;
  activeTab: TTubs | string;
};

export default function Tabs({ ref, activeTab }: TTabsProps) {
  // const clickTab = (evt) => {
  //   setActiveTab(evt);
  //   document.getElementById(evt).scrollIntoView();
  // };
  return (
    <div className={tabsStyles.tabs} ref={ref}>
      <div>
        {/* @ts-expect-error "yandex" */}
        <Tab value="buns" active={activeTab === "buns"}>
          Булки
        </Tab>
      </div>
      {/* @ts-expect-error "yandex" */}
      <Tab value="sauces" active={activeTab === "sauces"}>
        Соусы
      </Tab>
      {/* @ts-expect-error "yandex" */}
      <Tab value="main" active={activeTab === "main"}>
        Начинки
      </Tab>
    </div>
  );
}
