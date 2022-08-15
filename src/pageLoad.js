import getWeather from "./getWeather";
import Sun from "./images/sunny.png";
import weatherLogo from "./images/weather-logo.png";

const weather = () => {
  const 
}

export default function pageLoad() {
  const container = document.createElement("div");
  const header = document.createElement("header");
  const gotWeatherTitle = document.createElement("h1");
  const weatherDiv = document.createElement("div");
  const footer = document.createElement("footer");
  const authorCredit = document.createElement("p");

  container.classList.add("container");

  const sunIcon = new Image();
  sunIcon.classList.add("sun-logo");
  sunIcon.src = weatherLogo;

  gotWeatherTitle.textContent = "Got Weather?";
  gotWeatherTitle.classList.add("got-weather");

  authorCredit.textContent = `James Rozsypal © ${new Date().getFullYear()}`;

  header.appendChild(sunIcon);
  header.appendChild(gotWeatherTitle);
  footer.appendChild(authorCredit);
  container.appendChild(header);
  container.appendChild(footer);

  console.log("I'm the page loader mate!");
  console.log(getWeather());

  return container;
}
