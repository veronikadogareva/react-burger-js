import React, { useEffect, useRef, useState } from "react";
import loginStyles from "./login.module.css";
import { Input, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useLocation, useNavigate } from "react-router-dom";
import BaseService from "../utils/BaseService";

function ResetPassword() {
  const inputRefs = {
      password: useRef(null),
      code: useRef(null),
    };
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
    const password = inputRefs.password.current.value;
    const code = inputRefs.code.current.value;
    BaseService.resetPassword({
      password: password,
      token: code,
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
        <Input type={icon === "ShowIcon"? "password":"text"} placeholder={"Пароль"} name={"password"} error={false} ref={inputRefs.password} onIconClick={onIconClick} errorText={"Ошибка"} size={"default"} extraClass="ml-1" icon={icon} />
        <Input type={"text"} placeholder={"Введите код из письма"} name={"code"} error={false} ref={inputRefs.code} errorText={"Ошибка"} size={"default"} extraClass="ml-1" />
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
