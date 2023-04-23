import React, { FC } from "react";

import { Menu } from "./componetns";

import styles from "./Main.module.scss";

const Main: FC = () => {
  return (
    <div className={styles.main}>
      <Menu />
    </div>
  );
};

export default Main;
