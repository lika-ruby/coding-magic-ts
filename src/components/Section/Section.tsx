import type { ReactNode } from "react";
import { Container } from "../../components/Container/Container.tsx";
import styles from "./Section.module.scss";

type SectionProps = {
  title: string;
  children: ReactNode;
};

export const Section = ({ title, children }: SectionProps) => {
  return (
    <section className={styles.sect}>
      <Container>
        <div className={styles.line}></div>
        <h2 className={styles.title}>{title}</h2>
        {children}
      </Container>
    </section>
  );
};
