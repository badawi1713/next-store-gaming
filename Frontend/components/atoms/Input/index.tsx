import React from "react";

interface InputProps {
  label?: string;
}

const Input = ({ label, ...nativeProps }: Partial<InputProps>) => {
  return (
    <>
      <label
        htmlFor="name"
        className="form-label text-lg fw-medium color-palette-1 mb-10"
      >
        {label}
      </label>
      <input
        type="text"
        className="form-control rounded-pill text-lg"
        id="name"
        name="name"
        aria-describedby="name"
        placeholder="Enter your name"
        {...nativeProps} //props default yang ada pada sebuah elemen input seperti onChange, dll
      />
    </>
  );
};

export default Input;
