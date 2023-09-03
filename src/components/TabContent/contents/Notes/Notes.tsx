import styles from "./notes.module.sass";
import { notes } from "../../../../../utils/constants";

export const Notes = () => {
  return (
    <div className={styles.notes}>
      {notes.map((note: any) => (
        <div className={styles.note} key={note.id}>
          <p className={styles.text}>
            <span className={styles.date}>{note.date}</span>
            {note.text}
          </p>
          {note.mediaContent && (
            <img
              src={note.mediaContent}
              alt="медиа"
              className={styles.media}
            />
          )}
        </div>
      ))}
    </div>
  );
};
