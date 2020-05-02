import React, { useState, useContext } from "react";
import styles from "./LinkShortener.module.scss";
import Button from "../Button/Button";
import ShortLinksContext from "../../providers/ShortLinksProvider";

function LinkShortener() {
  const [link, setLink] = useState({
    value: "",
    valid: true,
    visited: false,
    errorMessage: "",
  });

  const context = useContext(ShortLinksContext);

  function updateLink(event) {
    const { valueMissing } = event.target.validity;

    setLink({
      ...link,
      visited: true,
      errorMessage: valueMissing ? "Please add link" : "",
      valid: event.target.checkValidity(),
      value: event.target.value,
    });
  }

  function shortenLink(event) {
    event.preventDefault();
    const inputLink = event.target.elements["link"];

    console.log(inputLink.validity);
    if (!inputLink.checkValidity()) {
      let errorMessage = "";
      if (inputLink.validity.typeMismatch) {
        errorMessage = "Please enter a valid url";
      } else if (inputLink.validity.valueMissing) {
        errorMessage = "Please add link";
      }
      setLink({
        ...link,
        visited: true,
        errorMessage,
        valid: false,
      });
    } else {
      let headers = new Headers();
      headers.append("apiKey", process.env.API_KEY);
      headers.append("content-type", "application/json");

      fetch("https://api.rebrandly.com/v1/links", {
        method: "POST",
        mode: "cors",
        body: JSON.stringify({
          destination: link.value,
          domain: { fullName: "rebrand.ly" },
        }),
        headers,
      })
        .then((response) => response.json())
        .then((data) => {
          context.setShortLinks([
            ...context.shortLinks,
            {
              destination: data.destination,
              shortUrl: data.shortUrl,
            },
          ]);
        });
    }
  }

  return (
    <div style={{ position: "relative" }}>
      <div className={styles.container}>
        <form onSubmit={shortenLink} noValidate>
          <div className={styles.inputContainer}>
            <input
              className={link.visited ? styles.visited : ""}
              onChange={updateLink}
              name="link"
              value={link.value}
              aria-label="Link to shorten"
              type="url"
              placeholder="Shorten a link here..."
              spellCheck={false}
              required
            />
            {!link.valid && link.errorMessage && (
              <span className={styles.errorMessage}>{link.errorMessage}</span>
            )}
          </div>

          <Button type="submit">Shorten It!</Button>
        </form>
      </div>
    </div>
  );
}

export default LinkShortener;
