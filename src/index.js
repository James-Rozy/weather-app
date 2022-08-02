import "./style.css";
import pageLoad from "./pageLoad.js";

if (process.env.NODE_ENV !== "production") {
  console.log("We are currently in development mode!");
}

document.body.appendChild(pageLoad());
