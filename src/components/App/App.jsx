import React, { useEffect, useState } from 'react';
import appStyles from './App.module.css';
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
const API = 'https://norma.nomoreparties.space/api/ingredients';

function App() {
  const [ingredients, setIngredients] = useState([]);
  useEffect(() => {
    fetch(API)
      .then(res => {
        if (!res.ok) {
          throw new Error(`Произошла ошибка при выполнении запроса. Код ошибки: ${res.status}`);
        }
        return res.json();
      })
      .then(res => {
        setIngredients(res.data);
      })
      .catch(err => {
        console.error('Ошибка запроса:', err);
      });
}, []);


return (
  <div className={appStyles.app}>
    <AppHeader />
    <main>
      <BurgerIngredients ingredients={ingredients} />
      <BurgerConstructor ingredients={ingredients} />
    </main>
  </div>
);
}

export default App;
