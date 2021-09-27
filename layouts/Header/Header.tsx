import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { HeaderProps } from "./Header.props";

import { Appearances } from "../../constants/appearances";

import ButtonIcon from "../../components/ButtonIcon/ButtonIcon";
import Sidebar from "../Sidebar/Sidebar";

import styles from "./Header.module.scss";

import classNames from "classnames";
import { motion } from "framer-motion";

const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
  const router = useRouter();

  const [isOpened, setOpened] = useState<boolean>(false);

  const variants = {
    opened: {
      opacity: 1,
      x: 0,
      transition: {
        stiffness: 20,
      },
    },
    closed: {
      opacity: 0,
      x: "100%",
    },
  };

  useEffect(() => {
    setOpened(false);
  }, [router]);

  return (
    <header {...props} className={classNames(className, styles.header)}>
      <ButtonIcon
        appearance={Appearances.WHITE}
        icon={"MenuIcon"}
        onClick={() => setOpened(true)}
      />
      <motion.div
        className={styles.mobilMenu}
        variants={variants}
        initial={"closed"}
        animate={isOpened ? "opened" : "closed"}
      >
        <Sidebar />
        <ButtonIcon
          className={styles.menuClose}
          appearance={Appearances.WHITE}
          icon={"CloseIcon"}
          onClick={() => setOpened(false)}
        />
      </motion.div>
    </header>
  );
};

export default Header;
