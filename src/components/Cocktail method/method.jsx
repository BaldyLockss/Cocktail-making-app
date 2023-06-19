import styles from "./method.module.css";

import React from "react";

export const Method = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.h2}>Method</h2>
      <div className={styles.method}>
        <ul className={styles.ul}>
          <li>Method 1</li>
          <li>Method 2</li>
          <li>Method 3</li>
          <li>Method 4</li>
        </ul>
      </div>
    </div>
  );
};
export default Method;
