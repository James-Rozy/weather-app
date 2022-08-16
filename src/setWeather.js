export default function setWeather(data) {
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
}
