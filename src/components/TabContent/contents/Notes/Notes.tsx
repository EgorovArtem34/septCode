import styles from "./notes.module.sass";
import { notes } from "../../../../../utils/constants";
import { DropDown } from "../../../DropDown/DropDown";

export const Notes = () => {
  return (
    <div className={styles.notes}>
      {notes.map((note) => (
        <div className={styles.container} key={note.id}>
          <div className={styles.note}>
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
          <DropDown position="content" />
        </div>
      ))}
    </div>
  );
};
