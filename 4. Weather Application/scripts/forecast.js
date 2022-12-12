const apiKey = "cl1v12TU7DuB6liz5tpxcXvq99jYwMda";

// Receive weather information
const getWeather = async (id) => {
  const base = "http://dataservice.accuweather.com/currentconditions/v1/";
  const query = `${id}?apikey=${apiKey}`;
  const response = await fetch(base + query);
  const data = await response.json();
  return data[0];
};

// Receive city information
const getCity = async (city) => {
  const base = "http://dataservice.accuweather.com/locations/v1/cities/search";
  const query = `?apikey=${apiKey}&q=${city}`;
  const response = await fetch(base + query);
  const data = await response.json();
  return data[0];
};
