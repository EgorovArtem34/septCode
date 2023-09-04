import { useState } from "react";
import cn from "classnames";
import { Button } from "../../ui/index";
import styles from "./dropDown.module.sass";
import Dots from "../../assets/icons/Button/dots.svg";

export const DropDown = ({ position = "" }: { position?: string }) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const dropDownClass = cn(styles.dropdown, {
    [styles[position]]: position,
  });

  return (
    <div className={dropDownClass}>
      <Button
        variant="dropdown"
        onClick={() => setIsOpenMenu(!isOpenMenu)}
        aria-label="всплывающее меню"
      >
        <img src={Dots} alt="dots" />
      </Button>
      {isOpenMenu && (
        <div className={styles.menu}>
          <Button variant="dots" aria-label="изменить">
            Изменить
          </Button>
          <Button variant="dots" aria-label="удалить">
            Удалить
          </Button>
        </div>
      )}
    </div>
  );
};
