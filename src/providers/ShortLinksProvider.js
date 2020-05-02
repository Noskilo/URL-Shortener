import React, { useState } from "react";
const ShortLinksContext = React.createContext();

const ShortLinksConsumer = ShortLinksContext.Consumer;

function ShortLinksProvider(props) {
  const keys = Object.keys(localStorage);

  const storedShortLinks = keys.map((key) =>
    JSON.parse(localStorage.getItem(key))
  );
  const [shortLinks, setShortLinks] = useState(storedShortLinks);

  return (
    <ShortLinksContext.Provider value={{ shortLinks, setShortLinks }}>
      {props.children}
    </ShortLinksContext.Provider>
  );
}

export default ShortLinksContext;
export { ShortLinksProvider, ShortLinksConsumer };
