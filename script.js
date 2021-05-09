// Challenge 2

// async function getWeather(apikey, zip, callback) {
// 	const units = 'imperial';
// 	const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apikey}&units=${units}`;
// 	fetch(path)
// 		.then((res) => res.json())
// 		.then((json) => {
// 			callback(json.main.temp, json.weather[0].description);
// 		})
// 		.catch((err) => console.log(err.message));
// }

// Challenge 3

// function getWeather(zip, apikey, units = 'imperial') {
// 	const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apikey}&units=${units}`;
// 	const resPromise = fetch(path);

// 	const jsonP = resPromise.then((res) => res.json());
// 	return jsonP;
// return fetch(path).then((res) => res.json());
// }

// Challenge 4

// async function getWeather(zip, apikey, units = 'imperial') {
// 	const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apikey}&units=${units}`;
// 	const res = await fetch(path);

// 	const json = await res.json();
// 	return json;
// }

// Challenge 5

// async function getWeather(zip, apikey, units = 'imperial') {
// 	const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apikey}&units=${units}`;

// 	try {
// 		const res = await fetch(path);
// 		const json = await res.json();
// 		const weatherData = {
// 			code: json.cod,
// 			temp: json.main.temp,
// 			weather: json.weather[0].description,
// 			coord: json.coord,
// 			feels_like: json.main.feels_like,
// 			temp_min: json.main.temp_min,
// 			temp_max: json.main.temp_max,
// 			humidity: json.main.humidity,
// 			pressure: json.main.pressure,
// 		};
// 		return weatherData;
// 		return json;
// 	} catch (err) {
// 		return err;
// 	}
// }

// Challenge 7

async function getWeather(path) {
	try {
		const res = await fetch(path);
		const json = await res.json();
		const weatherData = {
			code: json.cod,
			temp: json.main.temp,
			weather: json.weather[0].description,
			coord: json.coord,
			feels_like: json.main.feels_like,
			temp_min: json.main.temp_min,
			temp_max: json.main.temp_max,
			humidity: json.main.humidity,
			pressure: json.main.pressure,
		};
		return weatherData;
	} catch (err) {
		return err;
	}
}

function getWeatherByZip(apikey, zip, units = 'imperial') {
	const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apikey}&units=${units}`;
	return getWeather(path);
}

function getWeatherByCity(apikey, city, units = 'imperial') {
	const path = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=${units}`;
	return getWeather(path);
}

function getWeatherByGeo(apikey, lat, lon, units = 'imperial') {
	const path = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}?lon=${lon}&appid=${apikey}&units=${units}`;
	return getWeather(path);
}

// module.exports = {
// 	getWeather,
// };

export { getWeather, getWeatherByCity, getWeatherByZip, getWeatherByGeo };
