import React from "react";
import { useFetchData } from "../hooks/fetchData";
import styles from "./cases.module.css";

export default function Main(props) {
  const { selected, data } = props;
  const cases = data[selected].All;
  const totals = {
    confirmed: cases.confirmed,
    recovered: cases.confirmed - cases.deaths,
    deaths: cases.deaths,
  };
  // console.log(cases);
  const max = Math.max(...Object.values(totals));

  return (
    <div className={styles.graph}>
      {Object.keys(totals).map((val, index) => {
        return (
          <div
            key={index}
            className={`${styles.bar} ${styles[`bar${index}`]}`}
            style={{ height: `${(totals[val] / max) * 100}%` }}
          >
            {val}
          </div>
        );
      })}
    </div>
  );
}
