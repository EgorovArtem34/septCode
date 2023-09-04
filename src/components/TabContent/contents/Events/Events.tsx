import styles from "./events.module.sass";
import { events } from "../../../../../utils/constants";

export const Events = () => {
  return (
    <div className={styles.events}>
      {events.map((event) => (
        <div className={styles.event} key={event.id}>
          <div className={styles.imageContainer}>
            <img src={event.image} alt="иконка" className={styles.image} />
          </div>
          <div className={styles.info}>
            <p className={styles.title}>{event.title}</p>
            <div className={styles.tags}>
              {event.tags.map((tag) => (
                <div className={styles.tag} key={tag.name}>
                  <img src={tag.image} alt={tag.description} />
                  <p className={styles.name}>{tag.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
