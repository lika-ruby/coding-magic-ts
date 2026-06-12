import { Section } from "../../components/Section/Section.tsx";
import { Input } from "../../components/Input/Input.tsx";
import { ResultText } from "../../components/ResultText/ResultText.tsx";
import { useEffect, useState } from "react";
import styles from "./YearBorn.module.scss";

export const YearBorn = () => {
  const [year, setYear] = useState<number | null>(null);
  const [text, setText] = useState("Ви ще не ввели рік.");
  const [type, setType] = useState<"win" | "nothing" | "lose">("lose");

  useEffect(() => {
    if (year === null) {
      setText("Ви ще не ввели рік.");
      setType("nothing");
      return;
    }
    const isLeap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

    if (isLeap) {
      setText("Ви народилися у високосний рік!");
      setType("win");
    } else {
      setText("Ви народилися не у високосний рік!");
      setType("lose");
    }
  }, [year]);

  return (
    <Section title={"Перевір в який рік ти народився"}>
      <div className={styles.wrap}>
        <Input
          placeholder={"Введіть рік народження"}
          func={setYear}
          inputType={"wBtn"}
        />
        <ResultText text={text} type={type} />
      </div>
    </Section>
  );
};
