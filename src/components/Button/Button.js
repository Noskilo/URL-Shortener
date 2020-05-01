import React from "react";
import styles from "./Button.module.scss";

function Button(props) {
  return (
    <button
      style={{
        fontSize: props.fontSize,
        borderRadius: props.rounded ? "2em" : "0.4em",
      }}
      type={props.type ? props.type : "button"}
    >
      <div className={styles.overlay}></div>
      {props.children}
    </button>
  );
}

export default Button;
