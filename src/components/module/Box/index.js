import React from "react";
import { useSelector } from "react-redux";
import styles from "./box.module.css";
const Box = () => {
  const {
    counter: { email },
  } = useSelector((state) => state);
  return (
    <div className={styles.container}>
      <p>email : {email}</p>
    </div>
  );
};

export default Box;
