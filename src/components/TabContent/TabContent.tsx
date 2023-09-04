import { Consultation } from "./contents/Consultation/Consultation";
import { Events } from "./contents/Events/Events";
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
        return <Events />;
    }
  };
  return <div className={styles.tabContent}>{getActiveContent()}</div>;
};
