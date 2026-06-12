import styles from "./Btn.module.scss";

type BtnProps = {
  text: string;
  func?: () => void;
  btnType: "button" | "submit";
};

export const Btn = ({ text, func, btnType }: BtnProps) => {
  return (
    <button className={styles.btn} type={btnType} onClick={func}>
      {text}
    </button>
  );
};
