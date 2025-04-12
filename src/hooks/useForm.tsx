import { useState } from "react";

export function useForm<T>(inputValues: T) {
  const [values, setValues] = useState<T>(inputValues);
  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = evt.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };
  return { values, handleChange, setValues };
}
