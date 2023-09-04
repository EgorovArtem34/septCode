import { useState } from "react";
import styles from "./content.module.sass";
import { HeaderUser } from "../../components/HeaderUser/HeaderUser";
import { Tabs } from "../../components/Tabs/Tabs";
import { TabContent } from "../../components/TabContent/TabContent";
import { tabs } from "../../../utils/constants";
import CircleImg from "../../assets/icons/Button/circle.svg";
import { Button } from "../../ui/index";
import { defineTextMenu } from "../../../utils/defineTextMenu";

export const Content = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const textForButton = defineTextMenu(activeTab);
  return (
    <div className={styles.contentContainer}>
      <HeaderUser />

      <div className={styles.menu}>
        <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className={styles.newNotion}>
          <span>{textForButton}</span>
          <Button variant="transparent" aria-label={`добавить ${activeTab}`}>
            <img src={CircleImg} alt="кнопка" />
          </Button>
        </div>
      </div>

      <TabContent activeTab={activeTab} />
    </div>
  );
};
