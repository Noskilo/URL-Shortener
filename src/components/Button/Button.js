import React from "react";
import styles from "./Button.module.scss";

function Button(props) {
  return (
    <button onClick={props.onClick}
      style={{
        fontSize: props.fontSize,
        borderRadius: props.rounded ? "2em" : "0.4em",
        backgroundColor: props.color
      }}
      type={props.type ? props.type : "button"}
    >
      <div className={styles.overlay}></div>
      {props.children}
    </button>
  );
}

export default Button;
