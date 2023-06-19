import styles from "./ingredients.module.css";

import React from "react";

export const Ingredients = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.h2}>Ingredients</h2>
      <div className={styles.container__ingredients}>
        <ul>
          <li>ingredient 1</li>
          <li>ingredient 2</li>
          <li>ingredient 3</li>
          <li>ingredient 4</li>
          <li>ingredient 5</li>
        </ul>
      </div>
    </div>
  );
};
export default Ingredients;
