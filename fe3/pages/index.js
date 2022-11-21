import React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Header = React.lazy(() => import("fe1/header"));

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>Square root of 4:</h1>
      </main>
    </div>
  );
}
