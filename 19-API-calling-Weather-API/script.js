const submitButton = document.getElementById("submit-button");
const cityInput = document.getElementById("city-input");

const cityName = document.getElementById("city-name");
const cityLocalTime = document.getElementById("city-local-time")
const cityTemp = document.getElementById("city-temp")
const lastUpdated = document.getElementById("last-updated")


const getData = async (position) => {
  const promise = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=50a52a5604834306a2b62742252601&q=${position}&aqi=yes`
  );
  return await promise.json()
};


submitButton.addEventListener("click", async () => {
    const val = cityInput.value;
    const weatherData = await getData(val);
    cityName.innerText = weatherData.location.name + ',' +weatherData.location.region + ',' + weatherData.location.country
    cityLocalTime.innerText = weatherData.location.localtime;
    cityTemp.innerText = weatherData.current.temp_c
    lastUpdated.innerText = weatherData.current.last_updated
});
