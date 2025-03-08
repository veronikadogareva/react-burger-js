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

export default function BurgerIngredients() {
  const [activeTab, setActiveTab] = useState("buns");
  const simpleBarRef = useRef(null);
  const bunsRef = useRef(null);
  const saucesRef = useRef(null);
  const mainRef = useRef(null);
  const tabsRef = useRef(null);
  const dispatch = useDispatch();
  const isModal = useSelector(getIsModal);
  const ingredients = useSelector(getAllIngredients);
  const selectedIngredient = useSelector(getSelectedIngredient);

  useEffect(() => {
    const simpleBarElement = simpleBarRef.current.getScrollElement();
    const handleScroll = () => {
      const bunsRect = bunsRef.current.getBoundingClientRect();
      const saucesRect = saucesRef.current.getBoundingClientRect();
      const mainRect = mainRef.current.getBoundingClientRect();
      const tabsRect = tabsRef.current.getBoundingClientRect();
      setActiveTab(getClosestSection(tabsRect, bunsRect, saucesRect, mainRect));
    };
    simpleBarElement.addEventListener("scroll", handleScroll);
    return () => {
      simpleBarElement.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const getClosestSection = (tabsRect, bunsRect, saucesRect, mainRect) => {
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
        <Tabs ref={tabsRef} activeTab={activeTab} setActiveTab={setActiveTab} />
        <SimpleBar style={{ maxHeight: 716 }} ref={simpleBarRef}>
          <ul>
            <BurgerSection id="buns" ingredients={ingredients.filter((f) => f.type === "bun")} title="Булки" ref={bunsRef} />
            <BurgerSection id="sauces" ingredients={ingredients.filter((f) => f.type === "sauce")} title="Соусы" ref={saucesRef} />
            <BurgerSection id="main" ingredients={ingredients.filter((f) => f.type === "main")} title="Начинки" ref={mainRef} />
          </ul>
        </SimpleBar>
      </section>
      {isModal && (
        <Modal onClose={closeModal} title="Детали ингредиента">
          <IngredientDetails ingredient={selectedIngredient} />
        </Modal>
      )}
    </React.Fragment>
  );
}
