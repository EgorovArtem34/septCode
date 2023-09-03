import { useState } from 'react';
import { Button } from '../../ui/index';
import styles from './dropDown.module.sass';
import Dots from '../../assets/icons/Button/dots.svg';

export const DropDown = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <div className={styles.dropdown}>
      <Button variant='dropdown' onClick={() => setIsOpenMenu(!isOpenMenu)}>
        <img src={Dots} alt="dots" />
      </Button>
      {isOpenMenu && (
        <div className={styles.menu}>
          <Button variant='dots'>Изменить</Button>
          <Button variant='dots'>Удалить</Button>
        </div>
      )}
    </div>
  )
}
