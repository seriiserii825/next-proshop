import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faUser } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./Header.module.scss";

const Header = () => {
  const router = useRouter();
  return (
    <header className={styles.header}>
      {router.pathname === "/" ? (
        <h1>ProShop</h1>
      ) : (
        <Link href="/">
          <a>
            <h1>ProShop</h1>
          </a>
        </Link>
      )}
      <div className={styles.menu}>
        <Link href="/cart">
          <a className={styles.item}>
            <FontAwesomeIcon icon={faCartPlus} />
            <span>Cart</span>
          </a>
        </Link>
        <Link href="/login">
          <a className={styles.item}>
            <FontAwesomeIcon icon={faUser} />
            <span>Sign in</span>
          </a>
        </Link>
      </div>
    </header>
  );
};

export default Header;
