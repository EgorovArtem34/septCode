import { useState } from "react";
import styles from "./interfaceAside.module.sass";
import { Button } from "../../ui";
import LoupeSvg from "../../assets/icons/Button/loupe.svg";
import FilterSvg from "../../assets/icons/Button/Filter.svg";
import PlusSvg from "../../assets/icons/Button/Plus.svg";

export const InterfaceAside = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchUserValue, setSearchUserValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchUserValue(e.target.value);
  };

  const handleClose = () => {
    setIsSearchOpen(false);
    setSearchUserValue('');
  }

  return (
    <div className={styles.interface}>
      {isSearchOpen ? (
        <div className={styles.searchContainer}>
          <div className={styles.inputContainer}>
            <input
              type="search"
              aria-label="поиск пользователя"
              value={searchUserValue}
              onChange={handleChange}
              className={styles.input}
            />
            <img src={LoupeSvg} alt="Поиск" className={styles.searchImg} />
          </div>
          <Button variant="circle" aria-label="закрыть поиск" onClick={handleClose}>
            <img
              src={PlusSvg}
              alt="закрыть поиск"
              className={styles.closeImg}
            />
          </Button>
        </div>
      ) : (
        <div className={styles.btns}>
          <Button
            type="button"
            aria-label="поиск"
            variant="circle"
            onClick={() => setIsSearchOpen(true)}
          >
            <img src={LoupeSvg} alt="поиск" />
          </Button>
          <div className={styles.btnOptions}>
            <Button type="button" aria-label="фильтр" variant="circle">
              <img src={FilterSvg} alt="фильтр" />
            </Button>
            <Button type="button" aria-label="добавить" variant="circle">
              <img src={PlusSvg} alt="добавить" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
