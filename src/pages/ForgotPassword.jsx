import React, {useRef} from "react";
import loginStyles from "./login.module.css";
import { Input, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";

function ForgotPassword() {
  const emailRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    console.log(email)
  }
  return (
    <div className={loginStyles.container}>
      <h3 className="text text_type_main-medium">Восстановление пароля</h3>
      <form onSubmit={handleSubmit}>
        <Input
          type={"text"}
          placeholder={"Укажите e-mail"}
          //   onChange={(e) => setValue(e.target.value)}
          //   value={value}
          name={"e-mail"}
          error={false}
          ref={emailRef}
          //   onIconClick={onIconClick}
          errorText={"Ошибка"}
          size={"default"}
          extraClass="ml-1"
        />
        <Button htmlType="submit" type="primary" size="large" >
            Восстановить
        </Button>
      </form>
      <div className={loginStyles.group}>
        <span className="text text_type_main-default">Вспомнили пароль?</span>
        <Link to="/login" className="text text_type_main-default">Войти</Link>
      </div>
    </div>
  );
}

export default ForgotPassword;
