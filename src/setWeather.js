export default function setWeather(data) {
  const weatherDiv = document.querySelector(".weather");

  // prevent duplicate reports
  while (weatherDiv.firstChild) {
    weatherDiv.removeChild(firstChild);
  }

  const cityHeader = document.createElement("h3");
  const currWeather = document.createElement("div");
  const avgWeather = document.createElement("div");

  const temperature = document.createElement("p");
  const currConditions = document.createElement("p");
  const humidity = document.createElement("p");
  const windSpeed = document.createElement("p");

  const avgHeader = document.createElement("h3");
  const tempMax = document.createElement("p");
  const tempMin = document.createElement("p");
  const avgConditions = document.createElement("p");

  currWeather.classList.add("curr-weather");
  avgWeather.classList.add("avg-weather");

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

  currWeather.appendChild(cityHeader);
  currWeather.appendChild(temperature);
  currWeather.appendChild(currConditions);
  currWeather.appendChild(humidity);
  currWeather.appendChild(windSpeed);
  weatherDiv.appendChild(currWeather);
  avgWeather.appendChild(avgHeader);
  avgWeather.appendChild(tempMax);
  avgWeather.appendChild(tempMin);
  avgWeather.appendChild(avgConditions);
  weatherDiv.appendChild(avgWeather);
}
