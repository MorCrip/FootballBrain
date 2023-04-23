import React, { FC } from "react";

import { Typography, Search } from "../../ui";

import { ReactComponent as Logo } from "../../assets/logo.svg";

import styles from "./NavBar.module.scss";

const NavBar: FC = () => {
  const handleSearch = (searchTerm: string) => {
    console.log(searchTerm);
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.search}>
        <Logo />
        <Typography className={styles.logoText}>BallBrain</Typography>
        <Search onSearch={handleSearch} />
      </div>
      <ul className={styles.nav}>
        <li className={styles.navItem}>
          <Typography className={styles.namItemText}>Таблицы</Typography>
        </li>
        <li className={styles.navItem}>
          <Typography className={styles.namItemText}>Таблицы</Typography>
        </li>
        <li className={styles.navItem}>
          <Typography className={styles.namItemText}>Таблицы</Typography>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
