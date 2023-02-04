import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1></h1>
        <Weather />
        <footer>
          This project was coded with ❤️ by Yandia Alexis and is{" "}
          <a
            href="https://github.com/yand160/react-weather-app"
            target="_blank"
          >
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}
