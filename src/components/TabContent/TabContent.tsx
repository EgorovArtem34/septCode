import { Consultation } from "./contents/Consultation/Consultation";
import { Notes } from "./contents/Notes/Notes";
import { Videos } from "./contents/Videos/Videos";
import styles from "./tabContent.module.sass";

export const TabContent = ({ activeTab }: { activeTab: string }) => {
  const getActiveContent = () => {
    switch (activeTab) {
      case "Заметки":
        return <Notes />;
      case "Консультации":
        return <Consultation />;
      case "Видео":
        return <Videos />;
      case "Мероприятия":
        return "";
    }
  };
  return <div className={styles.tabContent}>{getActiveContent()}</div>;
};
