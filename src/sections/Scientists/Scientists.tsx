import { Section } from "../../components/Section/Section.tsx";
import { Btn } from "../../components/Btn/Btn.tsx";
import { useEffect, useState } from "react";
import {
  scientistData,
  btnData,
  type ScientistData,
} from "../../data/scientistData.ts";
import styles from "./Scientists.module.scss";

export const Scientists = () => {
  const [filter, setFilter] = useState<number | null>(null);
  const [result, setResult] = useState<ScientistData[]>(scientistData);

  useEffect(() => {
    switch (filter) {
      case 1:
        setResult(
          scientistData.filter((sc) => {
            const year = Number(sc.years.split("–")[0]);
            return year >= 1801 && year <= 1900;
          })
        );
        break;

      case 2:
        setResult(scientistData.filter((sc) => sc.name === "Albert Einstein"));
        break;

      case 3:
        setResult(
          [...scientistData].sort((a, b) => a.name.localeCompare(b.name))
        );
        break;

      case 4:
        setResult(
          scientistData.filter((sc) =>
            sc.name.split(" ").at(-1)?.startsWith("C")
          )
        );
        break;

      case 5:
        setResult(
          [...scientistData].sort((a, b) => {
            const aYears =
              Number(a.years.split("–")[1]) - Number(a.years.split("–")[0]);
            const bYears =
              Number(b.years.split("–")[1]) - Number(b.years.split("–")[0]);
            return aYears - bYears;
          })
        );
        break;

      case 6:
        setResult(scientistData.filter((sc) => !sc.name.startsWith("A")));
        break;

      case 7:
        const latest = scientistData.reduce((max, sc) =>
          Number(sc.years.split("–")[0]) > Number(max.years.split("–")[0])
            ? sc
            : max
        );
        setResult([latest]);
        break;

      case 8:
        const sorted = [...scientistData].sort((a, b) => {
          const aLife =
            Number(a.years.split("–")[1]) - Number(a.years.split("–")[0]);
          const bLife =
            Number(b.years.split("–")[1]) - Number(b.years.split("–")[0]);
          return bLife - aLife;
        });

        setResult([sorted[0], sorted[sorted.length - 1]]);
        break;

      case 9:
        setResult(
          scientistData.filter((sc) => {
            const [first, last] = sc.name.split(" ");
            return first[0] === last[0];
          })
        );
        break;

      default:
        setResult(scientistData);
    }
  }, [filter]);

  return (
    <Section title="Обери вченого/их">
      <ul className={styles.list}>
        {result.map((sc) => (
          <li className={styles.item} key={sc.id} id={String(sc.id)}>
            <p className={styles.name}>{sc.name}</p>
            <p className={styles.years}>{sc.years}</p>
          </li>
        ))}
      </ul>

      <div className={styles.btns}>
        {btnData.map((sc) => (
          <Btn
            text={sc.text}
            func={() => {
              setFilter(sc.id);
            }}
            btnType={"button"}
          ></Btn>
        ))}
      </div>
    </Section>
  );
};
