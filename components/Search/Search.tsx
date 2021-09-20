import React, { useState } from "react";
import { useRouter } from "next/router";

import { SearchProps } from "./Search.props";

import { Appearances } from "../../constants/appearances";

import CustomInput from "../CustomInput/CustomInput";
import CustomButton from "../CustomButton/CustomButton";
import SearchIcon from "../../public/icons/Search.svg";

import styles from "./Search.module.scss";

import classNames from "classnames";

const Search = ({ className, ...props }: SearchProps): JSX.Element => {
  const router = useRouter();

  const [search, setSearch] = useState<string>("");

  const goToSearch = () => {
    router.push({
      pathname: "/search",
      query: {
        q: search,
      },
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      goToSearch();
    }
  };

  return (
    <div className={classNames(className, styles.search)} {...props}>
      <CustomInput
        className={styles.input}
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <CustomButton
        appearance={Appearances.PRIMARY}
        className={classNames(styles.button)}
        onClick={goToSearch}
      >
        <SearchIcon />
      </CustomButton>
    </div>
  );
};

export default Search;
