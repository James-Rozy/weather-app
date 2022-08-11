import Sun from "./images/sunny.png";

export default function pageLoad() {
  const container = document.createElement("div");
  const header = document.createElement("header");
  const gotWeatherTitle = document.createElement("h1");

  container.classList.add("container");

  const sunIcon = new Image();
  sunIcon.classList.add("sun-logo");
  sunIcon.src = Sun;

  gotWeatherTitle.textContent = "Got Weather?";
  gotWeatherTitle.classList.add("got-weather");

  header.appendChild(sunIcon);
  header.appendChild(gotWeatherTitle);
  container.appendChild(header);

  console.log("I'm the page loader mate!");

  return container;
}
