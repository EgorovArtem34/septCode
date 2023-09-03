import styles from './headerUser.module.sass';
import { users } from '../../../utils/constants';
import { DropDown } from '../DropDown/DropDown';

export const HeaderUser = () => {
  // активного пользователя можно было бы получать через useContext, redux, поскольку такой задачи не было, я не стал делать
  return (
    <div className={styles.container}>
      <div className={styles.userData}>
        <div className={styles.avatarContainer}>
          <img src={users[1].image} alt="аватар" className={styles.avatar} />
        </div>
        <div className={styles.username}>
          <p className={styles.name}>Рожков Денис Петрович</p>
          <p className={styles.age}>30 лет, муж</p>
        </div>
      </div>
      <DropDown />
    </div>
  )
};
