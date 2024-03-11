import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.jsx";
import axios from "axios";
import "./index.css";

axios.defaults.baseURL = "https://agreeable-jersey-pig.cyclic.app";
axios.defaults.withCredentials = true;

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
