import React from "react";

type InputProps = {
  typeInput?: string;
  idInput: string;
  forInput: string;
  nameInput: string;
  mode?: "input" | "textarea";
  children: React.ReactNode;
  value: string;
  onChange: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  error?: string;
};

export default function Input({
  typeInput,
  idInput,
  nameInput,
  forInput,
  children,
  value,
  onChange,
  error,
  mode = "input",
}: InputProps) {
  return (
    <div className="contact-form__wrapper">
      {mode === "input" ? (
        <>
          <input
            onChange={onChange}
            value={value}
            className={`contact-form__input ${
              error ? "contact-form__input--error" : ""
            }`}
            type={typeInput}
            id={idInput}
            name={nameInput}
            placeholder=" "
          />
          <label className="contact-form__label" htmlFor={forInput}>
            {children}
          </label>
        </>
      ) : (
        <>
          <textarea
            onChange={onChange}
            value={value}
            rows={4}
            className={`contact-form__textarea ${
              error ? "contact-form__textarea--error" : ""
            }`}
            name={nameInput}
            id={idInput}
            placeholder=" "
          ></textarea>
          <label className="contact-form__label" htmlFor={forInput}>
            {children}
          </label>
        </>
      )}
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}
