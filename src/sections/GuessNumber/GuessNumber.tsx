import { Section } from "../../components/Section/Section.tsx";
import { Input } from "../../components/Input/Input.tsx";
import { ResultText } from "../../components/ResultText/ResultText.tsx";
import { useEffect, useState } from "react";
import styles from "./GuessNumber.module.scss";

export const GuessNumber = () => {
  const [text, setText] = useState<string>("");
  const [type, setType] = useState<"win" | "nothing" | "lose">("lose");
  const [yourNum, setYourNum] = useState<number | null>(null);
  const [compNum, setCompNum] = useState<number>(
    () => Math.floor(Math.random() * 10) + 1
  );

  useEffect(() => {
    if (yourNum === null) {
      setText("Ви ще не ввели число.");
      setType("nothing");
      return;
    }
    if (yourNum < 1 || yourNum > 10) {
      setText("Ви ввели, яке не входить в діапазон від 1 до 10.");
      setType("nothing");
      return;
    }
    if (yourNum === compNum) {
      setText("Ви вгадали число комп'ютера!");
      setType("win");
      setCompNum(Math.floor(Math.random() * 10) + 1);
    } else {
      setText("Ви не вгадали число комп'ютера!");
      setType("lose");
    }
  }, [yourNum]);

  return (
    <Section title="Вгадай число комп’ютера від 1 до 10">
      <div className={styles.wrap}>
        <Input
          placeholder="Введіть число"
          func={setYourNum}
          inputType={"wBtn"}
        />
        <ResultText text={text} type={type} />
      </div>
    </Section>
  );
};
