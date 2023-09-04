import cn from "classnames";
import { users } from "../../../utils/constants";
import { Button, Checkbox } from "../../ui/index";
import styles from "./interfaceUserList.module.sass";

interface InterfaceUserListProps {
  isShowSelectUsers: boolean;
  setIsShowSelectUsers: React.Dispatch<React.SetStateAction<boolean>>;
  handleChange: (id: number | string, value: boolean) => void;
  selectedUsersCount: number;
}

export const InterfaceUserList: React.FC<InterfaceUserListProps> = ({
  isShowSelectUsers,
  setIsShowSelectUsers,
  handleChange,
  selectedUsersCount,
}) => {
  const userCountClass = cn(styles.userCount, {
    [styles["checked"]]: isShowSelectUsers,
  });
  const handleCancel = () => {
    setIsShowSelectUsers(false);
    handleChange("all", false);
  };
  return (
    <div className={styles.interface}>
      <div className={styles.checkboxInfo}>
        {isShowSelectUsers && (
          <Checkbox
            id={"all"}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChange("all", e.target.checked)
            }
          >
            Все
          </Checkbox>
        )}
        <div className={userCountClass}>
          <span>{isShowSelectUsers ? selectedUsersCount : users.length}</span>
        </div>
      </div>

      <div className={styles.btns}>
        {isShowSelectUsers ? (
          <>
            <Button variant="transparent" aria-label="действия">
              Действия
            </Button>
            <Button
              variant="transparent"
              onClick={handleCancel}
              aria-label="отменить"
            >
              Отменить
            </Button>
          </>
        ) : (
          <Button
            variant="transparent"
            onClick={() => setIsShowSelectUsers(true)}
            aria-label="выбрать"
          >
            Выбрать
          </Button>
        )}
      </div>
    </div>
  );
};
