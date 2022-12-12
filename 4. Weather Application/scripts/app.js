const form = document.querySelector(".change-location"),
  card = document.querySelector(".card"),
  details = document.querySelector(".details"),
  time = document.querySelector("img.time");

const updateUI = (data) => {
  const { cityDetails, weather } = data;
  details.innerHTML = `
        <div class="text-white uppercase text-center details">
            <h5 class="my-4 text-3xl">${cityDetails.EnglishName}</h5>
            <div class="my-6">${weather.WeatherText}</div>
            <div class="text-4xl py-4">
              <span>${weather.Temperature.Metric.Value}</span>
              <span>&deg;C</span>
            </div>
        </div>
  `;

  if (card.classList.contains("hidden")) {
    card.classList.remove("hidden");
  }

  weather.IsDayTime
    ? (time.src = "./images/daytime.jpeg")
    : (time.src = "./images/nighttime.jpg");
};

const updateCity = async (city) => {
  const cityDetails = await getCity(city);
  const weather = await getWeather(cityDetails.Key);
  return {
    cityDetails,
    weather,
  };
};
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const cityName = form.city.value.trim();
  form.reset();
  updateCity(cityName)
    .then((data) => updateUI(data))
    .catch((error) => console.log(error));

  localStorage.setItem("city", cityName);
});

if (localStorage.getItem("city")) {
  updateCity(localStorage.getItem("city"))
    .then((data) => updateUI(data))
    .catch((error) => console.log(error));
}
