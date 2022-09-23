import React, { useState } from "react";

const useForm = (callback: any, initialState = {}) => {
  const [values, setValues] = useState(initialState);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await callback();
  };

  return {
    values,
    onChange,
    onSubmit,
  };
};

export default useForm;
