import React from "react";

import { AdvantagesProps } from "./Advantages.props";

import AdvantageIcon from "../../public/icons/Advantage.svg";

import styles from "./Advantages.module.scss";

const Advantages = ({ advantages }: AdvantagesProps): JSX.Element => {
  return (
    <>
      {advantages.map((advantage) => (
        <div key={advantage._id} className={styles.advantage}>
          <AdvantageIcon />
          <div className={styles.title}>{advantage.title}</div>
          <hr className={styles.vline} />
          <div className={styles.description}>{advantage.description}</div>
        </div>
      ))}
    </>
  );
};

export default Advantages;
