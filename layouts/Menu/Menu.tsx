import React, { useContext } from "react";

import { useRouter } from "next/router";
import Link from "next/link";

import { AppContext } from "../../context";

import { FirstLevelMenuItem, PageItem } from "../../interfaces/menu";

import { firstLevelMenu } from "../../helpers/Menu";

import styles from "./Menu.module.scss";

import classNames from "classnames";
import { motion } from "framer-motion";

const Menu = (): JSX.Element => {
  const router = useRouter();

  const { menu, setMenu, firstCategory } = useContext(AppContext);

  const variants = {
    visible: {
      marginBottom: 20,
      transition: { when: "beforeChildren", staggerChildren: 0.1 },
    },
    hidden: {
      marginBottom: 0,
    },
  };

  const childVariants = {
    visible: {
      height: 29,
      opacity: 1,
    },
    hidden: {
      height: 0,
      opacity: 0,
    },
  };

  const openSecondLevel = (secondCategory: string) => {
    setMenu &&
      setMenu(
        menu.map((m) => {
          if (m._id.secondCategory === secondCategory) {
            m.isOpened = !m.isOpened;
          }
          return m;
        })
      );
  };

  const buildFirstLevel = (): JSX.Element => {
    return (
      <>
        {firstLevelMenu.map((m) => (
          <div key={m.route}>
            <Link href={`/${m.route}`}>
              <a>
                <div
                  className={classNames(styles.firstLevel, {
                    [styles.firstLevelActive]: m.id === firstCategory,
                  })}
                >
                  {m.icon}
                  <span>{m.name}</span>
                </div>
              </a>
            </Link>
            {m.id === firstCategory && buildSecondLevel(m)}
          </div>
        ))}
      </>
    );
  };

  const buildSecondLevel = (menuItem: FirstLevelMenuItem): JSX.Element => {
    return (
      <div className={styles.secondBlock}>
        {menu.map((m) => {
          if (
            m.pages.map((p) => p.alias).includes(router.asPath.split("/")[2])
          ) {
            m.isOpened = true;
          }

          return (
            <div key={m._id.secondCategory}>
              <div
                className={styles.secondLevel}
                onClick={() => openSecondLevel(m._id.secondCategory)}
              >
                {m._id.secondCategory}
              </div>
              <motion.div
                layout
                variants={variants}
                initial="hidden"
                animate={m.isOpened ? "visible" : "hidden"}
                className={classNames(styles.secondLevelBlock)}
              >
                {buildThirdLevel(m.pages, menuItem.route)}
              </motion.div>
            </div>
          );
        })}
      </div>
    );
  };

  const buildThirdLevel = (pages: PageItem[], route: string) => {
    return pages.map((p) => (
      <motion.div key={p._id} variants={childVariants}>
        <Link href={`/${route}/${p.alias}`}>
          <a
            className={classNames(styles.thirdLevel, {
              [styles.thirdLevelActive]:
                `/${route}/${p.alias}` === router.asPath,
            })}
          >
            {p.category}
          </a>
        </Link>
      </motion.div>
    ));
  };

  return <div>{buildFirstLevel}</div>;
};

export default Menu;
