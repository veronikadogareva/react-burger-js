import React, {useRef} from "react";
import loginStyles from "./login.module.css";
import { Input, Button } from "@ya.praktikum/react-developer-burger-ui-components";

function Login() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(email,password)
  }
  return (
    <div className={loginStyles.container}>
      <h3 className="text text_type_main-medium">Вход</h3>
      <form onSubmit={handleSubmit}>
        <Input
          type={"text"}
          placeholder={"E-mail"}
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
        <Input
          type={"text"}
          placeholder={"Пароль"}
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
        <Button htmlType="submit" type="primary" size="large" >
          Войти
        </Button>
      </form>
    </div>
  );
}

export default Login;
