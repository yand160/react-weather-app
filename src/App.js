import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          <strong>
            This project was coded with ❤️ by Yandia Alexis and is
            <a
              href="https://github.com/yand160/react-weather-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              open-sourced on Github
            </a>{" "}
            and{" "}
            <a
              href="https://app.netlify.com/sites/teal-pixie-c3350e/overview"
              target="_blank"
              rel="noopener noreferrer"
            >
              hosted on Netlify
            </a>
          </strong>
        </footer>
      </div>
    </div>
  );
}
