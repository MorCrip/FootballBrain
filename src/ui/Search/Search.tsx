import React, { ChangeEvent, useState } from "react";

import { ReactComponent as Loupe } from "./assets/loupe.svg";

import styles from "./Search.module.scss";

type Props = {
  onSearch: (searchTerm: string) => void;
};

const Search: React.FC<Props> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form className={styles.search} onSubmit={handleSubmit}>
      <input type="text" value={searchTerm} onChange={handleChange} />
      <button type="submit">
        <Loupe />
      </button>
    </form>
  );
};

export default Search;
