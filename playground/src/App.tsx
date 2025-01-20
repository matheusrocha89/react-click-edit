import { LuAArrowDown, LuArrowUp } from "react-icons/lu";
import { InputClickEdit } from "@nobrainers/react-click-edit";
import "./App.css";
import { useState } from "react";

function App() {
  const [valueOne, setValueOne] = useState("Test One");
  const [valueTwo, setValueTwo] = useState("Test Two");
  const [valueThree, setValueThree] = useState("Test Three");

  return (
    <>
      <h1>React Click Edit</h1>
      <div className="card">
        <h4>Label and Icon</h4>
        <InputClickEdit
          onInputChange={setValueOne}
          value={valueOne}
          showIcons
        />
        <br />
        <h4>Just Icons</h4>
        <InputClickEdit
          onInputChange={setValueTwo}
          value={valueTwo}
          iconsOnly
        />
        <br />
        <h4>Custom Icons</h4>
        <InputClickEdit
          onInputChange={setValueThree}
          value={valueThree}
          showIcons
          saveIcon={LuAArrowDown}
          editIcon={LuArrowUp}
        />
      </div>
    </>
  );
}

export default App;
