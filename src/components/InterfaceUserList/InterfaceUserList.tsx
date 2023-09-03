import cn from "classnames";
import { useState } from "react";
import { users } from "../../../utils/constants";
import { Button, Checkbox } from "../../ui/index";
import styles from "./interfaceUserList.module.sass";

export const InterfaceUserList = ({
  isShowSelectUsers,
  setIsShowSelectUsers,
  handleChange,
  selectedUsersCount
}: any) => {
  const userCountClass = cn(styles.userCount, {
    [styles["checked"]]: isShowSelectUsers,
  });
  const handleCancel = () => {
    setIsShowSelectUsers(false);
    handleChange('all', false);
  }
  return (
    <div className={styles.interface}>
      <div className={styles.checkboxInfo}>
        {isShowSelectUsers && (
          <Checkbox
            id={"all"}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange('all', e.target.checked)}
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
            <Button variant="transparent">Действия</Button>
            <Button
              variant="transparent"
              onClick={handleCancel}
            >
              Отменить
            </Button>
          </>
        ) : (
          <Button
            variant="transparent"
            onClick={() => setIsShowSelectUsers(true)}
          >
            Выбрать
          </Button>
        )}
      </div>
    </div>
  );
};
