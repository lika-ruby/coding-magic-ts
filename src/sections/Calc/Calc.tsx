import { Section } from "../../components/Section/Section.tsx";
import { Input } from "../../components/Input/Input.tsx";
import { Btn } from "../../components/Btn/Btn.tsx";
import { useState } from "react";
import styles from "./Calc.module.scss";

export const Calc = () => {
  const [num1, setNum1] = useState<number | null>(null);
  const [num2, setNum2] = useState<number | null>(null);
  const [action, setAction] = useState<string>("");
  const [result, setResult] = useState<number | null>(null);

  const getAction = (type: string) => {
    setAction(type);
  };

  const calculate = () => {
    if (num1 === null || num2 === null) return;

    switch (action) {
      case "+":
        setResult(num1 + num2);
        break;
      case "-":
        setResult(num1 - num2);
        break;
      case "*":
        setResult(num1 * num2);
        break;
      case "/":
        setResult(num1 / num2);
        break;
      default:
        break;
    }
  };

  return (
    <Section title="Калькулятор">
      <form className={styles.form}>
        <Input
          placeholder={"Введіть число"}
          func={setNum1}
          inputType={"single"}
        />

        <div className={styles.btns}>
          <Btn
            text={"+"}
            func={() => {
              getAction("+");
            }}
            btnType={"button"}
          />
          <Btn
            text={"-"}
            func={() => {
              getAction("-");
            }}
            btnType={"button"}
          />
          <Btn
            text={"*"}
            func={() => {
              getAction("*");
            }}
            btnType={"button"}
          />
          <Btn
            text={"/"}
            func={() => {
              getAction("/");
            }}
            btnType={"button"}
          />
        </div>
        <Input
          placeholder={"Введіть число"}
          func={setNum2}
          inputType={"single"}
        />
        <Btn text={"="} func={calculate} btnType={"button"} />

        <p
          className={
            result ? `${styles.result} ${styles["black"]}` : styles.result
          }
        >
          {result ? result : "Результат:"}{" "}
        </p>
      </form>
    </Section>
  );
};
