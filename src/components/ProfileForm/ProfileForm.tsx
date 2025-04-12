import React, { useEffect, useRef, useState } from "react";
import profileFormStyles from "./profileForm.module.css";
import { Input, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../services/user/selectors";
import { updateUserInfo } from "../../services/user/action";
import { TProfileFormValues } from "../../utils/types";

function ProfileForm() {
  const [showButtons, setShowButtons] = useState(false);
  const [inputsState, setInputsState] = useState({
    name: { isDisabled: true, icon: "EditIcon" } as TProfileFormValues,
    email: { isDisabled: true, icon: "EditIcon" } as TProfileFormValues,
    password: { isDisabled: true, icon: "EditIcon" } as TProfileFormValues,
  });
  const user = useSelector(getUser);
  const inputRefs = {
    name: useRef<HTMLInputElement | null>(null),
    email: useRef<HTMLInputElement | null>(null),
    password: useRef<HTMLInputElement | null>(null),
  };
  const dispatch = useDispatch();
  useEffect(() => {
    if (inputRefs.name.current) inputRefs.name.current.value = user.name || "";
    if (inputRefs.email.current) inputRefs.email.current.value = user.email || "";
    if (inputRefs.password.current) inputRefs.password.current.value = "";
  }, [user, inputRefs.email, inputRefs.name, inputRefs.password]);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = inputRefs.name.current?.value;
    const email = inputRefs.email.current?.value;
    const password = inputRefs.password.current?.value;
    dispatch(
      //@ts-expect-error "redux"
      updateUserInfo({
        name: name,
        login: email,
        password: password,
      })
    );
    setShowButtons(false);
    setInputsState({
      name: { isDisabled: true, icon: "EditIcon" },
      email: { isDisabled: true, icon: "EditIcon" },
      password: { isDisabled: true, icon: "EditIcon" },
    });
  };
  const toggleInput = (inputName: "email" | "name" | "password") => {
    setInputsState((prev) => {
      const newState = { ...prev };
      for (let key in newState) {
        const k = key as keyof typeof newState;
        if (key !== inputName) {
          newState[k] = { isDisabled: true, icon: "EditIcon" };
        }
      }
      newState[inputName] = {
        isDisabled: !prev[inputName].isDisabled,
        icon: prev[inputName].isDisabled ? "CloseIcon" : "EditIcon",
      };
      return newState;
    });
    setTimeout(() => {
      if (inputRefs[inputName].current) {
        inputRefs[inputName].current.focus();
      }
    }, 0);
  };
  const handleChange = () => {
    const nameChanged = inputRefs.name.current?.value !== user.name;
    const loginChanged = inputRefs.email.current?.value !== user.email;
    const passwordChanged = inputRefs.password.current?.value.trim() !== "";

    setShowButtons(nameChanged || loginChanged || passwordChanged);
  };
  const handleResetClick = () => {
    if (inputRefs.name.current) inputRefs.name.current.value = user.name || "";
    if (inputRefs.email.current) inputRefs.email.current.value = user.email || "";
    if (inputRefs.password.current) inputRefs.password.current.value = "";
    setShowButtons(false);
    setInputsState({
      name: { isDisabled: true, icon: "EditIcon" },
      email: { isDisabled: true, icon: "EditIcon" },
      password: { isDisabled: true, icon: "EditIcon" },
    });
  };
  return (
    <form onSubmit={handleSubmit} className={profileFormStyles.form}>
      {/* @ts-expect-error "yandex" */}
      <Input
        type={"text"}
        placeholder={"Имя"}
        name={"name"}
        error={false}
        ref={inputRefs.name}
        onIconClick={() => toggleInput("name")}
        errorText={"Ошибка"}
        size={"default"}
        extraClass="ml-1"
        icon={inputsState.name.icon}
        disabled={inputsState.name.isDisabled}
        onChange={handleChange}
      />
      {/* @ts-expect-error "yandex" */}
      <Input
        type={"text"}
        placeholder={"Логин"}
        name={"email"}
        error={false}
        ref={inputRefs.email}
        onIconClick={() => toggleInput("email")}
        errorText={"Ошибка"}
        size={"default"}
        extraClass="ml-1"
        icon={inputsState.email.icon}
        disabled={inputsState.email.isDisabled}
        onChange={handleChange}
      />
      {/* @ts-expect-error "yandex" */}
      <Input
        type="password"
        placeholder={"Пароль"}
        name={"password"}
        error={false}
        ref={inputRefs.password}
        onIconClick={() => toggleInput("password")}
        errorText={"Ошибка"}
        size={"default"}
        extraClass="ml-1"
        icon={inputsState.password.icon}
        disabled={inputsState.password.isDisabled}
        onChange={handleChange}
      />
      <div className={profileFormStyles.buttons} style={{ display: showButtons ? "block" : "none" }} id="buttons">
        <button type="button" className={profileFormStyles.btn} onClick={handleResetClick}>
          Отмена
        </button>
        <Button htmlType="submit" type="primary" size="large">
          Сохранить
        </Button>
      </div>
    </form>
  );
}

export default ProfileForm;
