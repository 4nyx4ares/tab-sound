import { useState } from "react";
import Pad from "./Pad";
import pads from "../public/data";

function App() {
  const [database, setDatabase] = useState(pads);

  const buttonElements = database.map((data) => (
    <Pad toggle={toggle} key={data.id} {...data} />
  ));

  function toggle(id) {
    console.log(id);
    setDatabase((prevDatabase) =>
      prevDatabase.map((data) =>
        data.id === id ? { ...data, on: !data.on } : data
      )
    );
  }
  return (
    <main>
      <div className="btn-container">{buttonElements}</div>
    </main>
  );
}

export default App;
