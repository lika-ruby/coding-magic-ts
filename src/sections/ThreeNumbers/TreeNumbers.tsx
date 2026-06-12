import { Section } from "../../components/Section/Section.tsx";
import { Input } from "../../components/Input/Input.tsx";
import { useEffect, useState } from "react";
import styles from "./TreeNumbers.module.scss";

export const TheeNumbers = () => {
  const [num1, setNum1] = useState<number | null>(null);
  const [num2, setNum2] = useState<number | null>(null);
  const [num3, setNum3] = useState<number | null>(null);
  const [result, setResult] = useState<number | null>(null);

  useEffect(() => {
    setResult(Math.max(num1, num2, num3));
  }, [num1, num2, num3]);

  return (
    <Section title="Введіть 3 числа">
      <div className={styles.wrap}>
        <form className={styles.form}>
          <Input
            placeholder={"Введіть число"}
            func={setNum1}
            inputType={"single"}
          />
          <Input
            placeholder={"Введіть число"}
            func={setNum2}
            inputType={"single"}
          />
          <Input
            placeholder={"Введіть число"}
            func={setNum3}
            inputType={"single"}
          />
        </form>
        <p
          className={
            result ? `${styles.result} ${styles["black"]}` : styles.result
          }
        >
          {result ? result : "Результат:"}{" "}
        </p>
      </div>
    </Section>
  );
};
