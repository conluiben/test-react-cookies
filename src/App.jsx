import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import * as klaro from "klaro";
// import "klaro/dist/klaro.css";

// const COOKIEBOT_ID = import.meta.env.VITE_COOKIEBOT_ID;

const klaroConfig = {
  elementID: "klaro",
  privacyPolicy: "/privacy.html",
  default: false,
  lang: "en",
  translations: {
    en: {
      consentModal: {
        title: "Cookies & Services",
        description: "Here you can decide what cookies are used on this site.",
      },
    },
  },
  apps: [
    {
      name: "google-analytics",
      title: "Google Analytics",
      purposes: ["statistics"],
      cookies: [/^_ga/, /^_gid/],
      default: false,
    },
  ],
};

function App() {
  const [count, setCount] = useState(0);
  // const [hasCookieBot, setHasCookieBot] = useState(undefined);
  // useEffect(() => {
  //   // Inject Klaro config into global scope
  //   window.klaroConfig = klaroConfig;

  //   // Dynamically load Klaro script (from CDN or locally)
  //   const script = document.createElement("script");
  //   script.src = "https://cdn.kiprotect.com/klaro/latest/klaro.js";
  //   script.defer = true;
  //   script.setAttribute("data-config", "klaroConfig");

  //   document.head.appendChild(script);
  // }, []);
  useEffect(() => {
    klaro.setup(klaroConfig);
    window.klaro = klaro; // for console debugging or manual access
  }, []);
  return (
    <>
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
