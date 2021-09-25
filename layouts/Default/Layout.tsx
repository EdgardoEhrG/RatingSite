import React, { FunctionComponent } from "react";

import { LayoutProps } from "./Layout.props";

import { AppContextProvider, IAppContext } from "../../context";

import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";
import Up from "../../components/Up/Up";

import styles from "./Layout.module.scss";

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <>
        <Header className={styles.header} />
        <Sidebar className={styles.sidebar} />
        <div className={styles.content}>
          {children}
          {`CONTENT`}
        </div>
      </>
      <Footer className={styles.footer} />
      <Up />
    </div>
  );
};

export const withLayout = <T extends Record<string, unknown> & IAppContext>(
  Component: FunctionComponent<T>
) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
        <Layout>
          <Component {...props} />
        </Layout>
      </AppContextProvider>
    );
  };
};
