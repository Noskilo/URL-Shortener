import React, { useState } from "react";
import styles from "./ShortLinkItem.module.scss";
import Button from "../Button/Button";

function ShortLinkItem(props) {
  const [copied, setCopied] = useState(false);

  function copyUrl(event) {
    copyToClipboard(props.shortUrl);
    setCopied(true);
  }

  function copyToClipboard(text) {
    var dummy = document.createElement("textarea");

    document.body.appendChild(dummy);

    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
  }

  return (
    <div className={styles.container}>
      <div className={styles.destination}>{props.destination}</div>

      <div className={styles.shortUrl}>
        <a href={`https://${props.shortUrl}`}>{props.shortUrl}</a>
      </div>

      <div className={styles.copy}>
        <Button onClick={copyUrl} color={copied ? "var(--primary-dark)" : null}>
          {copied ? "Copied!" : "Copy"}
        </Button>
      </div>
    </div>
  );
}

export default ShortLinkItem;
