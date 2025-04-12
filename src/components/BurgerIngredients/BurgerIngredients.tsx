import React, { useEffect, useRef, useState } from "react";
import "simplebar-react/dist/simplebar.min.css";
import SimpleBar from "simplebar-react";
import burgerIngredientsStyles from "./burgerIngredients.module.css";
import BurgerSection from "../BurgerSection/BurgerSection";
import Tabs from "../Tabs/Tabs";
import Modal from "../Modal/Modal";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import { useDispatch, useSelector } from "react-redux";
import { getSelectedIngredient, getIsModal } from "../../services/selectedIngredient/selectors";
import { INGREDIENT_DELETE } from "../../services/selectedIngredient/action";
import { getAllIngredients } from "../../services/ingredients/selectors";
import type SimpleBarCore from "simplebar-core";
import { TIngredient, TIngredientRects, TTubs } from "../../utils/types";

export default function BurgerIngredients(): React.JSX.Element {
  const [activeTab, setActiveTab] = useState<TTubs | string>("buns");
  const simpleBarRef = useRef<SimpleBarCore | null>(null);
  const bunsRef = useRef<HTMLLIElement | null>(null);
  const saucesRef = useRef<HTMLLIElement | null>(null);
  const mainRef = useRef<HTMLLIElement | null>(null);
  const tabsRef = useRef<HTMLDivElement | null>(null);
  const dispatch = useDispatch();
  const isModal = useSelector(getIsModal);
  const ingredients = useSelector(getAllIngredients);

  useEffect(() => {
    const simpleBarElement = simpleBarRef.current?.getScrollElement();
    const handleScroll = () => {
      const bunsRect = bunsRef.current?.getBoundingClientRect();
      const saucesRect = saucesRef.current?.getBoundingClientRect();
      const mainRect = mainRef.current?.getBoundingClientRect();
      const tabsRect = tabsRef.current?.getBoundingClientRect();
      setActiveTab(getClosestSection({ tabsRect, bunsRect, saucesRect, mainRect }));
    };
    simpleBarElement?.addEventListener("scroll", handleScroll);
    return () => {
      simpleBarElement?.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const getClosestSection = ({ tabsRect, bunsRect, saucesRect, mainRect }: TIngredientRects): string => {
    if (!tabsRect || !bunsRect || !saucesRect || !mainRect) {
      return "buns";
    }
    const distances = {
      buns: Math.abs(bunsRect.top - tabsRect.bottom),
      sauces: Math.abs(saucesRect.top - tabsRect.bottom),
      main: Math.abs(mainRect.top - tabsRect.bottom),
    };
    let closestSection = "buns";
    let minDistance = distances.buns;
    if (distances.sauces < minDistance) {
      closestSection = "sauces";
      minDistance = distances.sauces;
    }
    if (distances.main < minDistance) {
      closestSection = "main";
    }
    return closestSection;
  };
  const closeModal = () => {
    dispatch({
      type: INGREDIENT_DELETE,
    });
  };
  return (
    <React.Fragment>
      <section className={burgerIngredientsStyles.container}>
        <h2 className="text text_type_main-large">Соберите бургер</h2>
        <Tabs ref={tabsRef} activeTab={activeTab} />
        <SimpleBar style={{ maxHeight: 716 }} ref={simpleBarRef}>
          <ul>
            <BurgerSection ingredients={ingredients.filter((f: TIngredient) => f.type === "bun")} title="Булки" ref={bunsRef} />
            <BurgerSection ingredients={ingredients.filter((f: TIngredient) => f.type === "sauce")} title="Соусы" ref={saucesRef} />
            <BurgerSection ingredients={ingredients.filter((f: TIngredient) => f.type === "main")} title="Начинки" ref={mainRef} />
          </ul>
        </SimpleBar>
      </section>
      {isModal && (
        <Modal onClose={closeModal}>
          <IngredientDetails />
        </Modal>
      )}
    </React.Fragment>
  );
}
