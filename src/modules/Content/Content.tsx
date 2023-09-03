import { useState } from "react";
import styles from "./content.module.sass";
import { HeaderUser } from "../../components/HeaderUser/HeaderUser";
import { Tabs } from "../../components/Tabs/Tabs";
import { TabContent } from "../../components/TabContent/TabContent";
import { tabs } from "../../../utils/constants";
import CircleImg from '../../assets/icons/Button/circle.svg'
import { Button } from "../../ui/index";

export const Content = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className={styles.contentContainer}>
      <HeaderUser />

      <div className={styles.menu}>
        <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className={styles.newNotion}>
          <span>Новая заметка</span>
          <Button variant="transparent" aria-label="добавить заметку">
            <img src={CircleImg} alt="кнопка" />
          </Button>
        </div>
      </div>

      <TabContent activeTab={activeTab} />
    </div>
  );
};
