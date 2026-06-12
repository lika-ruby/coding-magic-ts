import { useState, type Dispatch, type SetStateAction } from "react";
import { Btn } from "../Btn/Btn.tsx";
import styles from "./Input.module.scss";

type InputProps = {
  placeholder: string;
  func: Dispatch<SetStateAction<number | null>>;
  inputType: string;
};

export const Input = ({ placeholder, func, inputType }: InputProps) => {
  const [text, setText] = useState<string>("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    func(Number(e.target.value));
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    func(Number(text));
    setText("");
  };

  return (
    <>
      {inputType === "single" && (
        <input
          className={styles.input}
          type="number"
          placeholder={placeholder}
          value={text}
          onChange={handleInput}
        />
      )}
      {inputType === "wBtn" && (
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            className={styles.input}
            type="number"
            placeholder={placeholder}
            value={text}
            onChange={handleChange}
          />
          <Btn text={"Q"} btnType={"submit"} />
        </form>
      )}
    </>
  );
};
