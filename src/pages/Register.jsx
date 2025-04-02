import React, { useRef, useState } from "react";
import registerStyles from "./register.module.css";
import loginStyles from "./login.module.css";
import { Input, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../services/user/action";

function Register() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const nameRef = useRef(null);
  const dispatch = useDispatch();
  const [icon, setIcon] = useState("ShowIcon");
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const name = nameRef.current.value;
    dispatch(
      register({
        email: email,
        password: password,
        name: name,
      })
    );
    console.log(name, email, password);
  };
  const onIconClick = (e) => {
    setIcon((prevIcon) => {
      return prevIcon === "ShowIcon" ? "HideIcon" : "ShowIcon";
    });
  };
  return (
    <div className={loginStyles.container}>
      <h3 className="text text_type_main-medium">Регистрация</h3>
      <form onSubmit={handleSubmit}>
        <Input type={"text"} placeholder={"Имя"} name={"name"} error={false} ref={nameRef} errorText={"Ошибка"} size={"default"} extraClass="ml-1" />
        <Input type={"text"} placeholder={"E-mail"} name={"e-mail"} error={false} ref={emailRef} errorText={"Ошибка"} size={"default"} extraClass="ml-1" />
        <Input type={"text"} placeholder={"Пароль"} name={"password"} error={false} ref={passwordRef} onIconClick={onIconClick} errorText={"Ошибка"} size={"default"} extraClass="ml-1" icon={icon} />
        <Button htmlType="submit" type="primary" size="large">
          Зарегистрироваться
        </Button>
      </form>
      <div className={loginStyles.group}>
        <span className="text text_type_main-default">Уже зарегистрированы?</span>
        <Link to="/login" className="text text_type_main-default">
          Войти
        </Link>
      </div>
    </div>
  );
}

export default Register;
