import React, { useRef } from "react";
import profileFormStyles from "./profileForm.module.css";
import { Input, Button } from "@ya.praktikum/react-developer-burger-ui-components";

function ProfileForm() {
    const nameRef = useRef(null);
    const loginRef = useRef(null);
    const passwordRef = useRef(null);
    const handleSubmit = (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const login = loginRef.current.value;
        const password = passwordRef.current.value;
        console.log(name, password)
    }
    return (
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
                    placeholder={"Пароль"}
                    //   onChange={(e) => setValue(e.target.value)}
                    //   value={value}
                    name={"login"}
                    error={false}
                    ref={loginRef}
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
            </form>
    )
}

export default ProfileForm;
