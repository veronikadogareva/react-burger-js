import React from 'react';
import burgerIngredientsStyles from './BurgerIngredients.module.css';
import { Tab, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';

export default function BurgerIngredients(props) {
    const [current, setCurrent] = React.useState('one');
    return (
        <section className={burgerIngredientsStyles.container}>
            <h2 className='text text_type_main-large'>Соберите бургер</h2>
            <div className={burgerIngredientsStyles.tabs}>
            <Tab value="one" active={current === 'one'} onClick={setCurrent}>
              Булки
            </Tab>
            <Tab value="two" active={current === 'two'} onClick={setCurrent}>
              Соусы
            </Tab>
            <Tab value="three" active={current === 'three'} onClick={setCurrent}>
              Начинки
            </Tab>
          </div>
            <ul>
                <li>
                    <h3 className='text text_type_main-medium'>Булки</h3>
                    <ul className={burgerIngredientsStyles.cardList}>
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