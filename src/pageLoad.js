import getWeather from "./getWeather";
import Sun from "./images/sunny.png";
import weatherLogo from "./images/weather-logo.png";

const setWeather = (data) => {
  const weatherDiv = document.querySelector(".weather");
  const cityHeader = document.createElement("h3");
  const currWeather = document.createElement("div");
  const avgWeather = document.createElement("div");

  const temperature = document.createElement("p"); // `${Math.round(((data.temp - 273.15) * 9) / 5 + 32)}\xB0F`;
  const feelsLike = document.createElement("p"); // `${Math.round(((data.feelsLike - 273.15) * 9) / 5 + 32)}\xB0F`;
  const currConditions = document.createElement("p"); // `${data.currCondition}`;
  const humidity = document.createElement("p"); // `${data.humidity}%`;
  const windSpeed = document.createElement("p"); // `${data.speed}MPH`;

  const avgHeader = document.createElement("h3");
  const tempMax = document.createElement("p"); // `${Math.round(((data.tempMax - 273.15) * 9) / 5 + 32)}\xB0F`;
  const tempMin = document.createElement("p"); // `${Math.round(((data.tempMin - 273.15) * 9) / 5 + 32)}\xB0F`;
  const avgConditions = document.createElement("p"); // `${data.avgCondition}`;

  cityHeader.textContent = `Current weather in ${data.name}:`;
  temperature.textContent = `Temperature: ${Math.round(
    ((data.temp - 273.15) * 9) / 5 + 32
  )}\xB0F (feels like ${Math.round(
    ((data.feelsLike - 273.15) * 9) / 5 + 32
  )}\xB0F)`;
  currConditions.textContent = `Condiditons: ${data.currCondition}`;
  humidity.textContent = `Humidity: ${data.humidity}%`;
  windSpeed.textContent = `Wind speed: ${data.speed}mph`;

  avgHeader.textContent = "Today's average weather:";
  tempMax.textContent = `Max temperature: ${Math.round(
    ((data.tempMax - 273.15) * 9) / 5 + 32
  )}\xB0F`;
  tempMin.textContent = `Min temperature: ${Math.round(
    ((data.tempMin - 273.15) * 9) / 5 + 32
  )}\xB0F`;
  avgConditions.textContent = `Average condition: ${data.avgCondition}`;

  weatherDiv.appendChild(cityHeader);
  currWeather.appendChild(temperature);
  currWeather.appendChild(currConditions);
  currWeather.appendChild(humidity);
  currWeather.appendChild(windSpeed);
  weatherDiv.appendChild(currWeather);
  weatherDiv.appendChild(avgHeader);
  avgWeather.appendChild(tempMax);
  avgWeather.appendChild(tempMin);
  avgWeather.appendChild(avgConditions);
  weatherDiv.appendChild(avgWeather);
};

export default function pageLoad() {
  const container = document.createElement("div");
  const header = document.createElement("header");
  const gotWeatherTitle = document.createElement("h1");
  const inputDiv = document.createElement("div");
  const getCityInput = document.createElement("input");
  const getWeatherBtn = document.createElement("button");
  const weatherDiv = document.createElement("div");
  const footer = document.createElement("footer");
  const authorCredit = document.createElement("p");

  container.classList.add("container");
  weatherDiv.classList.add("weather");

  const logo = new Image();
  logo.classList.add("logo");
  logo.src = weatherLogo;

  getCityInput.type = "text";
  getCityInput.classList.add("city-input");
  getWeatherBtn.textContent = "Search";
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
  container.appendChild(weatherDiv);
  container.appendChild(footer);

  console.log("I'm the page loader mate!");

  return container;
}
