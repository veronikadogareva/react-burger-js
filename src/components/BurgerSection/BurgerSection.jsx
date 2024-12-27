import burgerSectionStyles from './burgerSection.module.css';
import React from 'react';
import burgerIngredientsStyles from '../BurgerIngredients/burgerIngredients.module.css';

import BurgerIngredient from '../BurgerIngredient/BurgerIngredient';

export default function BurgerSection({ ingredients, id, title }) {
    return (
        <li id={id}>
            <h3 className='text text_type_main-medium'>{title}</h3>
            <ul className={burgerIngredientsStyles.cardList}>
                {ingredients.map((ingredient) => {
                    return (
                        <BurgerIngredient ingredient={ingredient} count={Math.round(Math.random() * 5)} key={ingredient._id}/>
                    )
                })}
            </ul>
        </li>
    )
}