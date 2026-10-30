import React from "react";
import clsx from "clsx";
import styles from "./Button.module.css";
import { Camera, Home, User } from "lucide-react";

const MaketButton = ({ variant = "primary", isDisabled, isLoading }) => {
  return (
    <button
      type="button"
      disabled={isDisabled}
      className={clsx(styles.btndef, {
        [styles.primary]: variant === "primary",
        [styles.danger]: variant === "danger",
        [styles.disabled]: isDisabled,
        [styles.animatePulse]: isLoading,
      })}
    >
      <User size={22} color="white" /> Maket Button
    </button>
  );
};

export default MaketButton;
