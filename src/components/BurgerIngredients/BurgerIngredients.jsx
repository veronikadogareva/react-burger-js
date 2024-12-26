import React from 'react';
import burgerIngredientsStyles from './BurgerIngredients.module.css';
import { Tab, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import 'simplebar-react/dist/simplebar.min.css';
import SimpleBar from 'simplebar-react';

export default function BurgerIngredients(props) {
    const [current, setCurrent] = React.useState('buns');
    return (
        <section className={burgerIngredientsStyles.container}>
            <h2 className='text text_type_main-large'>Соберите бургер</h2>
            <div className={burgerIngredientsStyles.tabs}>
                <Tab value="buns" active={current === 'buns'} onClick={() => { setCurrent('buns'); document.getElementById('buns').scrollIntoView(); }}>
                    Булки
                </Tab>
                <Tab value="sauces" active={current === 'sauces'} onClick={() => { setCurrent('sauces'); document.getElementById('sauces').scrollIntoView(); }}>
                    Соусы
                </Tab>
                <Tab value="fillings" active={current === 'fillings'} onClick={() => { setCurrent('three'); document.getElementById('fillings').scrollIntoView(); }}>
                    Начинки
                </Tab>
            </div>
            <SimpleBar style={{ maxHeight: 716 }}>
                <ul>
                    <li id="buns">
                        <h3 className='text text_type_main-medium'>Булки</h3>
                        <ul className={burgerIngredientsStyles.cardList}>
                            <li>
                                <img src="https://code.s3.yandex.net/react/code/bun-02.png" alt="" />
                                <span className={`text text_type_digits-default ${burgerIngredientsStyles.price}`}>20<CurrencyIcon type="primary" /></span>
                                <p className='text text_type_main-default'>Краторная булка N-200i</p>
                                <span className={`text text_type_digits-default ${burgerIngredientsStyles.count}`}>1</span>
                            </li>
                            <li>
                                <img src="https://code.s3.yandex.net/react/code/bun-02.png" alt="" />
                                <span className={`text text_type_digits-default ${burgerIngredientsStyles.price}`}>20<CurrencyIcon type="primary" /></span>
                                <p className='text text_type_main-default'>Краторная булка N-200i</p>
                                <span className={`text text_type_digits-default ${burgerIngredientsStyles.count}`}>1</span>
                            </li>
                            <li>
                                <img src="https://code.s3.yandex.net/react/code/bun-02.png" alt="" />
                                <span className={`text text_type_digits-default ${burgerIngredientsStyles.price}`}>20<CurrencyIcon type="primary" /></span>
                                <p className='text text_type_main-default'>Краторная булка N-200i</p>
                                <span className={`text text_type_digits-default ${burgerIngredientsStyles.count}`}>1</span>
                            </li><li>
                                <img src="https://code.s3.yandex.net/react/code/bun-02.png" alt="" />
                                <span className={`text text_type_digits-default ${burgerIngredientsStyles.price}`}>20<CurrencyIcon type="primary" /></span>
                                <p className='text text_type_main-default'>Краторная булка N-200i</p>
                                <span className={`text text_type_digits-default ${burgerIngredientsStyles.count}`}>1</span>
                            </li><li>
                                <img src="https://code.s3.yandex.net/react/code/bun-02.png" alt="" />
                                <span className={`text text_type_digits-default ${burgerIngredientsStyles.price}`}>20<CurrencyIcon type="primary" /></span>
                                <p className='text text_type_main-default'>Краторная булка N-200i</p>
                                <span className={`text text_type_digits-default ${burgerIngredientsStyles.count}`}>1</span>
                            </li>
                        </ul>
                    </li>
                    <li id="sauces">
                        <h3 className='text text_type_main-medium'>Соусы</h3>
                        <ul className={burgerIngredientsStyles.cardList}>
                            <li>
                                <img src="https://code.s3.yandex.net/react/code/bun-02.png" alt="" />
                                <span className={`text text_type_digits-default ${burgerIngredientsStyles.price}`}>20<CurrencyIcon type="primary" /></span>
                                <p className='text text_type_main-default'>Краторная булка N-200i</p>
                                <span className={`text text_type_digits-default ${burgerIngredientsStyles.count}`}>1</span>
                            </li>
                            <li>
                                <img src="https://code.s3.yandex.net/react/code/bun-02.png" alt="" />
                                <span className={`text text_type_digits-default ${burgerIngredientsStyles.price}`}>20<CurrencyIcon type="primary" /></span>
                                <p className='text text_type_main-default'>Краторная булка N-200i</p>
                                <span className={`text text_type_digits-default ${burgerIngredientsStyles.count}`}>1</span>
                            </li>
                            <li>
                                <img src="https://code.s3.yandex.net/react/code/bun-02.png" alt="" />
                                <span className={`text text_type_digits-default ${burgerIngredientsStyles.price}`}>20<CurrencyIcon type="primary" /></span>
                                <p className='text text_type_main-default'>Краторная булка N-200i</p>
                                <span className={`text text_type_digits-default ${burgerIngredientsStyles.count}`}>1</span>
                            </li>
                            <li>
                                <img src="https://code.s3.yandex.net/react/code/bun-02.png" alt="" />
                                <span className={`text text_type_digits-default ${burgerIngredientsStyles.price}`}>20<CurrencyIcon type="primary" /></span>
                                <p className='text text_type_main-default'>Краторная булка N-200i</p>
                                <span className={`text text_type_digits-default ${burgerIngredientsStyles.count}`}>1</span>
                            </li>
                        </ul>
                    </li>
                    <li id="fillings">
                        <h3 className='text text_type_main-medium'>Начинки</h3>
                        <ul className={burgerIngredientsStyles.cardList}>
                            <li>
                                <img src="https://code.s3.yandex.net/react/code/bun-02.png" alt="" />
                                <span className={`text text_type_digits-default ${burgerIngredientsStyles.price}`}>20<CurrencyIcon type="primary" /></span>
                                <p className='text text_type_main-default'>Краторная булка N-200i</p>
                                <span className={`text text_type_digits-default ${burgerIngredientsStyles.count}`}>1</span>
                            </li>
                            <li>
                                <img src="https://code.s3.yandex.net/react/code/bun-02.png" alt="" />
                                <span className={`text text_type_digits-default ${burgerIngredientsStyles.price}`}>20<CurrencyIcon type="primary" /></span>
                                <p className='text text_type_main-default'>Краторная булка N-200i</p>
                                <span className={`text text_type_digits-default ${burgerIngredientsStyles.count}`}>1</span>
                            </li>
                            <li>
                                <img src="https://code.s3.yandex.net/react/code/bun-02.png" alt="" />
                                <span className={`text text_type_digits-default ${burgerIngredientsStyles.price}`}>20<CurrencyIcon type="primary" /></span>
                                <p className='text text_type_main-default'>Краторная булка N-200i</p>
                                <span className={`text text_type_digits-default ${burgerIngredientsStyles.count}`}>1</span>
                            </li>
                            <li>
                                <img src="https://code.s3.yandex.net/react/code/bun-02.png" alt="" />
                                <span className={`text text_type_digits-default ${burgerIngredientsStyles.price}`}>20<CurrencyIcon type="primary" /></span>
                                <p className='text text_type_main-default'>Краторная булка N-200i</p>
                                <span className={`text text_type_digits-default ${burgerIngredientsStyles.count}`}>1</span>
                            </li>
                        </ul>
                    </li>
                </ul>
            </SimpleBar>
        </section>
    );
}