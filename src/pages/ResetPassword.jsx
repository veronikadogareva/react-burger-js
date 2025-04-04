import React, { useEffect, useRef, useState } from "react";
import loginStyles from "./login.module.css";
import { Input, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useLocation, useNavigate } from "react-router-dom";
import BaseService from "../utils/BaseService";
import { useForm } from "../hooks/useForm";

function ResetPassword() {
  const {values, handleChange, setValues} = useForm({
      password:"",
      code:"",
    })
  const [icon, setIcon] = useState("ShowIcon");
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(()=>{
    console.log(location.state)
    if (!location.state) {
      navigate("/");
      return;
    } else if (location.state.from !== "/forgot-password") {
      navigate(-1)
    }
  },[navigate,location])
  const handleSubmit = (e) => {
    e.preventDefault();
    BaseService.resetPassword({
      password: values.password,
      token: values.code,
    }).then(() => {
      navigate("/login");
    });
  };
  const onIconClick = (e) => {
    setIcon((prevIcon) => {
      return prevIcon === "ShowIcon" ? "HideIcon" : "ShowIcon";
    });
  };
  return (
    <div className={loginStyles.container}>
      <h3 className="text text_type_main-medium">Восстановление пароля</h3>
      <form onSubmit={handleSubmit}>
        <Input value={values.password} onChange={handleChange} type={icon === "ShowIcon"? "password":"text"} placeholder={"Пароль"} name={"password"} error={false} onIconClick={onIconClick} errorText={"Ошибка"} size={"default"} extraClass="ml-1" icon={icon} />
        <Input value={values.code} onChange={handleChange} type={"text"} placeholder={"Введите код из письма"} name={"code"} error={false} errorText={"Ошибка"} size={"default"} extraClass="ml-1" />
        <Button htmlType="submit" type="primary" size="large">
          Сохранить
        </Button>
      </form>
      <div className={loginStyles.group}>
        <span className="text text_type_main-default">Вспомнили пароль?</span>
        <Link to="/login" className="text text_type_main-default">
          Войти
        </Link>
      </div>
    </div>
  );
}

export default ResetPassword;
