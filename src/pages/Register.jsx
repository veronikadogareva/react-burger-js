import React, {useRef} from "react";
import registerStyles from "./register.module.css";
import loginStyles from "./login.module.css";
import { Input, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";

function Register() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const nameRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const name = nameRef.current.value;
    console.log(name, email,password)
  }
  return (
    <div className={loginStyles.container}>
      <h3 className="text text_type_main-medium">Регистрация</h3>
      <form onSubmit={handleSubmit}>
      <Input
          type={"text"}
          placeholder={"Имя"}
          //   onChange={(e) => setValue(e.target.value)}
          //   value={value}
          name={"name"}
          error={false}
          ref={nameRef}
          //   onIconClick={onIconClick}
          errorText={"Ошибка"}
          size={"default"}
          extraClass="ml-1"
        />
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
          icon="EyeIcon"
        />
        <Button htmlType="submit" type="primary" size="large" >
            Зарегистрироваться
        </Button>
      </form>
      <div className={loginStyles.group}>
        <span className="text text_type_main-default">Уже зарегистрированы?</span>
        <Link to="/login" className="text text_type_main-default">Войти</Link>
      </div>
    </div>
  );
}

export default Register;
