import React, { useRef } from "react";
import loginStyles from "./login.module.css";
import { Input, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useNavigate } from "react-router-dom";
import BaseService from "../utils/BaseService";

function ForgotPassword(): React.JSX.Element {
  const emailRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = emailRef.current?.value || "";
    if (!email) return;
    BaseService.forgotPassword({
      email: email,
    }).then(() => {
      navigate("/reset-password", {
        state: { from: "/forgot-password" },
      });
    });
  };
  return (
    <div className={loginStyles.container}>
      <h3 className="text text_type_main-medium">Восстановление пароля</h3>
      <form onSubmit={handleSubmit}>
        {/* @ts-expect-error "yandex" */}
        <Input type={"text"} placeholder={"Укажите e-mail"} name={"e-mail"} error={false} ref={emailRef} errorText={"Ошибка"} size={"default"} extraClass="ml-1" />
        <Button htmlType="submit" type="primary" size="large">
          Восстановить
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

export default ForgotPassword;
