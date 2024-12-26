import React from 'react';
import PropTypes from 'prop-types';
import 'simplebar-react/dist/simplebar.min.css';
import SimpleBar from 'simplebar-react';
import burgerConstructorStyles from './burgerConstructor.module.css';
import { ConstructorElement, CurrencyIcon, Button, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';


export default function BurgerConstructor({ingredients}) {
    return (
        <section className={burgerConstructorStyles.container}>
            <SimpleBar style={{ maxHeight: 656 }}>
            <ul>
                <li>
                    <ConstructorElement
                        type="top"
                        isLocked={true}
                        text="Краторная булка N-200i (верх)"
                        price={200}
                        thumbnail="https://code.s3.yandex.net/react/code/cheese.png"
                    />
                </li>
                <li>
                    <DragIcon type="primary" />
                    <ConstructorElement
                        text="Краторная булка N-200i (верх)"
                        price={50}
                        thumbnail="https://code.s3.yandex.net/react/code/cheese.png"
                    />
                </li>
                <li>
                    <DragIcon type="primary" />
                    <ConstructorElement
                        text="Краторная булка N-200i (верх)"
                        price={50}
                        thumbnail="https://code.s3.yandex.net/react/code/cheese.png"
                    />
                </li>
                <li>
                    <DragIcon type="primary" />
                    <ConstructorElement
                        text="Краторная булка N-200i (верх)"
                        price={50}
                        thumbnail="https://code.s3.yandex.net/react/code/cheese.png"
                    />
                </li>
                <li>
                    <DragIcon type="primary" />
                    <ConstructorElement
                        text="Краторная булка N-200i (верх)"
                        price={50}
                        thumbnail="https://code.s3.yandex.net/react/code/cheese.png"
                    />
                </li><li>
                    <DragIcon type="primary" />
                    <ConstructorElement
                        text="Краторная булка N-200i (верх)"
                        price={50}
                        thumbnail="https://code.s3.yandex.net/react/code/cheese.png"
                    />
                </li>
                <li>
                    <DragIcon type="primary" />
                    <ConstructorElement
                        text="Краторная булка N-200i (верх)"
                        price={50}
                        thumbnail="https://code.s3.yandex.net/react/code/cheese.png"
                    />
                </li>
                <li>
                    <DragIcon type="primary" />
                    <ConstructorElement
                        text="Краторная булка N-200i (верх)"
                        price={50}
                        thumbnail="https://code.s3.yandex.net/react/code/cheese.png"
                    />
                </li>

                <li>
                    <ConstructorElement
                        type="bottom"
                        isLocked={true}
                        text="Краторная булка N-200i (низ)"
                        price={200}
                        thumbnail="https://code.s3.yandex.net/react/code/cheese.png"
                    />
                </li>
            </ul>
            </SimpleBar>
            <div className={burgerConstructorStyles.total}>
                <span className="text text_type_digits-medium">20<CurrencyIcon type="primary" /></span>
                <Button htmlType="button" type="primary" size="large">
                    Оформить заказ
                </Button>
            </div>
        </section >
    );
}
BurgerConstructor.propTypes = {
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