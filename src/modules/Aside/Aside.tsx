import { InterfaceAside } from '../../components/InterfaceAside/InterfaceAside';
import { UserList } from '../../components/UserList/UserList';
import styles from './aside.module.sass';

export const Aside = () => {
  return (
    <aside className={styles.aside}>
      <InterfaceAside />
      <UserList />
    </aside>
  )
};
