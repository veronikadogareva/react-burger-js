import React, { useRef, useState } from "react";
import registerStyles from "./register.module.css";
import loginStyles from "./login.module.css";
import { Input, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../services/user/action";
import { useForm } from "../hooks/useForm";

function Register() {
  const { values, handleChange, setValues } = useForm({
    name:"",
    email: "",
    password: "",
  })
  const dispatch = useDispatch();
  const [icon, setIcon] = useState("ShowIcon");
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      register({
        email: values.email,
        password: values.password,
        name: values.name,
      })
    );
  };
  const onIconClick = () => {
    setIcon((prevIcon) => {
      return prevIcon === "ShowIcon" ? "HideIcon" : "ShowIcon";
    });
  };
  return (
    <div className={loginStyles.container}>
      <h3 className="text text_type_main-medium">Регистрация</h3>
      <form onSubmit={handleSubmit}>
        <Input type={"text"} value={values.name} onChange={handleChange} placeholder={"Имя"} name={"name"} error={false} errorText={"Ошибка"} size={"default"} extraClass="ml-1" />
        <Input type={"text"} value={values.email} onChange={handleChange} placeholder={"E-mail"} name={"email"} error={false} errorText={"Ошибка"} size={"default"} extraClass="ml-1" />
        <Input type={icon === "ShowIcon" ? "password" : "text"} value={values.password} onChange={handleChange} placeholder={"Пароль"} name={"password"} error={false} onIconClick={onIconClick} errorText={"Ошибка"} size={"default"} extraClass="ml-1" icon={icon} />
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
