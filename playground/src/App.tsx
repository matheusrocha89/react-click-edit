import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { LuAArrowDown, LuArrowUp } from "react-icons/lu";
import { InputClickEdit } from "@nobrainers/react-click-edit";
import "./App.css";
import { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  const handleChange = (value: string) => {
    setValue(value);
  };
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <InputClickEdit onInputChange={handleChange} value={value} showIcons />
        <br />
        <InputClickEdit onInputChange={handleChange} value={value} iconsOnly />
        <br />
        <InputClickEdit
          onInputChange={handleChange}
          value={value}
          showIcons
          saveIcon={LuAArrowDown}
          editIcon={LuArrowUp}
        />
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
