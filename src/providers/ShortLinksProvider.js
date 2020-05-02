import React, { useState } from "react";
const ShortLinksContext = React.createContext();

const ShortLinksConsumer = ShortLinksContext.Consumer;

function ShortLinksProvider(props) {
  const [shortLinks, setShortLinks] = useState([]);

  return (
    <ShortLinksContext.Provider value={{ shortLinks, setShortLinks }}>
      {props.children}
    </ShortLinksContext.Provider>
  );
}

export default ShortLinksContext;
export { ShortLinksProvider, ShortLinksConsumer };
