import React, {useRef} from "react";
import loginStyles from "./login.module.css";
import { Input, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";

function ResetPassword() {
  const passwordRef = useRef(null);
  const codeRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const password = passwordRef.current.value;
    const code = codeRef.current.value;
    console.log(password, code)
  }
  return (
    <div className={loginStyles.container}>
      <h3 className="text text_type_main-medium">Восстановление пароля</h3>
      <form onSubmit={handleSubmit}>
        <Input
          type={"text"}
          placeholder={"Введите новый пароль"}
          //   onChange={(e) => setValue(e.target.value)}
          //   value={value}
          name={"password"}
          error={false}
          ref={passwordRef}
          //   onIconClick={onIconClick}
          errorText={"Ошибка"}
          size={"default"}
          extraClass="ml-1"
        />
        <Input
          type={"text"}
          placeholder={"Введите код из письма"}
          //   onChange={(e) => setValue(e.target.value)}
          //   value={value}
          name={"code"}
          error={false}
          ref={codeRef}
          //   onIconClick={onIconClick}
          errorText={"Ошибка"}
          size={"default"}
          extraClass="ml-1"
        />
        <Button htmlType="submit" type="primary" size="large" >
            Сохранить
        </Button>
      </form>
      <div className={loginStyles.group}>
        <span className="text text_type_main-default">Вспомнили пароль?</span>
        <Link to="/login" className="text text_type_main-default">Войти</Link>
      </div>
    </div>
  );
}

export default ResetPassword;
