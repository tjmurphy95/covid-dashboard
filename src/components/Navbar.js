import React, { useState } from "react";
import styles from "./navbar.module.css";
import { useFetchData } from "../hooks/fetchData";

export default function Navbar(props) {
  const { selected, open, setOpen, data, loading, error } = props;

  if (error) {
    return <div>Oh Damn</div>;
  }
  return (
    <div className={styles.navbar} onClick={() => setOpen(!open)}>
      {/* conditional render */}
      {loading ? (
        <div>Loading</div>
      ) : (
        <div className={styles.subText}>{selected}</div>
      )}
      <i
        style={{
          transform: `${open ? "rotate(180deg)" : ""}`,
          transitionDuration: "300ms",
        }}
        className="fa-solid fa-chevron-down"
      ></i>
    </div>
  );
}
