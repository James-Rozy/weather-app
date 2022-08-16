const getWeather = (() => {
  function getData(jsonData) {
    const {
      name,
      weather: [{ main: avgCondition, description: currCondition }],
      main: {
        temp,
        temp_min: tempMin,
        temp_max: tempMax,
        feels_like: feelsLike,
        humidity,
      },
      wind: { speed },
    } = jsonData;

    return {
      name,
      avgCondition,
      currCondition,
      temp,
      tempMin,
      tempMax,
      feelsLike,
      humidity,
      speed,
    };
  }

  async function fetchWeatherData(cityName = "Detroit") {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=35ecb23e273b5b6cbd5cc0a74d66c3be`,
        { mode: "cors" }
      );
      if (!response.ok)
        throw new Error(`Location ${cityName} not found, try again.`);
      const weatherData = getData(await response.json());
      console.log(weatherData);
      return weatherData;
    } catch (error) {
      alert(error);
      console.log(error);
      return null;
    }
  }

  return { fetchWeatherData };
})();

export default getWeather;
