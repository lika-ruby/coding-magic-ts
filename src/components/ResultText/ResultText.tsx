import styles from "./ResultText.module.scss";

type ResultTextProps = {
  text: string;
  type: "win" | "nothing" | "lose";
};

export const ResultText = ({ text, type }: ResultTextProps) => {
  return <p className={`${styles.text} ${styles[type]}`}>{text}</p>;
};
