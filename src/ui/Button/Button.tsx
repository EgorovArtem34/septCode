import React, { ReactNode, ButtonHTMLAttributes } from "react";
import cn from 'classnames';
import styles from "./button.module.sass";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant: string;
  isActive?: boolean;
  type?: "button" | "submit" | "reset";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  isActive = false,
  type = "button",
  ...rest
}) => {

  const buttonClass = cn(styles.button, {
    [styles[variant]]: variant,
    [styles['active']]: isActive,
  });

  return (
    <button
      className={`${buttonClass}`}
      type={type}
      {...rest}
    >
      {children}
    </button>
  );
};
