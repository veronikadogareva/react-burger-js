import React from 'react';
import PropTypes from 'prop-types';
import 'simplebar-react/dist/simplebar.min.css';
import SimpleBar from 'simplebar-react';

import burgerIngredientsStyles from './burgerIngredients.module.css';
import BurgerSection from '../BurgerSection/BurgerSection';
import Tabs from '../Tabs/Tabs';

export default function BurgerIngredients({ingredients}) {
    return (
        <section className={burgerIngredientsStyles.container}>
            <h2 className='text text_type_main-large'>Соберите бургер</h2>
            <Tabs/>
            <SimpleBar style={{ maxHeight: 716 }}>
                <ul>
                    <BurgerSection id="buns" ingredients={ingredients.filter(f => f.type === 'bun')} title="Булки"/>
                    <BurgerSection id="sauces" ingredients={ingredients.filter(f => f.type === 'sauce')} title="Соусы"/>
                    <BurgerSection id="main" ingredients={ingredients.filter(f => f.type === 'main')} title="Начинки"/>
                </ul>
            </SimpleBar>
        </section>
    );
}
BurgerIngredients.propTypes = {
    ingredients: PropTypes.arrayOf(
      PropTypes.shape({
        _id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        type: PropTypes.oneOf(["bun", "sauce", "main"]).isRequired,
        proteins: PropTypes.number,
        fat: PropTypes.number,
        carbohydrates: PropTypes.number,
        calories: PropTypes.number,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        image_mobile: PropTypes.string,
        image_large: PropTypes.string,
        __v: PropTypes.number,
      })
    ).isRequired,
  };