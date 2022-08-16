import getWeather from "./getWeather";
import setWeather from "./setWeather";
import weatherLogo from "./images/weather-logo.png";

export default function pageLoad() {
  const container = document.createElement("div");
  const header = document.createElement("header");
  const gotWeatherTitle = document.createElement("h1");
  const inputDiv = document.createElement("div");
  const getCityInput = document.createElement("input");
  const getWeatherBtn = document.createElement("button");
  const weatherContainer = document.createElement("div");
  const weatherDiv = document.createElement("div");
  const footer = document.createElement("footer");
  const authorCredit = document.createElement("p");

  container.classList.add("container");
  inputDiv.classList.add("input-div");
  weatherContainer.classList.add("weather-container");
  weatherDiv.classList.add("weather");

  const logo = new Image();
  logo.classList.add("logo");
  logo.src = weatherLogo;

  getCityInput.type = "text";
  getCityInput.classList.add("city-input");
  getWeatherBtn.textContent = "Search";
  getWeatherBtn.classList.add("search-btn");
  getWeatherBtn.addEventListener("click", async () => {
    if (getCityInput.value === "") return;
    const weatherData = await getWeather.fetchWeatherData(getCityInput.value);
    setWeather(weatherData);
  });

  gotWeatherTitle.textContent = "Got Weather?";
  gotWeatherTitle.classList.add("got-weather");

  authorCredit.textContent = `James Rozsypal © ${new Date().getFullYear()}`;

  header.appendChild(logo);
  header.appendChild(gotWeatherTitle);
  inputDiv.appendChild(getCityInput);
  inputDiv.appendChild(getWeatherBtn);
  footer.appendChild(authorCredit);
  container.appendChild(header);
  container.appendChild(inputDiv);
  weatherContainer.appendChild(weatherDiv);
  container.appendChild(weatherContainer);
  container.appendChild(footer);

  console.log("I'm the page loader mate!");

  return container;
}
