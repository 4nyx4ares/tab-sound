import { useState } from "react";
import Pad from "./Pad";
import pads from "../public/data";

function App() {
  const [database, setDatabase] = useState(pads);

  const buttonElements = database.map((data) => <Pad {...data} />);

  return (
    <main>
      <div className="btn-container">{buttonElements}</div>
    </main>
  );
}

export default App;
