import { useState } from "react";

export function useForm(inputValues = {}) {
    const [values, setValues] = useState(inputValues);
    const handleChange = (evt) => {
        const {value, name} = evt.target;
        setValues((prev) => ({...prev, [name]:value}));
    };
    return { values, handleChange, setValues };
}