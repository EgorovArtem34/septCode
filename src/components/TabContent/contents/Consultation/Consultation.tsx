import styles from "./consultation.module.sass";
import cn from "classnames";
import { consultations } from "../../../../../utils/constants";

const firstConsultationIndex = 0;

export const Consultation = () => {
  const consultationClass = (i: number) =>
    cn(styles.consultation, {
      [styles["active"]]: i === firstConsultationIndex,
    });

  return (
    <div className={styles.consultations}>
      {consultations.map((consultation, i: number) => (
        <div className={consultationClass(i)} key={consultation.id}>
          <div className={styles.imageContainer}>
            <img
              src={consultation.image}
              alt="иконка"
              className={styles.image}
            />
          </div>
          <div className={styles.info}>
            <p className={styles.title}>{consultation.title}</p>
            <div>
              <p className={styles.date}>{consultation.date}</p>
              {!consultation.isConfirmed && (
                <span className={styles.unConfirmed}>Не подверждена</span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
