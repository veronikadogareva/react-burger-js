import React from 'react';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import burgerIngredientsStyles from '../BurgerIngredients/burgerIngredients.module.css';

export default function BurgerIngredient({ ingredient, count }) {
    return (
        <li>
            <img src={ingredient.image} alt="" />
            <span className={`text text_type_digits-default ${burgerIngredientsStyles.price}`}>{ingredient.price}<CurrencyIcon type="primary" /></span>
            <p className='text text_type_main-default'>{ingredient.name}</p>
            { count && <span className={`text text_type_digits-default ${burgerIngredientsStyles.count}`}>{count}</span> }
        </li>
    )
}