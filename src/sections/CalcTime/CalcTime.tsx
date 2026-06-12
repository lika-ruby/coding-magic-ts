import { Section } from "../../components/Section/Section.tsx";
import { Input } from "../../components/Input/Input.tsx";
import { Btn } from "../../components/Btn/Btn.tsx";
import { useState } from "react";
import styles from "./CalcTime.module.scss";

export const CalcTime = () => {
  const [time, setTime] = useState<number | null>(null);
  const [result, setResult] = useState<string>("");

  const getResult = (time: number | null) => {
    const days = Math.floor(time / 86400);

    const hours = Math.floor((time % 86400) / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    setResult(
      `${days} дн. ${String(hours).padStart(2, "0")}:${String(minutes).padStart(
        2,
        "0"
      )}:${String(seconds).padStart(2, "0")}`
    );
  };

  return (
    <Section title="Калькулятор часу">
      <div className={styles.wrap}>
        <form className={styles.form}>
          <Input
            placeholder={"Введіть число"}
            func={setTime}
            inputType={"single"}
          />

          <Btn
            text={"Q"}
            func={() => {
              getResult(time);
            }}
            btnType={"button"}
          />
        </form>

        <p
          className={
            result ? `${styles.result} ${styles["black"]}` : styles.result
          }
        >
          {result ? result : "Результат:"}
        </p>
      </div>
    </Section>
  );
};
