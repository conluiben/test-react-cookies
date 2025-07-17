import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CookieBot from "react-cookiebot";

function App() {
  const COOKIEBOT_ID = "";
  const [count, setCount] = useState(0);
  // const [hasCookieBot, setHasCookieBot] = useState(undefined);

  return (
    <>
      <CookieBot domainGroupId={COOKIEBOT_ID} />
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button
          onClick={() => {
            setCount((count) => count + 1);
            // setHasCookieBot(!!document.querySelector("#CookieBot"));
          }}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <p style={{ color: "red" }}>
        {/* {hasCookieBot && `Has CookieBot: ${JSON.stringify(hasCookieBot)}`} */}
      </p>
    </>
  );
}

export default App;
