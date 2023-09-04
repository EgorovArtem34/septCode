import styles from "./videos.module.sass";
import { videos } from "../../../../../utils/constants";

export const Videos = () => {
  return (
    <div className={styles.videos}>
      {videos.map((video) => (
        <div className={styles.video} key={video.id}>
          <div className={styles.imageContainer}>
            <img src={video.image} alt="иконка" className={styles.image} />
          </div>
          <div className={styles.info}>
            <p className={styles.title}>{video.title}</p>
            <div>
              <p className={styles.author}>{video.author}</p>
              {video.date && <span className={styles.date}>{video.date}</span>}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
