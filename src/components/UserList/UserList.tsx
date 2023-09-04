import { useState } from "react";
import cn from "classnames";
import styles from "./userList.module.sass";
import { users } from "../../../utils/constants";
import notificationImg from "../../assets/icons/attention.svg";
import newMessageImg from "../../assets/icons/message.svg";
import { InterfaceUserList } from "../InterfaceUserList/InterfaceUserList";
import { Checkbox } from "../../ui/index";
import { IUser } from "../../types/index";

export const UserList = () => {
  const [activeUserId, setActiveUserId] = useState(2);
  const [isShowSelectUsers, setIsShowSelectUsers] = useState(false);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const userClass = (user: IUser) =>
    cn(styles.user, {
      [styles["active"]]: user.id === activeUserId,
      [styles["message"]]: user.hasNewMessage,
    });

  const handleChange = (id: number | string, value: boolean) => {
    if (id === "all") {
      setSelectedIds(value ? users.map((user) => user.id) : []);
    } else {
      setSelectedIds((prev) =>
        value
          ? [...prev, id as number]
          : prev.filter((selectedId) => selectedId !== id)
      );
    }
  };

  return (
    <div className={styles.container}>
      <InterfaceUserList
        isShowSelectUsers={isShowSelectUsers}
        setIsShowSelectUsers={setIsShowSelectUsers}
        handleChange={handleChange}
        selectedUsersCount={selectedIds.length}
      />
      <div className={styles.users}>
        {users.map((user) => (
          <div className={userClass(user)} key={user.id}>
            {isShowSelectUsers && (
              <Checkbox
                id={`${user.id}`}
                checked={selectedIds.includes(user.id)}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleChange(user.id, e.target.checked)
                }
              />
            )}
            <img src={user.image} alt="аватар" className={styles.avatar} />
            <span className={styles.username}>{user.name}</span>
            {(user.hasNotification || user.hasNewMessage) && (
              <div className={styles.notifications}>
                {user.hasNotification && (
                  <img src={notificationImg} alt="уведомление" />
                )}
                {user.hasNewMessage && (
                  <img src={newMessageImg} alt="новое сообщение" />
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
