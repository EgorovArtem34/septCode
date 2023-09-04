import { Button } from "../../ui/index";
import styles from "./tabs.module.sass";

type TabsType = {
  tabs: string[];
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

export const Tabs = ({ tabs, activeTab, setActiveTab }: TabsType) => {
  const handleActiveTab = (tab: string) => {
    if (tab !== activeTab) {
      setActiveTab(tab);
    }
  };

  return (
    <div className={styles.tabs}>
      {tabs.map((tab) => (
        <Button
          variant="tabs"
          isActive={activeTab === tab}
          key={tab}
          onClick={() => handleActiveTab(tab)}>
          {tab}
        </Button>
      ))}
    </div>
  );
};
