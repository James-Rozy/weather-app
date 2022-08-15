const getWeather = (() => {
  const getData = (jsonData) => {
    const {
      name: city,
      main: { temp, feels_like: feelsLike, humidity },
      weather: [{ main: currentConditions }],
      wind: { speed: windSpeed },
    } = jsonData;
    return { city, temp, feelsLike, humidity, currentConditions, windSpeed };
  };

  async function fetchWeatherData(
    cityName = "Detroit",
    stateName = "",
    countryName = "us"
  ) {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName},${stateName},${countryName}&appid=35ecb23e273b5b6cbd5cc0a74d66c3be`,
        { mode: "cors" }
      );
      if (!response.ok)
        throw new Error(
          `Location ${cityName}, ${stateName}, ${countryName} not found, try again.`
        );
      const weatherData = getData(await response.json());
      return { weatherData };
    } catch (error) {
      alert(error);
      console.log(error);
      return null;
    }
  }

  return fetchWeatherData;
})();

export default getWeather;
