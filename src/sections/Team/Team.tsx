import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import styles from "./Team.module.scss";
import { Section } from "../../components/Section/Section.tsx";
import { teamData } from "../../data/teamData.ts";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const Team = () => {
  return (
    <>
      <Section title={"Наша команда"}>
        <Swiper
          className={styles.swiper}
          spaceBetween={50}
          slidesPerView={"auto"}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
        >
          {teamData.map((t) => (
            <SwiperSlide className={styles.slideWrap}>
              <div className={styles.slide}>
                <img src={t.image} alt={t.name} />
                <p className={styles.name}>{t.name}</p>
                <p className={styles.role}>{t.role}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Section>
    </>
  );
};
