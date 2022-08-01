import Sun from "./images/sunny.png";

export default function pageLoad() {
  const container = document.createElement("div");
  const gotWeatherP = document.createElement("p");

  const sunIcon = new Image();
  sunIcon.src = Sun;

  gotWeatherP.textContent = "Got Weather?";
  gotWeatherP.classList.add("got-weather");

  container.appendChild(sunIcon);
  container.appendChild(gotWeatherP);

  console.log("I'm the page loader mate!");

  return container;
}
