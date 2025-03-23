import React from "react";
import loginStyles from "./login.module.css";
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";

function Login() {
  return (
    <div>
      <h3>Вход</h3>
      <form action="">
        <Input
          type={"text"}
          placeholder={"E-mail"}
          //   onChange={(e) => setValue(e.target.value)}
          //   value={value}
          name={"E-mail"}
          error={false}
          //   ref={inputRef}
          //   onIconClick={onIconClick}
          errorText={"Ошибка"}
          size={"default"}
          extraClass="ml-1"
        />
      </form>
    </div>
  );
}

export default Login;
