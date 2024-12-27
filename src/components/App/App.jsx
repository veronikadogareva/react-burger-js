import React from 'react';
import appStyles from './App.module.css';
import AppHeader from '../AppHeader/AppHeader';
import Main from '../Main/Main';
const API = 'https://norma.nomoreparties.space/api/ingredients';

function App() {
return (
  <div className={appStyles.app}>
    <AppHeader />
    <Main api={API}/>
  </div>
);
}

export default App;
