import styles from "./Glass.module.css";
import picture from "../../assets/Collins.png";

import React from "react";

export const Glass = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.h2}>Glass</h2>
      <div className={styles.glass}>
        <img src={picture} alt="glass" />
      </div>
    </div>
  );
};
export default Glass;
