import React, { useEffect, useRef, useState } from "react";
import profileFormStyles from "./profileForm.module.css";
import { Input, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../services/user/selectors";
import { isDisabled } from "@testing-library/user-event/dist/utils";
import { updateUserInfo } from "../../services/user/action";

function ProfileForm() {
  const [showButtons, setShowButtons] = useState(false);
  const [inputsState, setInputsState] = useState({
    name: { isDisabled: true, icon: "EditIcon" },
    login: { isDisabled: true, icon: "EditIcon" },
    password: { isDisabled: true, icon: "EditIcon" },
  });
  const user = useSelector(getUser);
  const inputRefs = {
    name: useRef(null),
    login: useRef(null),
    password: useRef(null),
  };
  const dispatch = useDispatch();
  useEffect(() => {
    if (inputRefs.name.current) inputRefs.name.current.value = user.name || "";
    if (inputRefs.login.current) inputRefs.login.current.value = user.email || "";
    if (inputRefs.password.current) inputRefs.password.current.value = "";
  }, [user]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = inputRefs.name.current.value;
    const login = inputRefs.login.current.value;
    const password = inputRefs.password.current.value;
    dispatch(
      updateUserInfo({
        name: name,
        login: login,
        password: password,
      })
    );
    setShowButtons(false);
  };
  const toggleInput = (inputName) => {
    setInputsState((prev) => ({
      ...prev,
      [inputName]: {
        isDisabled: !prev[inputName].isDisabled,
        icon: prev[inputName].isDisabled ? "CloseIcon" : "EditIcon",
      },
    }));
    setTimeout(() => {
      if (inputRefs[inputName].current) {
        inputRefs[inputName].current.focus();
      }
    }, 0);
  };
  const handleChange = () => {
    const nameChanged = inputRefs.name.current?.value !== user.name;
    const loginChanged = inputRefs.login.current?.value !== user.email;
    const passwordChanged = inputRefs.password.current?.value.trim() !== "";

    setShowButtons(nameChanged || loginChanged || passwordChanged);
  };
  const handleResetClick = () => {
    inputRefs.name.current.value = user.name || "";
    inputRefs.login.current.value = user.email || "";
    inputRefs.password.current.value = "";
    setShowButtons(false);
  };
  return (
    <form onSubmit={handleSubmit} className={profileFormStyles.form}>
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
      <Input
        type={"text"}
        placeholder={"Логин"}
        name={"login"}
        error={false}
        ref={inputRefs.login}
        onIconClick={() => toggleInput("login")}
        errorText={"Ошибка"}
        size={"default"}
        extraClass="ml-1"
        icon={inputsState.login.icon}
        disabled={inputsState.login.isDisabled}
        onChange={handleChange}
      />
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
