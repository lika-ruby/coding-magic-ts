import { Section } from "../../components/Section/Section.tsx";
import { Btn } from "../../components/Btn/Btn.tsx";
import { useState } from "react";
import styles from "./RSP.module.scss";

export const Rsp = () => {
  type Choice = "rock" | "scissors" | "paper";
  const choices: Choice[] = ["rock", "scissors", "paper"];

  const [yourChoice, setYourChoice] = useState<Choice | null>(null);
  const [computerChoice, setComputerChoice] = useState<Choice | null>(null);

  const [score, setScore] = useState({
    you: 0,
    computer: 0,
    draw: 0,
  });

  const chooseWinner = (answer: Choice) => {
    console.log(answer);
    setYourChoice(answer);

    const random = Math.floor(Math.random() * choices.length);
    const computer = choices[random];

    setComputerChoice(computer);

    if (answer === computer) {
      setScore((prev) => ({
        ...prev,
        draw: prev.draw + 1,
      }));
      return;
    }

    if (
      (answer === "rock" && computer === "scissors") ||
      (answer === "scissors" && computer === "paper") ||
      (answer === "paper" && computer === "rock")
    ) {
      setScore((prev) => ({
        ...prev,
        you: prev.you + 1,
      }));
      return;
    }

    setScore((prev) => ({
      ...prev,
      computer: prev.computer + 1,
    }));
  };

  const choiceLabels = {
    rock: "🪨 Камінь",
    scissors: "✂️ Ножиці",
    paper: "📄 Папір",
  };

  return (
    <Section title="Камінь - ножиці - папір">
      <div className={styles.wrap}>
        <div className={styles.btns}>
          <Btn
            text={"🪨"}
            func={() => chooseWinner("rock")}
            btnType={"button"}
          />
          <Btn
            text={"✂️"}
            func={() => chooseWinner("scissors")}
            btnType={"button"}
          />
          <Btn
            text={"📄"}
            func={() => chooseWinner("paper")}
            btnType={"button"}
          />
        </div>
        <p className={styles.text}>
          Ваш варіант: {yourChoice ? choiceLabels[yourChoice] : "Ще не обрано"}
        </p>
        <p className={styles.text}>
          Варіант комп’ютера:
          {computerChoice ? choiceLabels[computerChoice] : "Ще не обрано"}
        </p>

        <div className={styles.results}>
          <p className={styles.result}>Рахунок:</p>
          <p className={styles.result}>
            Комп’ютер - <span>{score.computer}</span>
          </p>
          <p className={styles.result}>
            Ви - <span>{score.you}</span>
          </p>
          <p className={styles.result}>
            Нічья - <span>{score.draw}</span>
          </p>
        </div>
      </div>
    </Section>
  );
};
