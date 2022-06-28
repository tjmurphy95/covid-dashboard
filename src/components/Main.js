import React from "react";
import { useFetchData } from "../hooks/fetchData";
import styles from "./cases.module.css";

export default function Main(props) {
  const { selected, data } = props;
  const cases = data[selected].All;
  const totals = {
    confirmed: cases.confirmed,
    //API providing 0 for recovered, so calculated value instead
    recovered: cases.confirmed - cases.deaths,
    deaths: cases.deaths,
  };
  // console.log(cases);
  const max = Math.max(...Object.values(totals));

  return (
    <>
      <div className={styles.graph}>
        {[1, 2, 3, 4, 5].map((val) => {
          return (
            <div
              key={val}
              style={{ top: `${val * 20 - 20}%` }}
              className={styles.gridLines}
            >
              <p className={styles.values}>
                {(((6 - val) * 20 * max) / 100).toFixed(0)}
              </p>
            </div>
          );
        })}
        {Object.keys(totals).map((val, index) => {
          return (
            <div
              key={index}
              className={`${styles.bar} ${styles[`bar${index}`]}`}
              style={{ height: `${(totals[val] / max) * 100}%` }}
            >
              <p className={styles.barLabels}>{val}</p>
            </div>
          );
        })}
      </div>
      <div className={styles.countryInfo}>
        {Object.keys(cases).map((val, index) => {
          return (
            <div key={index} className={styles.info}>
              <p>{val.replaceAll("_", " ")}:</p>
              <p> {cases[val]}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
