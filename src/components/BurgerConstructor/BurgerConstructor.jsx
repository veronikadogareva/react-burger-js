import React from 'react';
import BurgerConstructorStyles from './BurgerConstructor.module.css';
import {  CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';

export default function BurgerConstructor(props) {
    return (
        <section className={BurgerConstructorStyles.container}>
            <h2 className='text text_type_main-large'>Соберите бургер</h2>
            <ul>
                <li>
                    <h3 className='text text_type_main-medium'>Булки</h3>
                    <ul>
                        <li>
                            <img src="https://code.s3.yandex.net/react/code/bun-02.png" alt="" />
                            <span className='text text_type_digits-default'>20<CurrencyIcon type="primary" /></span>
                            <p className='text text_type_main-default'>Краторная булка N-200i</p>
                        </li>
                        <li>
                            <img src="https://code.s3.yandex.net/react/code/bun-02.png" alt="" />
                            <span className='text text_type_digits-default'>20<CurrencyIcon type="primary" /></span>
                            <p className='text text_type_main-default'>Краторная булка N-200i</p>
                        </li>
                        <li>
                            <img src="https://code.s3.yandex.net/react/code/bun-02.png" alt="" />
                            <span className='text text_type_digits-default'>20<CurrencyIcon type="primary" /></span>
                            <p className='text text_type_main-default'>Краторная булка N-200i</p>
                        </li>
                    </ul>
                </li>
            </ul>
        </section>
    );
}