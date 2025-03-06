import { useDispatch } from "react-redux";
import burgerConstructorElementStyles from "./burgerConstructorElement.module.css";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { CONSTRUCTOR_INGREDIENT_DELETE } from "../../services/constructorIngredients/action";

export default function BurgerConstructorElement({  ingredient, ingredientKey }) {
    const dispatch = useDispatch();
    const onClose = () => {
        dispatch({
            type:CONSTRUCTOR_INGREDIENT_DELETE,
            payload:ingredient._id
        })
    }
    return (
        <li key={ingredientKey}>
            <ConstructorElement
                type={ingredient.type}
                isLocked={false}
                text={ingredient.name}
                price={ingredient.price}
                thumbnail={ingredient.image_mobile}
                handleClose={onClose}
            />
        </li>
    );
}
