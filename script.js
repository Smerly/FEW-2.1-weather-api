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

async function getWeather(zip, apikey, units = 'imperial') {
	const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apikey}&units=${units}`;
	const res = await fetch(path);

	const json = await res.json();
	return json;
}

// module.exports = {
// 	getWeather,
// };

export default getWeather;
