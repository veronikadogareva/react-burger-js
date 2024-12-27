import React from 'react';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import burgerIngredientStyles from './burgerIngredient.module.css';

export default function BurgerIngredient({ ingredient, count }) {
    return (
        <li className={burgerIngredientStyles.item}>
            <img src={ingredient.image} alt={ingredient.name} />
            <span className={`text text_type_digits-default ${burgerIngredientStyles.price}`}>{ingredient.price}<CurrencyIcon type="primary" /></span>
            <p className='text text_type_main-default'>{ingredient.name}</p>
            { count && <span className={`text text_type_digits-default ${burgerIngredientStyles.count}`}>{count}</span> }
        </li>
    )
}