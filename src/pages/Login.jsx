import React, { useRef, useState } from "react";
import loginStyles from "./login.module.css";
import { Input, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../services/user/action";

function Login() {
  const inputRefs = {
    email: useRef(null),
    password: useRef(null),
  };
  const dispatch = useDispatch();
  const [icon, setIcon] = useState("ShowIcon");
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = inputRefs.email.current.value;
    const password = inputRefs.password.current.value;
    dispatch(
      login({
        email: email,
        password: password,
      })
    );
  };
  const onIconClick = (e) => {
    setIcon((prevIcon) => {
      return prevIcon === "ShowIcon" ? "HideIcon" : "ShowIcon";
    });
  };

  return (
    <div className={loginStyles.container}>
      <h3 className="text text_type_main-medium">Вход</h3>
      <form onSubmit={handleSubmit}>
        <Input type={"text"} placeholder={"E-mail"} name={"e-mail"} error={false} ref={inputRefs.email} errorText={"Ошибка"} size={"default"} extraClass="ml-1" autoComplete="email"/>
        <Input type={icon === "ShowIcon" ? "password" : "text"} placeholder={"Пароль"} name={"password"} error={false} ref={inputRefs.password} onIconClick={onIconClick} errorText={"Ошибка"} size={"default"} extraClass="ml-1" icon={icon} autoComplete="current-password"/>
        <Button htmlType="submit" type="primary" size="large">
          Войти
        </Button>
      </form>
      <div className={loginStyles.group}>
        <span className="text text_type_main-default">Вы — новый пользователь?</span>
        <Link to="/register" className="text text_type_main-default">
          Зарегистрироваться
        </Link>
      </div>
      <div className={loginStyles.group}>
        <span className="text text_type_main-default">Забыли пароль?</span>
        <Link to="/forgot-password" className="text text_type_main-default">
          Восстановить пароль
        </Link>
      </div>
    </div>
  );
}

export default Login;
