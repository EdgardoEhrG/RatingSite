import React, { useEffect } from "react";

import { useScrollY } from "../../hooks/useScrollY";

import ButtonIcon from "../ButtonIcon/ButtonIcon";

import styles from "./Up.module.scss";

import { motion, useAnimation } from "framer-motion";
import { Appearances } from "../../constants/appearances";

const Up = (): JSX.Element => {
  const controls = useAnimation();

  const y = useScrollY();

  useEffect(() => {
    controls.start({ opacity: y / document.body.scrollHeight });
  }, [y, controls]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.button
      className={styles.up}
      animate={controls}
      initial={{ opacity: 0 }}
    >
      <ButtonIcon
        appearance={Appearances.PRIMARY}
        icon="UpIcon"
        onClick={scrollToTop}
      />
    </motion.button>
  );
};

export default Up;
